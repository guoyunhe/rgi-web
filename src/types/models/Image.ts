import Model from './Model';

export default interface Image extends Model {
  /** ID of the full image, if this is the thumbnail */
  fullId: Image | null;

  /** The full image, if this is the thumbnail */
  full: Image | null;

  /** Thumbnails, if this is the full image */
  thumbnails: Image[];

  /** User id of who uploaded the image */
  userId: number | null;

  /** Usage category, like avatar, boxart, title, snap */
  category: 'avatar' | 'boxart' | 'snap' | 'title';

  /** File type */
  type: 'gif' | 'jpg' | 'png' | 'webp';

  /** File storage path, images/<md5> */
  path: string;

  /** File mime type */
  mime: string;

  /** File size in bytes */
  size: number;

  /** Image width in pixels */
  width: number;

  /** Image height in pixels */
  height: number;

  /** Image public url */
  url: string;
}
