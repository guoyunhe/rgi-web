import Image from './Image';
import Model from './Model';

export default interface User extends Model {
  username: string;
  email: string;
  role: string;
  avatarId: number | null;
  avatar: Image | null;
}
