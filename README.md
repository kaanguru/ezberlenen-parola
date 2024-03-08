
# Ezberlenen Parola

🔑 Generate Turkish Password Sentences

[![install size](https://packagephobia.com/badge?p=ezberlenen-parola)](https://packagephobia.com/result?p=ezberlenen-parola)

**Güvenli ve kullanımı kolay unutulmayan şifreler oluşturun**

Bu araç, Türkçe'de kolay hatırlanabilen cümlelerden yola çıkarak çok güvenli şifreler oluşturmanıza olanak tanır.

**Örneğin:**
**Düzensiz mavi alakarga i̇zleyecek**

 veya uluslar-arası uyumlu

**Sadik-gunes-baligi-ve-kapsamli-guvercin-gitti**

gibi cümleler, hem hatırlaması kolay hem de kırılması zor şifreler oluşturmanızı sağlar.

Bu yöntem, şifrelerinizi hem güvenli tutmanıza hem de kolayca hatırlamanıza yardımcı olur.

## Lisans

[LGPL-3.0](http://www.gnu.org/licenses/lgpl.html)

## Özellikler

- Kelime sayısı belirleme
- Türkçe karakter kaldırma
- Aralık belirleme
- Tüm tarayıcılar ve Node.js için kolay uygulama
- **TypeScript Desteği**
- TypeScript Tip Tanımları için ES Modül Desteği:
 .d.mts uzantısı, TypeScript'in ES modül sistemini kullanan JavaScript dosyaları için tip tanımlarını içerir. Bu, TypeScript projelerinde modül bazlı geliştirmeyi kolaylaştırır ve tip güvenliğini artırır.

**Modüler Tip Tanımları**: anlaşılır hiç bir tip bilgisi girmeden tüm tip bilgileri gelir.

## Kullanım/Örnekler

```javascript
import { parolaUret } from "ezberlenen-parola";

const guvenliParola = parolaUret() ;

const secenekler = { kelimeSayisi: 5, standart: true, araliklar: "-" };
const ozelParola = parolaUret(secenekler);


```

### Örnek Parolalar

- Zarif tavuk çalışmalıydı
( sadece kibar bir tavuğun çalışması gerektiğini hayal edin)
- Meraklı solucan gidiyor
 ( merak içinde gezinen bir solucan hayal edin)

### Özelleştirilmiş Parolalar

`const secenekler = { kelimeSayisi: 5, standart: true, araliklar: "-" };`

- Guzel-horoz-ve-akilli-pangolin-calisacak

## Belgeler

[Üretilen Şifrelerin Kalitesini kontrol edebileceğiniz Test Platformu](<https://www.bennish.net/password-strength-checker/>)

## Neden daha güvenli?

![Hikayesi](/password_strength.webp)
