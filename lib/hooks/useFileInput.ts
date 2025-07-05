import { useRef, useState } from "react";

export const useFileInput = (maxSize: number) => {
  const [file, setfile] = useState<File | null>(null);
  const [previewUrl, setpreviewUrl] = useState("");
  const [duration, setduration] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > maxSize) return;
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setfile(selectedFile);
      const objecturl = URL.createObjectURL(selectedFile);

      setpreviewUrl(objecturl);

      if (selectedFile.type.startsWith("video")) {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = () => {
          if (isFinite(video.duration) && video.duration > 0) {
            setduration(Math.round(video.duration));
          } else {
            setduration(0);
          }
          URL.revokeObjectURL(video.src);
          video.src = objecturl;
        };
      }
    }
  };

  const resetFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setfile(null);
    setpreviewUrl("");
    setduration(0);

    if (inputRef.current) inputRef.current.value = "";
  };

  return {
    file,
    previewUrl,
    duration,
    inputRef,
    handleFileChange,
    resetFile,
  };
};
