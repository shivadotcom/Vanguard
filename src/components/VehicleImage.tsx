import React, { useState, useEffect, useRef } from 'react';
import { Vehicle } from '../types';
import { getVehicleImage, generateVehicleImageAI, uploadCustomVehicleImage, memoryCache, deleteImageCache } from '../services/imageService';
import { ImageIcon, Loader2, Link as LinkIcon, Upload, Trash2 } from 'lucide-react';

const getFallbackImage = (type: string) => {
  return `https://source.unsplash.com/600x400/?military,${encodeURIComponent(type)}`;
};

interface VehicleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  vehicle: Vehicle;
}

export const VehicleImage: React.FC<VehicleImageProps> = ({ vehicle, className, alt, ...props }) => {
  const [src, setSrc] = useState<string | null>(memoryCache.get(vehicle.id) || null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(!src);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [manualUrl, setManualUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 2. Visibility Check: Intersection Observer
  useEffect(() => {
    if (src) {
      setIsVisible(true);
      setIsIntersecting(true);
      setIsLoading(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '50px' } // Smaller margin to be more precise
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  // 1. Debounce Mechanism & 5. Skip Logic
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isIntersecting && !src && !isDeleted) {
      // Add a delay of 400ms before triggering image generation
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 400);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isIntersecting, src, isDeleted, vehicle.id]);

  useEffect(() => {
    let isMounted = true;

    if (isVisible && !src) {
      setIsLoading(true);
      
      // 7. Performance: Prioritize currently visible cards
      const priority = Date.now();
      
      getVehicleImage(vehicle, priority)
        .then((imageUrl) => {
          if (isMounted) {
            if (imageUrl) {
              setSrc(imageUrl);
            }
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.error("Error checking image for", vehicle.id, err);
          if (isMounted) {
            setIsLoading(false);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [vehicle, src, isVisible]);

  // Listen for image updates across all instances of this component
  useEffect(() => {
    const handleImageUpdate = (e: CustomEvent) => {
      if (e.detail.vehicleId === vehicle.id) {
        if (e.detail.action === 'delete') {
          setSrc(null);
        } else if (e.detail.action === 'update') {
          setSrc(e.detail.src);
        }
      }
    };

    window.addEventListener('vehicle-image-updated', handleImageUpdate as EventListener);
    return () => window.removeEventListener('vehicle-image-updated', handleImageUpdate as EventListener);
  }, [vehicle.id]);

  const handleGenerateAI = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isGenerating || isUploading) return;
    
    setIsGenerating(true);
    setErrorMsg(null);
    
    try {
      const imageUrl = await generateVehicleImageAI(vehicle);
      setSrc(imageUrl);
      window.dispatchEvent(new CustomEvent('vehicle-image-updated', { detail: { vehicleId: vehicle.id, action: 'update', src: imageUrl } }));
    } catch (err: any) {
      console.error("Error generating AI image:", err);
      setErrorMsg(err.message || String(err));
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveManualUrl = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!manualUrl.trim() || isUploading || isGenerating) return;

    setIsUploading(true);
    setErrorMsg(null);
    try {
      const cloudUrl = await uploadCustomVehicleImage(vehicle, manualUrl.trim());
      setSrc(cloudUrl);
      window.dispatchEvent(new CustomEvent('vehicle-image-updated', { detail: { vehicleId: vehicle.id, action: 'update', src: cloudUrl } }));
    } catch (err: any) {
      console.error("Failed to upload URL:", err);
      setErrorMsg(err.message || "Failed to upload URL to Cloudinary");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || isUploading || isGenerating) return;

    setIsUploading(true);
    setErrorMsg(null);

    try {
      const reader = new FileReader();
      const base64String = await new Promise<string>((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
      });

      const cloudUrl = await uploadCustomVehicleImage(vehicle, base64String);
      setSrc(cloudUrl);
      window.dispatchEvent(new CustomEvent('vehicle-image-updated', { detail: { vehicleId: vehicle.id, action: 'update', src: cloudUrl } }));
    } catch (err: any) {
      console.error("Failed to upload file:", err);
      setErrorMsg(err.message || "Failed to upload file to Cloudinary");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  if (isLoading) {
    return (
      <div ref={containerRef} className={`relative flex items-center justify-center bg-[#111827] overflow-hidden ${className || ''}`}>
        <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!src) {
    return (
      <div ref={containerRef} className={`relative flex flex-col items-center justify-center bg-[#111827] overflow-hidden group ${className || ''}`}>
        <img
          src={getFallbackImage(vehicle.type)}
          alt={alt || vehicle.name}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
          {...props}
        />
        
        <div className="relative z-10 flex flex-col items-center gap-2 p-4 w-full">
          <button
            onClick={handleGenerateAI}
            disabled={isGenerating || isUploading}
            className="flex items-center justify-center gap-2 w-full max-w-[220px] px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-md transition-colors disabled:opacity-50 shadow-lg"
          >
            {isGenerating ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Generating...</> : <><ImageIcon className="w-3.5 h-3.5" /> Generate AI Image</>}
          </button>

          <div className="flex items-center gap-2 w-full max-w-[220px] my-1">
            <div className="h-px bg-gray-700 flex-1"></div>
            <span className="text-[9px] text-gray-500 uppercase">or upload</span>
            <div className="h-px bg-gray-700 flex-1"></div>
          </div>

          <div className="flex w-full max-w-[220px] gap-1" onClick={e => e.stopPropagation()}>
            <input
              type="url"
              placeholder="Paste image URL..."
              value={manualUrl}
              onChange={(e) => setManualUrl(e.target.value)}
              disabled={isUploading || isGenerating}
              className="flex-1 bg-gray-900/80 border border-gray-700 rounded px-2 py-1.5 text-[11px] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
            />
            <button
              onClick={handleSaveManualUrl}
              disabled={!manualUrl.trim() || isUploading || isGenerating}
              className="bg-gray-700 hover:bg-gray-600 disabled:opacity-50 text-white px-2 py-1.5 rounded text-[11px] transition-colors flex items-center justify-center"
              title="Upload URL to Cloudinary"
            >
              {isUploading && manualUrl.trim() ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <LinkIcon className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            disabled={isUploading || isGenerating}
            className="flex items-center justify-center gap-2 w-full max-w-[220px] px-4 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white text-xs font-medium rounded-md transition-colors disabled:opacity-50 shadow-lg"
          >
            {isUploading && !manualUrl.trim() ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            Upload File
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
          
          {errorMsg && (
            <div className="text-[9px] text-red-400 bg-black/90 p-1.5 rounded border border-red-500/30 w-full break-words font-mono text-center shadow-lg mt-1 max-h-16 overflow-y-auto">
              {errorMsg}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className || ''}`}>
      <img
        src={src}
        alt={alt || vehicle.name}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
        onError={() => {
          setErrorMsg("Failed to load image element.");
          setSrc(null);
          memoryCache.delete(vehicle.id);
        }}
        {...props}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsDeleted(true);
          setSrc(null);
          await deleteImageCache(vehicle.id);
          window.dispatchEvent(new CustomEvent('vehicle-image-updated', { detail: { vehicleId: vehicle.id, action: 'delete' } }));
        }}
        className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
        title="Remove Image"
      >
        <Trash2 className="w-4 h-4 text-red-400" />
      </button>
    </div>
  );
};
