import React, { useState, useEffect, useRef } from 'react';
import { Vehicle } from '../types';
import { getOrGenerateVehicleImage, memoryCache } from '../services/imageService';

const getFallbackImage = (type: string) => {
  // Use a reliable placeholder service for the fallback image
  return `https://placehold.co/600x400/111827/4B5563?text=${encodeURIComponent(type)}+Image+Unavailable`;
};

interface VehicleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  vehicle: Vehicle;
}

export const VehicleImage: React.FC<VehicleImageProps> = ({ vehicle, className, alt, ...props }) => {
  const [src, setSrc] = useState<string | null>(memoryCache.get(vehicle.id) || null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to only load images when they scroll into view
  useEffect(() => {
    // If we already have the image in cache, no need to observe
    if (src) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading slightly before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [src]);

  useEffect(() => {
    let isMounted = true;

    if (isVisible && !src && !errorMsg) {
      getOrGenerateVehicleImage(vehicle)
        .then((imageUrl) => {
          if (isMounted) {
            setSrc(imageUrl);
          }
        })
        .catch((err) => {
          console.error("Error loading image for", vehicle.id, err);
          if (isMounted) {
            setErrorMsg(err.message || String(err) || "Unknown error");
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [vehicle, src, errorMsg, isVisible]);

  if (errorMsg || !src) {
    // Show fallback if error or while loading
    return (
      <div ref={containerRef} className={`relative flex items-center justify-center bg-[#111827] overflow-hidden ${className || ''}`}>
        <img
          src={getFallbackImage(vehicle.type)}
          alt={alt || vehicle.name}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
          {...props}
        />
        {errorMsg && (
          <div className="relative z-10 text-[10px] text-red-400 bg-black/80 p-2 rounded border border-red-500/30 m-2 max-w-full break-words font-mono text-center">
            {errorMsg.length > 60 ? errorMsg.substring(0, 60) + '...' : errorMsg}
          </div>
        )}
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
