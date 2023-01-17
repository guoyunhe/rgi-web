import Image from './Image';
import Model from './Model';
import Title from './Title';

export default interface Game extends Model {
  /** Title ID that the game belongs to */
  titleId: number;

  /** Title that the game belongs to */
  title: Title;

  /** Main game ID (Disc 1) that the game (Disc 2,3,...) belongs to */
  mainId: number | null;

  /** Main game (Disc 1) that the game (Disc 2,3,...) belongs to */
  main: Game;

  /** Boxart image ID */
  boxartImageId: number;

  /** Boxart image */
  boxartImage?: Image;

  /** Title image ID */
  titleImageId: number | null;

  /** Title image */
  titleImage?: Image;

  /** Snap image ID */
  snapImageId: number | null;

  /** Snap image */
  snapImage?: Image;

  /** Name in English */
  name: string;
  /** Name in Arabic */
  nameAr: string;
  /** Name in German */
  nameDe: string;
  /** Name in Spanish */
  nameEs: string;
  /** Name in Persian */
  nameFa: string;
  /** Name in Finnish */
  nameFi: string;
  /** Name in French */
  nameFr: string;
  /** Name in Hindi */
  nameHi: string;
  /** Name in Italian */
  nameIt: string;
  /** Name in Japanese */
  nameJa: string;
  /** Name in Korean */
  nameKo: string;
  /** Name in Dutch */
  nameNl: string;
  /** Name in Polish */
  namePo: string;
  /** Name in Portuguese */
  namePt: string;
  /** Name in Russion */
  nameRu: string;
  /** Name in Swedish */
  nameSv: string;
  /** Name in Ukrainian */
  nameUk: string;
  /** Name in Vietnamese */
  nameVi: string;
  /** Name in Chinese */
  nameZh: string;

  /** Like GBA (GameBoy Advanced), PS2 (PlayStation 2), NS (Nintendo Switch) */
  platform: string;

  /** Like Japan, USA, Europe */
  regions: string[] | null;

  /** Like En, Fr, Pt */
  languages: string[] | null;

  /** Disc 1, Disc 2, etc. */
  disc: number;

  /** Serial of game disc or cartridge, not available for old platform and indie games */
  serial: string | null;

  /** Game version */
  version: string | null;
}
