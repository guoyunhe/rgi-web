import { Box, SxProps } from '@mui/material';
import axios from 'axios';
import { ChangeEvent, ReactNode, useRef } from 'react';
import Image from '../../types/models/Image';
import { useCheckAuth } from '../auth/useCheckAuth';

export interface ImageUploaderProps {
  category: Image['category'];
  maxWidth?: number;
  maxHeight?: number;
  onSucceed: (image: Image) => void;
  onFail?: (err: any) => void;
  children: ReactNode;
  sx?: SxProps;
}

export default function ImageUploader({
  category,
  onSucceed,
  onFail,
  children,
  sx,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const checkAuth = useCheckAuth();
  const handleClick = () => {
    if (checkAuth()) {
      inputRef.current?.click();
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (!imageFile) return;
    const formData = new FormData();
    formData.append('imageFile', imageFile);
    formData.append('category', category);
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
