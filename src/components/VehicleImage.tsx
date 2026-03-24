import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import { getOrGenerateVehicleImage, getStoredImage, memoryCache } from '../services/imageService';
import { ImageIcon, Loader2 } from 'lucide-react';

const getFallbackImage = (type: string) => {
  return `https://placehold.co/600x400/111827/4B5563?text=${encodeURIComponent(type)}+Image+Unavailable`;
};

interface VehicleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  vehicle: Vehicle;
}

export const VehicleImage: React.FC<VehicleImageProps> = ({ vehicle, className, alt, ...props }) => {
  const [src, setSrc] = useState<string | null>(memoryCache.get(vehicle.id) || null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCheckingDb, setIsCheckingDb] = useState(true);

  // Check IndexedDB on mount without triggering generation
  useEffect(() => {
    let isMounted = true;
    
    if (src) {
      setIsCheckingDb(false);
      return;
    }

    getStoredImage(vehicle.id)
      .then((storedImage) => {
        if (isMounted) {
          if (storedImage) {
            memoryCache.set(vehicle.id, storedImage);
            setSrc(storedImage);
          }
          setIsCheckingDb(false);
        }
      })
      .catch((err) => {
        console.error("Error checking DB for", vehicle.id, err);
        if (isMounted) {
          setIsCheckingDb(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [vehicle.id, src]);

  const handleGenerate = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isGenerating) return;
    
    setIsGenerating(true);
    setErrorMsg(null);
    
    try {
      const imageUrl = await getOrGenerateVehicleImage(vehicle);
      setSrc(imageUrl);
    } catch (err: any) {
      console.error("Error generating image for", vehicle.id, err);
      setErrorMsg(err.message || String(err) || "Unknown error");
    } finally {
      setIsGenerating(false);
    }
  };

  if (isCheckingDb) {
    return (
      <div className={`relative flex items-center justify-center bg-[#111827] overflow-hidden ${className || ''}`}>
        <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (errorMsg || !src) {
    // Show fallback with a manual generate button
    return (
      <div className={`relative flex flex-col items-center justify-center bg-[#111827] overflow-hidden group ${className || ''}`}>
        <img
          src={getFallbackImage(vehicle.type)}
          alt={alt || vehicle.name}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
          {...props}
        />
        
        <div className="relative z-10 flex flex-col items-center gap-3 p-4">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <ImageIcon className="w-4 h-4" />
                Generate Image
              </>
            )}
          </button>
          
          {errorMsg && (
            <div className="text-[10px] text-red-400 bg-black/80 p-2 rounded border border-red-500/30 max-w-full break-words font-mono text-center shadow-lg">
              {errorMsg.length > 60 ? errorMsg.substring(0, 60) + '...' : errorMsg}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || vehicle.name}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setErrorMsg("Failed to load image element")}
      {...props}
    />
  );
};
