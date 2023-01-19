import Model from './Model';

export default interface Image extends Model {
  /** User id of who uploaded the image */
  userId: number | null;

  /** Usage type, like avatar, boxart, title, snap */
  type: 'avatar' | 'boxart' | 'snap' | 'title';

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
