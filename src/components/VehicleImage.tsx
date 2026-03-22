import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (!src && !error) {
      getOrGenerateVehicleImage(vehicle)
        .then((imageUrl) => {
          if (isMounted) {
            setSrc(imageUrl);
          }
        })
        .catch((err) => {
          console.error("Error loading image for", vehicle.id, err);
          if (isMounted) {
            setError(true);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [vehicle, src, error]);

  if (error || !src) {
    // Show fallback if error or while loading
    return (
      <img
        src={getFallbackImage(vehicle.type)}
        alt={alt || vehicle.name}
        className={className}
        referrerPolicy="no-referrer"
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt || vehicle.name}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
      {...props}
    />
  );
};
