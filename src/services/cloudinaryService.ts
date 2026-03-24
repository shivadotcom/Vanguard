export const getCloudinaryUrl = (vehicleId: string) => {
  const cloudName = (import.meta as any).env?.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return null;
  return `https://res.cloudinary.com/${cloudName}/image/upload/vanguard/${vehicleId}.webp`;
};

export const checkCloudImageExists = async (vehicleId: string): Promise<string | null> => {
  const url = getCloudinaryUrl(vehicleId);
  if (!url) return null;
  
  try {
    // Perform a HEAD request to see if the image exists in Cloudinary
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok) {
      return url;
    }
    return null;
  } catch (e) {
    console.error("Error checking Cloudinary:", e);
    return null;
  }
};

export const uploadToCloudinary = async (vehicleId: string, base64Image: string): Promise<string> => {
  const cloudName = (import.meta as any).env?.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = (import.meta as any).env?.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary credentials missing. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.");
  }

  const formData = new FormData();
  formData.append('file', base64Image);
  formData.append('upload_preset', uploadPreset);
  formData.append('public_id', vehicleId);
  formData.append('folder', 'vanguard');

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "Failed to upload to Cloudinary");
  }

  const data = await response.json();
  return data.secure_url;
};
