import { useMemo } from 'react';

export default function usePlatforms() {
  return useMemo(
    () => [
      {
        code: '3ds',
        name: 'Nintendo 3DS',
      },
      {
        code: 'nes',
        name: 'Nintendo Entertainment System',
      },
      {
        code: 'psx',
        name: 'PlayStation',
      },
      {
        code: 'ps2',
        name: 'PlayStation 2',
      },
      {
        code: 'ps3',
        name: 'PlayStation 3',
      },
      {
        code: 'psp',
        name: 'PlayStation Portable',
      },
    ],
    []
  );
}
