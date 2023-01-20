import Model from './Model';
import User from './User';

export default interface Activity extends Model {
  /** Categorize system activities, admin activities and user activities */
  type: 'system' | 'admin' | 'user';

  /** Action executor ID */
  userId: number | null;

  /** Action executor */
  user: User;

  /** Action code, like 'user.register', 'game.favorite', 'game.image.upload' */
  action: string;

  /** Action data, like { gameId: 24, imageId: 2354 } */
  data: any;
}
