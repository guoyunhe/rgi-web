import Model from './Model';
import Series from './Series';

export default interface Title extends Model {
  /** Series ID that the game belongs to */
  seriesId: number | null;

  /** Series that the game belongs to */
  series?: Series;

  /** Name in English */
  name: string;
}
