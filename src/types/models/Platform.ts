import Model from './Model';

export default interface Platform extends Model {
  /** Code in lower case */
  code: string;

  /** Name in English */
  name: string;

  /** Other known names */
  alias: string | null;

  /** When the console is first released */
  releaseDate: string | null;
}
