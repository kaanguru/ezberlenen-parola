import { yaratiklar, sifatlar, fiiller } from "./db/kelimeler";
import { range, ilkHarfiBuyut, karisikKelimeSec } from "./helpers/helpers";
import slugify from "slugify";
export const varsayilanParolaSecenekleri = {
    kelimeSayisi: 3,
    buyut: true,
    araliklar: " ",
};
export function parolaUret(secenekler) {
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
function sirayaGoreKelimeListesi(i, istKelSay) {
    if (i === 0)
        return sifatlar;
    if (i === istKelSay - 1)
        return fiiller;
    else if (i % 2 === 0 && i != istKelSay - 2)
        return sifatlar; // Çift sayılar
    else
        return yaratiklar;
}
