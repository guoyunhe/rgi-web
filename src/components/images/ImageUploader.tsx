import { Box, SxProps } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, ReactNode, useRef } from 'react';
import Image from '../../types/models/Image';

export interface ImageUploaderProps {
  maxWidth?: number;
  maxHeight?: number;
  onSucceed: (image: Image) => void;
  onFail?: (err: any) => void;
  children: ReactNode;
  sx?: SxProps;
}

export default function ImageUploader({
  onSucceed,
  onFail,
  children,
  maxWidth = 1280,
  maxHeight = 1280,
  sx,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (!imageFile) return;
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    formData.append('maxWidth', String(maxWidth));

    formData.append('maxHeight', String(maxHeight));
    axios
      .post<Image>('/images', formData)
      .then((res) => {
        onSucceed(res.data);
      })
      .catch((err) => {
        onFail && onFail(err);
      })
      .finally(() => {
        // Clear selected files
        e.target.value = '';
      });
  };
  return (
    <Box onClick={handleClick} sx={sx}>
      {children}
      <input
        ref={inputRef}
        onChange={handleChange}
        type="file"
        accept="image/png, image/jpeg, image/gif"
        hidden
      />
    </Box>
  );
}
