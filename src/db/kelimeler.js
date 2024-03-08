const memeliler = [
    "Alpaka",
    "Karınca yiyen",
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
    "Köpek",
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
    "Su Aygırı",
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
    "Firavun faresi",
    "Maymun",
    "Geyik",
    "Fare",
    "Deniz Gergedanı",
    "Ocelot",
    "Opossum",
    "Orangutan",
    "Orca",
    "Su Samuru",
    "Öküz",
    "Panda",
    "Pangolin",
    "Domuz",
    "Ornitorenk",
    "Kutup Ayısı",
    "Kirpi",
    "Domuz balığı",
    "Çayır Köpeği",
    "Tavşan",
    "Rakun",
    "Sıçan",
    "Ren geyiği",
    "Gergedan",
    "Deniz Aslanı",
    "Mühür",
    "Koyun",
    "Kokarca",
    "Tembellik",
    "Kar Leoparı",
    "Sincap",
    "Güneş Ayısı",
    "Tapir",
    "Tazmanya Şeytanı",
    "Kaplan",
    "Wallaby",
    "Mors",
    "Yaban domuzu",
    "Gelincik",
    "Balina",
    "Antilop",
    "Kurt",
    "Wolverine",
    "Wombat",
    "Yak",
    "Zebra",
];
const kuslar = ["Mavi Alakarga", "Mavi Kuş", "Şahin", "Piliç", "Tavuk", "Akbaba", "Vinç", "Karga", "Güvercin", "Ördek", "Kartal", "Daü", "Şahin", "İspinoz", "Flamingo", "Kaz", "Orman tavuğu", "Şahin", "Tavuk", "Balıkçıl", "Sinek kuşu", "Kerkenez", "Kivi", "Lark", "Amerika Papağanı", "Saksağan", "Alaycı Kuş", "Devekuşu", "Baykuş", "Muhabbet Kuşu", "Papağan", "Keklik", "Pelikan", "Penguen", "Sülün", "Güvercin", "Bıldırcın", "Kuzgun", "Yol Koşucusu", "Robin", "Horoz", "Martı", "Sığırcık", "Leylek", "Güneş kuşu", "Kuğu", "Tukan", "Türkiye", "Akbaba", "Ağaçkakan"];
const reptiles = ["Timsah", "Anakonda", "Sakallı Ejderha", "Boa Yılanı", "Kayman", "Bukalemun", "Kobra", "Bakır Kafa", "Timsah", "Gecko", "İguana", "Komodo Ejderi", "Kertenkele", "Mamba", "Python", "Çıngıraklı Yılan", "Skink", "Yılan", "Kaplumbağa", "Kaplumbağa", " Engerek"];
const amphibians = ["Kurbağa", "Semender", "Kurbağa", "Kurbağa", "Semender", "Çamur Yavrusu", "İribaş", "Aksolotl"];
const baliklar = ["Hamsi", "Melek Balığı", "Fener Balığı", "Barracuda", "Bluegill", "Sazan", "Yayın Balığı", "Palyaço Balığı", "Morina", "Yılan Balığı", "Pisi Balığı", "Uçan Balık", "Akvaryum Balığı", "Orfoz", "Lepistes", "Ringa balığı", "Koi Balığı", "Uskumru", "Marlin", "Pirana", "Kirpi Balığı", "Somon", "Levrek", "Köpekbalığı", "Balığı", "Kalamar", "Vatoz", "Mersin Balığı", "Güneş Balığı", "Kılıç Balığı", "Kaplan balığı", "Tilapia", "Alabalık", "Ton Balığı"];
const dinosaurs = ["T-Rex", "Raptor", "Trike"];
const bocekler = ["Karınca", "Antlion", "Yaprak Biti", "Böcek", "Yaban Arısı", "Kelebek", "Tırtıl", "Ağustosböceği", "Hamamböceği", "Kriket", "Kız Sineği", "Yusufçuk", "Kulak Tıkacı", "Pire", "Sinek", "Meyve Sineği", "Çekirge", "Bal Arısı", "Eşekarısı", "At sineği", "Uçan sinek", "Bağcıklı Böcek", "Uğur Böceği", "Çekirge", "Çekirge", "Mayıs Sineği", "Sivrisinek", "Güve", "Peygamber Devesi", "Akrep Sineği", "Gümüş Balığı", "Yaban arısı", "Sopa böceği", "Kokuşmuş Böcek", "Taş Sineği", "Ter Arısı", "Termit", "Yaban Arısı", "Sarıca"];
const arachnids = ["Örümcek", "Akrep", "Baba Uzun Bacaklar", "Tarantula"];
const crustaceans = ["Midye", "Yengeç", "Istakoz", "Kril", "Karides", "Karides", "Kerevit"];
const mollusks = ["Salyangoz", "Sümüklü böcek", "Nautilus", "Kalamar", "Ahtapot", "İstiridye", "Midye", "İstiridye", "Tarak", "Mürekkep Balığı"];
const invertebrates = ["Solucan", "Denizanası", "Sünger", "Kırkayak"];
const mistikYaratiklar = ["Griffin", "Harpy", "Gorgon", "Hipogriff", "Anka Kuşu", "Thunderbird", "Cehennem Köpeği", "Kurt Adam", "Sfenks", "Deniz Kızı", "Kraken", "Koca Ayak", "Yeti", "Çakal", "Basilisk", "Ejderha", "Canavar", "Hidra", "Tek boynuzlu at", "Pegasus", "Centaur", "Golem", "Homunculus", "Tepegöz", "Titan", "Peri", "Cüce", "Cüce", "Gulyabani", "İth", "Trol", "Peri", "Yılan", "Dev", "Elf", "Siren", "Ruh emici", "Dev", "Goblin", "Biçici", "Ata", "Azrail", "Peri", "Şeytan", "Melek"];
export const yaratiklar = [...memeliler, ...kuslar, ...reptiles, ...amphibians, ...baliklar, ...dinosaurs, ...bocekler, ...arachnids, ...crustaceans, ...mollusks, ...invertebrates, ...mistikYaratiklar];
export const sifatlar = [
    "Terk edilmiş",
    "İğrenç",
    "Uyumlu",
    "Bağımlı",
    "Sevimli",
    "Maceracı",
    "Korkak",
    "Agresif",
    "Hoş",
    "Alkolik",
    "Uyanık",
    "Uzak",
    "Hırslı",
    "Eğlenerek",
    "Eski",
    "Kızgın",
    "Rahatsız",
    "Sinir bozucu",
    "Endişeli",
    "Kibirli",
    "Utangaç",
    "Çekici",
    "Hayırlı",
    "Ortalama",
    "Harika",
    "Korkunç",
    "Kötü",
    "Çorak",
    "Temelsiz",
    "Utangaç",
    "Temel",
    "Güzel",
    "Savaşçı",
    "Faydalı",
    "En iyi",
    "Daha iyi",
    "Şaşkın",
    "Büyük",
    "Acı",
    "Tuhaf",
    "Siyah",
    "Kanlı",
    "Mavi",
    "Kızarma",
    "Zeki",
    "Cesur",
    "Parlak",
    "Parlak",
    "Kırık",
    "Meşgul",
    "Sakin",
    "Yetenekli",
    "Dikkatli",
    "Dikkatsiz",
    "Bakımlı",
    "Bakımsız",
    "Temkinli",
    "Büyüleyici",
    "Ucuz",
    "Neşeli",
    "Tombul",
    "Temiz",
    "Zeki",
    "Sakar",
    "Soğuk",
    "Renkli",
    "Hırçın",
    "Rahat",
    "Endişeli",
    "Mahkum",
    "Şaşkın",
    "Havalı",
    "Kooperatif",
    "Cesur",
    "Çılgın",
    "Ürpertici",
    "Zalim",
    "Meraklı",
    "Şirin",
    "Aptal",
    "Zarif",
    "Hasarlı",
    "Çok İyi",
    "Lanet olsun",
    "Nemli",
    "Tehlikeli",
    "Islak",
    "Karanlık",
    "Korkusuz",
    "Ölü",
    "Mağlup",
    "Kusurlu",
    "Meydan okuyan",
    "Narin",
    "Lezzetli",
    "Keyifli",
    "Depresif",
    "Kararlı",
    "Zor",
    "Kirli",
    "Karmakarışık",
    "Tiksinti veren",
    "İğrenç",
    "Rahatsız",
    "Başım dönüyor",
    "Şüpheli",
    "Sıkıcı",
    "Sıkıcı",
    "Tozlu",
    "İstekli",
    "Eğitimli",
    "Verimli",
    "Mutlu",
    "Yaşlı",
    "Zarif",
    "Utandım",
    "Büyüleyici",
    "Cesaret Verici",
    "Enerjik",
    "Coşkulu",
    "Kıskanç",
    "Kötülük",
    "Mükemmel",
    "Heyecanlı",
    "Heyecan verici",
    "Pahalı",
    "Coşkulu",
    "Muhteşem",
    "Adil",
    "Sadık",
    "Ünlü",
    "Süslü",
    "Fantastik",
    "Hızlı",
    "Korkulu",
    "Korkusuz",
    "Vahşi",
    "Şiddetli",
    "Pis",
    "İyi",
    "Kabarık",
    "Aptal",
    "Unutkan",
    "Kırılgan",
    "Zayıf",
    "Çılgınca",
    "Arkadaş Canlısı",
    "Korkmuş",
    "Komik",
    "Bulanık",
    "Nazik",
    "Yetenekli",
    "Göz alıcı",
    "Pırıl Pırıl",
    "Şanlı",
    "İyi",
    "Muhteşem",
    "Zarif",
    "Minnettar",
    "Harika",
    "Açgözlü",
    "Yeşil",
    "Kederli",
    "Grotesk",
    "Huysuz",
    "Yakışıklı",
    "Mutlu",
    "Sert",
    "Sağlıklı",
    "Ağır",
    "Yararlı",
    "Çaresiz",
    "Kahramanca",
    "Komik",
    "Evsiz",
    "Sade",
    "Korkunç",
    "Sıcak",
    "Büyük",
    "Komik",
    "Aç",
    "Acı",
    "Cahil",
    "Yasadışı",
    "Hayali",
    "Kaba",
    "Önemli",
    "İmkansız",
    "Ucuz",
    "Masum",
    "Meraklı",
    "Akıllı",
    "İlginç",
    "Kaşıntılı",
    "Kıskanç",
    "Gergin",
    "Neşeli",
    "Neşeli",
    "Sulu",
    "Çocuk",
    "Nazik",
    "Büyük",
    "Tembel",
    "Işık",
    "Küçük",
    "Canlı",
    "Yalnız",
    "Yalnız",
    "Uzun",
    "Yüksek sesle",
    "Güzel",
    "Şanslı",
    "Maço",
    "Büyülü",
    "Muhteşem",
    "Büyük",
    "Olgun",
    "Kötü",
    "Dağınık",
    "Akıllara durgunluk veren",
    "Modern",
    "Hareketsiz",
    "Çamurlu",
    "Gizemli",
    "İğrenç",
    "Yaramaz",
    "Gergin",
    "Güzel",
    "Gürültülü",
    "Çatlak",
    "İtaatkar",
    "Obez",
    "İğrenç",
    "Garip",
    "Eski moda",
    "Eski",
    "Çirkin",
    "Olağanüstü",
    "Kendine Aşırı Güvenen",
    "Panik içinde",
    "Barışçıl",
    "Mükemmel",
    "Pembe",
    "Sade",
    "Hoş",
    "Hazır",
    "Kibar",
    "Zavallı",
    "Güçlü",
    "Değerli",
    "Güzel",
    "Dikenli",
    "Gururlu",
    "Mor",
    "Kokuşmuş",
    "Şaşkın",
    "İlginç",
    "Hızlı",
    "Sessiz",
    "Hazır",
    "Gerçek",
    "Kırmızı",
    "Rahatlamış",
    "Olağanüstü",
    "İtici",
    "Sorumlu",
    "Zengin",
    "Romantik",
    "Kraliyet",
    "Kaba",
    "Korkutucu",
    "Parıldayan",
    "Gizli",
    "Bencil",
    "Ciddi",
    "Keskin",
    "Parlak",
    "Şok edici",
    "Kısa",
    "Utangaç",
    "Hasta",
    "Aptal",
    "Samimi",
    "Sıska",
    "Uykulu",
    "İnce",
    "Yavaş",
    "Küçük",
    "Gülümsemek",
    "Yumuşak",
    "Işıltılı",
    "Baharatlı",
    "Manevi",
    "Muhteşem",
    "Lekesiz",
    "Fırtınalı",
    "Garip",
    "Güçlü",
    "Aptal",
    "Başarılı",
    "Süper",
    "Yüce",
    "Tatlı",
    "Düşünceli",
    "Yetenekli",
    "Uzun boylu",
    "Uysal",
    "Keskin",
    "Zevkli",
    "Lezzetli",
    "Ilıman",
    "İnatçı",
    "Gergin",
    "Korkunç",
    "Müthiş",
    "Müteşekkir",
    "Kalın",
    "İnce",
    "Kapsamlı",
    "Düşünceli",
    "Düşüncesiz",
    "Küçük",
    "Yorgun",
    "Zor",
    "Sorunlu",
    "En çirkin",
    "Çirkin",
    "Kırılmaz",
    "İlgisiz",
    "Benzersiz",
    "Çirkin",
    "Düzensiz",
    "Olağandışı",
    "Üzgün",
    "Gergin",
    "Muzaffer",
    "Şiddetli",
    "Canlı",
    "Kaba",
    "Sıcak",
    "Zayıf",
    "Zengin",
    "Yorgun",
    "Kötü",
    "Geniş gözlü",
    "Vahşi",
    "Bilge",
    "Esprili",
    "Harika",
    "Endişeli",
    "Endişe verici",
    "Genç",
    "Genç",
    "Çılgın",
    "Gayretli",
];
export const fiiller = ["Gidiyor", "Gitti", "Gidecek", "Geliyor", "Geldi", "Gelecek", "Yapıyor", "Yaptı", "Yapacak", "Okuyor", "Okudu", "Okuyacak", "Anlatıyor", "Anlattı", "Anlatacak", "Bekliyor", "Bekledi", "Bekleyecek", "İzliyor", "İzledi", "İzleyecek", "Oturdu", "Oturacak", "Dans Etti", "Dans Edecek", "Durdu", "Duracak", "Dinliyor", "Dinlemiyor", "Geziyor", "Gezmiş", "Gezdi", "Gezecek", "Gezer", "Tırmanıyor", "Tırmandı", "Tırmanacak", "Çalışmalı", "Çalışmalıydı", "Çalışacak", "Çalışıyor", "Ayıkladı", "Ayıklıyor", "Ayıkladılar", "Gönderiyor", "Gönderdi", "Gönderir"];