import { expectTypeOf, test } from "vitest";
import { parolaUret } from "../index";
const secenekler = { kelimeSayisi: 5, standart: true, araliklar: "-" };
test("dize oluşuyor mu?", () => {
  expectTypeOf(parolaUret(secenekler)).toBeString();
  console.log("ℹ  ~ Seçenekli:", parolaUret(secenekler));
  console.log("ℹ  ~ sade:", parolaUret());
});
