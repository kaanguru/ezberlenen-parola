import { expect, describe, it, expectTypeOf, test } from "vitest";
import { parolaUret, Ezberlenen_Parola_Secenekleri } from "../index";
const secenekler = { kelimeSayisi: 5, standart: true, araliklar: "-" };
test("dize oluşuyor mu?", () => {
  expectTypeOf(parolaUret(secenekler)).toBeString();
  console.log("ℹ  ~ Seçenekli:", parolaUret(secenekler));
  console.log("ℹ  ~ sade:", parolaUret());
});
describe("parolaUret fonksiyonu testleri", () => {
  it("varsayılan seçeneklerle parola üretir", () => {
    const parola = parolaUret();
    expect(parola).toBeTypeOf("string");
    expect(parola.length).toBeGreaterThan(0);
  });

  it("özel seçeneklerle parola üretir", () => {
    const secenekler: Ezberlenen_Parola_Secenekleri = {
      kelimeSayisi: 4,
      standart: false,
      araliklar: "_",
    };
    const parola = parolaUret(secenekler);
    expect(parola).toBeTypeOf("string");
    expect(parola.split("_").length).toBe(4);
  });

  it("kelime sayısı 2'den küçükse minimum 2 kelime üretir", () => {
    const secenekler: Ezberlenen_Parola_Secenekleri = {
      kelimeSayisi: 1,
    };
    const parola = parolaUret(secenekler);
    expect(parola).toBeTypeOf("string");
    expect(parola.split(" ").length).toBe(2);
  });
});
