import Model from './Model';
import Series from './Series';

export default interface Title extends Model {
  /** Series ID that the game belongs to */
  seriesId: number | null;

  /** Series that the game belongs to */
  series?: Series;

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

  /** Wikipedia in English */
  wikipedia: string;
  /** Wikipedia in Arabic */
  wikipediaAr: string;
  /** Wikipedia in German */
  wikipediaDe: string;
  /** Wikipedia in Spanish */
  wikipediaEs: string;
  /** Wikipedia in Persian */
  wikipediaFa: string;
  /** Wikipedia in Finnish */
  wikipediaFi: string;
  /** Wikipedia in French */
  wikipediaFr: string;
  /** Wikipedia in Hindi */
  wikipediaHi: string;
  /** Wikipedia in Italian */
  wikipediaIt: string;
  /** Wikipedia in Japanese */
  wikipediaJa: string;
  /** Wikipedia in Korean */
  wikipediaKo: string;
  /** Wikipedia in Dutch */
  wikipediaNl: string;
  /** Wikipedia in Polish */
  wikipediaPo: string;
  /** Wikipedia in Portuguese */
  wikipediaPt: string;
  /** Wikipedia in Russion */
  wikipediaRu: string;
  /** Wikipedia in Swedish */
  wikipediaSv: string;
  /** Wikipedia in Ukrainian */
  wikipediaUk: string;
  /** Wikipedia in Vietwikipediase */
  wikipediaVi: string;
  /** Wikipedia in Chinese */
  wikipediaZh: string;
}
