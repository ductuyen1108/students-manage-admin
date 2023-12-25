import { useState } from 'react';
import { presignFile, presignUrl } from '../lib/files.lib';

export function usePresignImg() {
  const [isUploading, setIsUploading] = useState(false);
  async function handleUpload(file?: File) {
    setIsUploading(true);
    let thumbnailRes;
    if (file) {
      const thumbRes = await presignUrl(file);
      thumbnailRes = thumbRes;
    }
    setIsUploading(false);
    return thumbnailRes;
  }
  return { handleUpload, isUploading };
}

export function usePresignFile() {
  const [isUploading, setIsUploading] = useState(false);
  async function handleUpload(file?: File) {
    setIsUploading(true);
    let thumbnailRes;
    if (file) {
      const thumbRes = await presignFile(file);
      thumbnailRes = thumbRes;
    }
    setIsUploading(false);
    return thumbnailRes;
  }
  return { handleUpload, isUploading };
}
