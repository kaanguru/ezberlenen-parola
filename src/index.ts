import { yaratiklar, sifatlar, fiiller } from "./db/kelimeler";
import { range, ilkHarfiBuyut, karisikKelimeSec } from "./helpers/helpers";
import slugify from "slugify";
/**
 * Options for generating a password.
 * @typedef {Object} Parola_Secenekler
 * @property {number} [kelimeSayisi=3] - The number of words to include in the password. Default is 3.
 * @property {boolean} [standart=true] - Whether to slugify the generated password. Default is true.
 * @property {string} [araliklar=" "] - The separator between words in the generated password. Default is a space.
 */
export interface Parola_Secenekler {
  kelimeSayisi?: number;
  standart?: boolean;
  araliklar?: string;
}
/**
 * Default options for generating a password.
 * @type {Parola_Secenekler}
 * @property {number} kelimeSayisi - The default number of words to include in the password. Default is 3.
 * @property {boolean} buyut - Whether to slugify the generated password. Default is true.
 * @property {string} araliklar - The default separator between words in the generated password. Default is a space.
 */
export const varsayilanParolaSecenekleri = {
  kelimeSayisi: 3,
  buyut: true,
  araliklar: " ",
};

/**
 * Generates a password based on the provided options.
 * @param {Parola_Secenekler} [secenekler] - Options for generating the password.
 * @returns {string} The generated password as a string.
 */
export function parolaUret(secenekler?: Parola_Secenekler): string {
  const opts = { ...varsayilanParolaSecenekleri, ...secenekler };
  const kacKelimelik = Math.max(2, opts.kelimeSayisi);

  const kelimeler = range(0, kacKelimelik).map((i) => karisikKelimeSec(sirayaGoreKelimeListesi(i, kacKelimelik)));
  if (kacKelimelik > 4) {
    kelimeler.splice(2, 0, "ve");
  }
  let birlestirilmisParola = kelimeler.join(opts.araliklar).toLowerCase();

  birlestirilmisParola = ilkHarfiBuyut(birlestirilmisParola);
  if (opts.standart) {
    birlestirilmisParola = slugify(birlestirilmisParola);
  }
  return birlestirilmisParola;
}
function sirayaGoreKelimeListesi(i: number, istKelSay: number) {
  if (i === 0) return sifatlar;
  if (i === istKelSay - 1) return fiiller;
  else if (i % 2 === 0 && i != istKelSay - 2) return sifatlar; // Çift sayılar
  else return yaratiklar;
}
