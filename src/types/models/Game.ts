import Image from './Image';
import Model from './Model';
import Platform from './Platform';
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

  /** Original name from Redump/No-Intro */
  name: string;

  /** Refined name for displaying in website */
  displayName: string;

  /** Like GBA (GameBoy Advanced), PS2 (PlayStation 2), NS (Nintendo Switch) */
  platformId: number;

  /** Like GBA (GameBoy Advanced), PS2 (PlayStation 2), NS (Nintendo Switch) */
  platform: Platform;

  /** Like Japan, USA, Europe */
  region: string | null;

  /** Like En, Fr, Pt */
  language: string | null;

  /** Disc 1, Disc 2, etc. */
  disc: number;

  /** Serial of game disc or cartridge, not available for old platform and indie games */
  serial: string | null;

  /** Game version */
  version: string | null;

  /** Boxart, snap screen and title screen images */
  images?: Image[];
}
