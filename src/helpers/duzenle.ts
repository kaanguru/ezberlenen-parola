import fs from "fs";
const memeliler = [
  "Alpaka",
  "Antilop",
  "Maymun",
  "Armadillo",
  "Porsuk",
  "Kunduz",
  "Vaşak",
  "Buffalo",
  "Boğa",
  "Deve",
  "Kapibara",
  "Karibu",
  "Kedi",
  "Çita",
  "Şempanze",
  "Sincap",
  "Puma",
  "İnek",
  "Çakal",
  "Geyik",
  "Dingo",
  "Yunus",
  "Eşek",
  "Fil",
  "Geyik",
  "Gelincik",
  "Tilki",
  "Zürafa",
  "Keçi",
  "Goril",
  "Köstebek",
  "Kobay",
  "Hamster",
  "Tavşan",
  "Kirpi",
  "At",
  "Sırtlan",
  "Çakal",
  "Jaguar",
  "Kanguru",
  "Koala",
  "Lemur",
  "Leopar",
  "Aslan",
  "Llama",
  "Vaşak",
  "Mamut",
  "Denizayısı",
  "Mirket",
  "Vizon",
  "Köstebek",
  "Maymun",
  "Geyik",
  "Fare",
  "Gergedan",
  "Ocelot",
  "Orangutan",
  "Orca",
  "Samur",
  "Öküz",
  "Panda",
  "Pangolin",
  "Domuz",
  "Ornitorenk",
  "KutupAyısı",
  "Kirpi",
  "Köpek",
  "Tavşan",
  "Rakun",
  "Sıçan",
  "Geyik",
  "Gergedan",
  "Mühür",
  "Koyun",
  "Kokarca",
  "Tembellik",
  "Leopar",
  "Sincap",
  "Ayı",
  "Tapir",
  "Kaplan",
  "Wallaby",
  "Mors",
  "Domuz",
  "Gelincik",
  "Balina",
  "Antilop",
  "Kurt",
  "Wolverine",
  "Wombat",
  "Yak",
  "Zebra",
];
const kuslar = ["Alakarga", "Şahin", "Piliç", "Tavuk", "Akbaba", "Vinç", "Karga", "Güvercin", "Ördek", "Kartal", "Şahin", "İspinoz", "Flamingo", "Kaz", "Orman tavuğu", "Şahin", "Tavuk", "Balıkçıl", "Kerkenez", "Kivi", "Lark", "Saksağan", "Devekuşu", "Baykuş", "Papağan", "Keklik", "Pelikan", "Penguen", "Sülün", "Güvercin", "Bıldırcın", "Kuzgun", "Yol Koşucusu", "Robin", "Horoz", "Martı", "Sığırcık", "Leylek", "Güneş kuşu", "Kuğu", "Tukan", "Akbaba", "Ağaçkakan"];

const reptiles = ["Timsah", "Anakonda", "Ejderha", "Yılan", "Kayman", "Bukalemun", "Kobra", "Timsah", "Gecko", "İguana", "Kertenkele", "Mamba", "Python", "Çıngıraklı Yılan", "Skink", "Yılan", "Kaplumbağa", "Kaplumbağa", " Engerek"];

const amphibians = ["Kurbağa", "Semender", "Kurbağa", "Kurbağa", "Semender", "İribaş", "Aksolotl"];

const baliklar = ["Hamsi", "Melek Balığı", "Fener Balığı", "Barracuda", "Sazan", "Yayın Balığı", "Palyaço Balığı", "Morina", "Yılan Balığı", "Pisi Balığı", "Uçan Balık", "Akvaryum Balığı", "Orfoz", "Lepistes", "Ringa balığı", "Koi Balığı", "Uskumru", "Marlin", "Pirana", "Kirpi Balığı", "Somon", "Levrek", "Köpekbalığı", "Balığı", "Kalamar", "Vatoz", "Mersin Balığı", "Güneş Balığı", "Kılıç Balığı", "Kaplan balığı", "Alabalık", "Ton Balığı"];

const dinosaurs = ["T-Rex", "Raptor", "Trike"];

const bocekler = ["Karınca", "Antlion", "Yaprak Biti", "Böcek", "Yaban Arısı", "Kelebek", "Tırtıl", "Ağustosböceği", "Hamamböceği", "Kriket", "Kız Sineği", "Yusufçuk", "Kulak Tıkacı", "Pire", "Sinek", "Meyve Sineği", "Çekirge", "Eşekarısı", "At sineği", "Uçan sinek", "Bağcıklı Böcek", "Uğur Böceği", "Çekirge", "Çekirge", "Mayıs Sineği", "Sivrisinek", "Güve", "Peygamber Devesi", "Akrep Sineği", "Gümüş Balığı", "Yaban arısı", "Böcek", "Sinek", "Bal Arısı", "Termit", "Yaban Arısı", "Sarıca"];
const orumcekgiller = ["Örümcek", "Akrep", "Tarantula"];
const kabuklular = ["Midye", "Yengeç", "Istakoz", "Kril", "Karides", "Karides", "Kerevit"];
const yumusakcalar = ["Salyangoz", "Sümüklü böcek", "Nautilus", "Kalamar", "Ahtapot", "İstiridye", "Midye", "İstiridye", "Tarak", "Mürekkep Balığı"];
const omurgasizlar = ["Solucan", "Denizanası", "Sünger", "Kırkayak"];
const mistikYaratiklar = ["Griffin", "Harpy", "Gorgon", "Hipogriff", "Anka Kuşu", "Thunderbird", "Cehennem Köpeği", "Kurt Adam", "Sfenks", "Deniz Kızı", "Kraken", "Koca Ayak", "Yeti", "Çakal", "Basilisk", "Ejderha", "Canavar", "Hidra", "Tek boynuzlu at", "Pegasus", "Centaur", "Golem", "Homunculus", "Tepegöz", "Titan", "Peri", "Cüce", "Cüce", "Gulyabani", "İth", "Trol", "Peri", "Yılan", "Dev", "Elf", "Siren", "Ruh emici", "Dev", "Goblin", "Biçici", "Azrail", "Peri", "Şeytan", "Melek"];

const constants = [
  { name: "memeliler", array: memeliler },
  { name: "kuslar", array: kuslar },
  { name: "reptiles", array: reptiles },
  { name: "amphibians", array: amphibians },
  { name: "baliklar", array: baliklar },
  { name: "dinosaurs", array: dinosaurs },
  { name: "bocekler", array: bocekler },
  { name: "orumcekgiller", array: orumcekgiller },
  { name: "kabuklular", array: kabuklular },
  { name: "yumusakcalar", array: yumusakcalar },
  { name: "omurgasizlar", array: omurgasizlar },
  { name: "mistikYaratiklar", array: mistikYaratiklar },
];
bosalt();
appendConstants();

function temizle(kelimeler: string[]) {
  return [...new Set(kelimeler)].map((y) => (y.split(" ").length == 1 ? y : undefined)).filter(Boolean);
}

function appendConstants() {
  constants.forEach(({ name, array }) => {
    const content = `\n
    export const ${name} = ${JSON.stringify(temizle(array), null, 2)};
    `;
    fs.appendFile("src/db/yaratiklar.ts", content, "utf8", (err) => {
      if (err) {
        console.error("An error occurred while writing the file:", err);
      } else {
        console.log(`File has been written successfully for ${name}.`);
      }
    });
  });
}

function bosalt() {
  fs.writeFile("src/db/yaratiklar.ts", "", "utf8", (err) => {
    if (err) {
      console.error("An error occurred while emptying the file:", err);
      return;
    }
  });
}
