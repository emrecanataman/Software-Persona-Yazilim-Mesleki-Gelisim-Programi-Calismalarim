# Node.js İle Backend Programlama - Temeller ve Modüller

## 1. Node.js Nedir?

JavaScript'i tarayıcı dışına taşıyan bir platformdur (*Run JavaScript Everywhere*).

* **Node.js =** Chrome'un V8 JavaScript motorunu sunucuda çalıştıran bir platform.
* **Bir dil değil:** Node.js bir programlama dili değildir, temel olarak JavaScript dilini kullanır.
* **Runtime (Çalışma Ortamı) ortamı:** JavaScript kodunu tarayıcı dışında çalıştırmaya olanak tanır.
* **Bir framework değil:** Express gibi çatıların (framework) üzerinde çalıştığı temel platformdur.
* **Sunucu tarafı:** Web sunucuları, API'lar ve geliştirme araçları inşa etmek için kullanılır.

### JavaScript'in Tarihsel Yolculuğu

* **1995 - JavaScript Doğdu:** Netscape tarayıcısına interaktiflik katmak için oluşturuldu.
* **2008 - V8 Motoru:** Google Chrome için ultra hızlı JavaScript motoru geliştirildi.
* **2009 - Node.js:** Ryan Dahl, V8 motorunu alarak sunucuya taşıdı. JavaScript artık her yerde çalışabilir hale geldi!
* **2010 - npm:** Node Package Manager ile milyonlarca hazır paket ekosisteme kazandırıldı.
* **2013+ - Patlama Dönemi:** Netflix, LinkedIn ve Uber gibi devler sistemlerini Node.js'e geçirdi.

### Node.js Nasıl Çalışır?

1. İlk olarak geliştirici tarafından JavaScript dilinde kodlar yazılır.
2. Node.js API'leri kullanılarak `http`, `fs`, `path`, `os` gibi yerleşik (built-in) modüller sisteme dahil edilir.
3. Google'ın C++ ile yazılmış yüksek performanslı JS derleyicisi olan **V8 Engine** devreye girer.
4. Windows, macOS ve Linux gibi tüm işletim sistemlerinde sorunsuz bir şekilde çalışır.

> **Node.js'in Gücü: Event Loop**
> Node.js tek thread (*tek iş parçacığı*) üzerinde çalışır ancak **Non-Blocking I/O** (Engellemeyen Giriş/Çıkış) mimarisi sayesinde binlerce isteği aynı anda tıkanmadan işleyebilir!

#### Geleneksel Sunucu vs. Node.js Karşılaştırması

* **Geleneksel Sunucu:** Her istek için ayrı bir thread (iş parçacığı) açılır. İstek 1 bitmeden İstek 2 beklemek zorundadır. Bellek şişer ve sistem yavaşlar. 
  * *Analoji:* Bir garsonun, masanın siparişi tamamen hazırlanıp masaya ulaştırılana kadar mutfaktan başka hiçbir masanın siparişini almaması gibidir.
* **Node.js (Event Loop):** Tek bir thread üzerinde istekler kuyruğa takılmadan sırayla başlatılır ve asenkron olarak çözülür. Hepsi tamamlandığında sonuçlar ilgili yerlere iletilir.
  * *Analoji:* Bir garsonun tüm masalardan sırayla siparişleri alıp mutfağa iletmesi, hazırlananları ise hazır oldukça servis etmesi gibidir.

### Neden Node.js Kullanmalıyız?

* **Hız:** V8 motoru sayesinde son derece hızlıdır. Non-blocking I/O ile eş zamanlı yüzlerce isteği kaldırabilir.
* **Tek Dil:** Hem frontend (ön yüz) hem de backend (arka yüz) için aynı dilin (JavaScript) kullanılması ekipler arası geçişi kolaylaştırır.
* **npm Ekosistemi:** 2 milyondan fazla açık kaynaklı hazır paket barındırır; her ihtiyaç için önceden yazılmış bir çözüm bulunur.
* **Gerçek Zamanlı (Real-time):** WebSocket kütüphaneleriyle chat (sohbet) uygulamaları için idealdir (Discord, Slack gibi).
* **Ölçeklenebilir:** Mikroservis mimarileri için mükemmel uyum sağlar ve bulut platformlarında yaygın olarak desteklenir.
* **Endüstri Standardı:** Netflix, LinkedIn, Uber ve PayPal gibi dünya devleri tarafından aktif olarak kullanılmaktadır.

### Node.js Nerelerde Kullanılır?

* **Web API & REST Sunucuları:** Express.js yardımıyla güçlü backend servisleri oluşturmak.
* **Otomasyon & Script Araçları:** Dosya işleme, veri kazıma (web scraping) ve test otomasyonları yazmak.
* **Gerçek Zamanlı Uygulamalar:** Sohbet odaları, anlık bildirim sistemleri ve canlı oyun altyapıları kurmak.
* **Mikroservis Mimarisi:** Birbiriyle haberleşen küçük ve bağımsız servisler orkestrasyonu sağlamak.
* **CLI Araçları:** Terminal komut satırı araçları geliştirmek (`npm`, `webpack`, `vite`).
* **Oyun Sunucuları:** Çok oyunculu (multiplayer) oyunların backend mantığını yönetmek.

---

## 2. Çalışma Ortamı Kurulumu

* **YOL 1 - nodejs.org (Önerilen):** Resmi web sitesinden LTS (Long Term Support) sürümünü indirip kurabilirsiniz. En kolay ve kararlı yöntemdir.
* **YOL 2 - nvm (Profesyonel):** Node Version Manager kullanarak bilgisayarınızda birden fazla Node.js sürümünü aynı anda yönetebilirsiniz:
  ```bash
  curl -o- [https://raw.nvm.sh](https://raw.nvm.sh) | bash
  nvm install --lts
  nvm use --lts
  ```
* **YOL 3 - Homebrew (macOS):** macOS paket yöneticisi ile hızlıca kurmak için:
  ```bash
  brew install node
  ```

### Kurulumu Doğrulamak

Terminal veya komut istemcisini (`cmd`) açarak şu komutları çalıştırın:

```bash
node --version
npm --version
```
*Eğer sürüm numaraları ekrana geliyorsa kurulum başarıyla tamamlanmıştır.*

```bash
node -e "console.log('Çalışıyor')"
```
*Bu komut doğrudan terminal üzerinden `Çalışıyor` çıktısını vermelidir.*

### Proje Klasör Yapısı

```text
my-backend-project/
├── src/
│   ├── index.js        ← Ana giriş noktası
│   ├── routes/         ← API route'ları (uç noktalar)
│   └── helpers/        ← Yardımcı fonksiyonlar
├── node_modules/       ← npm paketleri (Asla GitHub'a yüklenmez!)
├── package.json        ← Proje bilgisi ve bağımlılıklar
├── package-lock.json   ← Tam sürüm kilidi (lock file)
├── .gitignore          ← Git dışı tutulacak dosya/klasörler
└── README.md           ← Proje dokümantasyonu
```

* **`index.js`:** Uygulamanın kalbidir, her şey buradan başlar ve sunucu bu dosyayla ayağa kalkar.
* **`package.json`:** Projenin kimlik kartıdır; adını, sürümünü ve dış bağımlılıklarını barındırır.
* **`node_modules/`:** `npm install` komutuyla yüklenen harici kütüphanelerin saklandığı klasördür. Boyutu büyük olduğu için asla Git deposuna gönderilmez.
* **`.gitignore`:** `node_modules` ve `.env` gibi hassas veya gereksiz dosyaların versiyon kontrol sistemi dışında tutulmasını sağlar.
* **`.env`:** Projemize ait veritabanı şifreleri, özel tokenlar ve gizli API anahtarlarını barındıran konfigürasyon dosyasıdır.

---

## 3. Terminal'den İlk Kod

### İlk Node.js Programı: Merhaba Dünya!

Bir `merhaba.js` dosyası oluşturun ve içerisine aşağıdaki kodları yazın:

```javascript
// merhaba.js

// Konsola mesaj yazdırma örnekleri
console.log("Merhaba, Dünya!");
console.log("Ben Node.js'im!");
console.log("Bugün harika bir gün.");

// Temel sayısal işlemler
console.log(2 + 3);     // 5
console.log(10 * 5);    // 50
console.log(Math.PI);   // 3.14159...
```

**Çalıştırma Adımları:**
1. `merhaba.js` adında yeni bir dosya oluşturun.
2. Yukarıdaki kodu dosyaya yapıştırın ve kaydedin.
3. VS Code kullanıyorsanız terminali `Ctrl + '` (backtick) tuş kombinasyonuyla açın.
4. Komut satırına `node merhaba.js` yazıp çalıştırın.
5. Ekranda yazdırılan sonuçları gözlemleyin.

### Değişken Tanımlama Yöntemleri: `var`, `let`, `const`

```javascript
// ── const: Değişmez (Sabit) Değer ──
const PI = 3.14;        // Değeri sonradan değiştirilemez!
const appName = "Benim Uygulamam";

// ── let: Değişebilen Değer ──
let sayi = 10;
sayi = 20;              // ✅ Güvenle değiştirilebilir

// ── var: ESKİ Yöntem (Modern projelerde kullanılmaz!) ──
var eskiYontem = "artık önerilmiyor";
```

* **`const`:** Değerinin hiç değişmemesi gerektiği durumlar için kullanılır. *Örnek:* API URL adresleri, sabit matematiksel değerler.
* **`let`:** Değerin program akışı içinde güncellenebileceği durumlar içindir. *Örnek:* Döngü sayaçları, kullanıcıdan alınan dinamik girdiler.
* **`var`:** ES6 öncesi kalan bir yöntemdir, scope (kapsam) sorunlarına yol açabileceği için tercih edilmemelidir.

#### Değişken Kuralları İle İlgili Örnekler

```javascript
// HATA ÖRNEĞİ: Aynı isimli sabit değişken (const) tekrar tanımlanamaz!
const PI = 3.14;
const appName = "Software Persona";
// const appName = "TNC GROUP"; // Bu satır Syntax Error (Hata) fırlatır!

console.log("Uygulama Adı: " + appName);
console.log("PI sayısı: " + PI);

// DOĞRU ÖRNEK: let ile tanımlanan bir değişken güncellenebilir
let sayi = 10;
sayi = 20;
console.log("Sayı: " + sayi);

// Başka bir kapsam ve tür testi
let isim = "Musa";
isim = "Ahmet";
const soyisim = "Kolcuk";
// soyisim = "Yılmaz"; // ❌ HATA: const değişkenlere yeniden atama yapılamaz!

console.log("İsim: " + isim);
console.log("Soyİsim: " + soyisim);
```

### JavaScript Veri Tipleri (Data Types)

```javascript
// String (Metin tabanlı veri)
const isim = "Ahmet";
const sehir = 'İstanbul';

// Number (Sayısal veri - tam veya ondalıklı)
const yas = 25;
const pi = 3.14;

// Boolean (Mantıksal doğru veya yanlış)
const aktif = true;
const silindi = false;

// Array (Dizi - liste yapıları)
const renkler = ["kırmızı", "yeşil", "mavi"];

// Object (Nesne - anahtar-değer ilişkisi)
const kullanici = { ad: "Ahmet", yas: 25 };

// null ve undefined özel durumları
const bos = null;          // Bilinçli olarak boş bırakılmış değer
let tanimsiz;              // Henüz değer atanmamış değişken (undefined)
```

### Fonksiyonlar ve Tanımlama Biçimleri

```javascript
// ── 1. Normal (Classic) Fonksiyon ──
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 5));   // 8

// ── 2. Arrow Function (Modern Sözdizimi) ──
const carp = (a, b) => a * b;
console.log(carp(4, 6));    // 24

// ── 3. Default Parameter (Varsayılan Parametre) ──
function selamla(isim = "Dünya") {
  return `Merhaba, ${isim}!`;
}
console.log(selamla());         // Merhaba, Dünya!
console.log(selamla("Ahmet"));  // Merhaba, Ahmet!
```

* **`function` anahtar kelimesi:** Klasik ve en anlaşılır yöntemdir. *Hoisting* (yukarı taşıma) özelliğini destekler.
* **Arrow Function (`=>`):** Modern ve kısa yazım stili sağlar. Node.js projelerinde anonim ve hızlı fonksiyon tanımlarında yaygın olarak tercih edilir.
* **Template Literals (`` `${}` ``):** Değişkenleri metin içerisine kolayca gömmemizi sağlayan modern ES6 özelliğidir.
* **`return` ifadesi:** Fonksiyondan dışarıya bir değer döndürür. Eğer `return` kullanılmazsa fonksiyon otomatik olarak `undefined` döner.

### Koşullar ve Döngüler

```javascript
// ── if / else if / else Yapısı ──
const not = 85;

if (not >= 90) {
  console.log("AA");
} else if (not >= 80) {
  console.log("BA");   // ← Bu blok çalışır
} else {
  console.log("Düşük not");
}

// ── for Döngüsü ──
for (let i = 1; i <= 5; i++) {
  console.log(`Sayı: ${i}`);
}

// ── forEach (Dizi Üzerinde Gezinme) ──
const meyveler = ["elma", "armut", "üzüm"];
meyveler.forEach(meyve => {
  console.log(meyve);
});
```

* **`if / else`:** Belirli bir mantıksal koşulun durumuna göre farklı kod bloklarını çalıştırmayı sağlar.
* **`else if`:** Birden fazla alternatif koşul zinciri kurmak için kullanılır.
* **`for döngüsü`:** Belirlenen bir aralıkta veya sayıda kodun tekrarlanmasını sağlar.
* **`forEach`:** Dizilerdeki her bir eleman üzerinde sırayla işlem yapılmasına olanak tanıyan bir dizi metodudur.

### Gelişmiş Dizi Metotları: `find`, `filter`, `map`, `some`

```javascript
const kullanicilar = [
  { id: 1, ad: "Ahmet", sehir: "İstanbul" },
  { id: 2, ad: "Mehmet", sehir: "Ankara" },
];

// find → Koşulu sağlayan İLK elemanı döndürür
const bulunan = kullanicilar.find(k => k.id === 2);

// filter → Koşula uyan TÜM elemanları yeni bir dizi olarak döndürür
const ankaralilar = kullanicilar.filter(k => k.sehir === "Ankara");

// map → Dizideki her elemanı dönüştürerek yeni bir dizi oluşturur
const isimler = kullanicilar.map(k => k.ad);  // ["Ahmet", "Mehmet"]

// some → Dizide en az bir eleman koşulu sağlıyor mu? (True/False döner)
const varMi = kullanicilar.some(k => k.id === 5);  // false
```

* **`find / findIndex`:** REST API mimarisinde özellikle `GET /:id`, `PUT` veya `DELETE` isteklerinde belirli bir kaydı ID'ye göre bulmak için sıkça kullanılır.
* **`filter`:** URL parametrelerinden gelen filtreleme isteklerinde (*Örn: `?sehir=Ankara`*) veri kümesini daraltmak için kullanılır.
* **`map`:** Veritabanından gelen ham verileri istemcinin (frontend) isteyeceği formata dönüştürmek için kullanılır.
* **`some / every`:** Kullanıcı yetkileri veya doğrulama kontrollerinde mantıksal doğruluk testi (*true/false*) yapmak için tercih edilir.

### Nesne Parçalama (Destructuring) ve Yayma Operatörü (Spread)

```javascript
const kisi = { ad: "Ayşe", yas: 25, sehir: "İzmir" };

// Destructuring ile nesneden özellik dışarı çıkarma
const { ad, sehir } = kisi;

// Spread operatörü (...) ile nesneyi kopyalama ve güncelleme
const guncelKisi = { ...kisi, yas: 26 };

// Dizilerde Spread kullanımı
const a = [1, 2];
const b = [...a, 3, 4]; // [1, 2, 3, 4]

// Fonksiyon parametresinde nesne parçalama
function kullaniciyiSelamla({ ad }) {
  console.log("Merhaba " + ad);
}
```

* **`const { ad } = kisi`:** Express.js'de `req.body` içerisinden gelen verileri tek satırda değişkenlere atamak için çok pratiktir.
* **`{ ...nesne }`:** Mevcut nesneyi bozmadan kopyalamayı sağlar; özellikle `PUT` veya `PATCH` isteklerinde veri güncellenirken kurtarıcıdır.
* **`[ ...dizi, yeni ]`:** Orijinal diziyi değiştirmeden (mutasyon yaratmadan) yeni elemanlar eklemeye imkan tanır.

---

## 4. Modül Sistemi

Kodunuzu mantıksal parçalara bölerek yeniden kullanılabilir hale getirmeyi sağlar. Daha önceden tanımlanmış fonksiyon veya değişkenleri başka dosyalarda kullanabilmek için `module.exports` ile dışarıya aktarır, `require()` ile içeriye alırız.

### CommonJS: `require()` ve `module.exports`

```javascript
// ── matematik.js (Modülü tanımlıyoruz) ──
function topla(a, b) { return a + b; }
function cikar(a, b) { return a - b; }
function carp(a, b)  { return a * b; }

// Fonksiyonları dışarıya açıyoruz:
module.exports = { topla, cikar, carp };

// ── app.js (Modülü projemize dahil edip kullanıyoruz) ──
const matematik = require('./matematik');

console.log(matematik.topla(5, 3));   // 8
console.log(matematik.cikar(10, 4));  // 6
console.log(matematik.carp(3, 7));    // 21

// Destructuring yöntemiyle doğrudan fonksiyonları alma:
const { topla, carp } = require('./matematik');
console.log(topla(2, 8)); // 10
```

* **`./matematik`:** Başına nokta (`./`) konulduğunda bunun yerel bir dosya olduğu anlaşılır.
* **`'http'`:** Tırnak içinde doğrudan yazılanlar Node.js'in yerleşik dahili modülleridir.
* **`'express'`:** Herhangi bir yol belirtilmeden yazılanlar `npm` ile yüklenmiş harici paketlerdir.
* **`module.exports`:** Bir dosyadan dış dünyaya hangi nesne veya fonksiyonların gönderileceğini belirler.

### CommonJS vs. ES Modules (ESM) Karşılaştırması

```javascript
// ── CommonJS (Node.js Varsayılan Modül Sistemi) ──
// matematik.js
module.exports = { topla, PI };

// app.js
const { topla, PI } = require('./matematik');

// ── ES Modules (ESM - Modern Standart) ──
// Not: package.json içine "type": "module" eklenmelidir!
// matematik.js
export function topla(a, b) { return a + b; }
export default function carp(a, b) { return a * b; }

// app.js
import carp, { topla } from './matematik.js';
```

* **`require / module.exports`:** Node.js'in geleneksel ve varsayılan modül sistemidir.
* **`import / export (ESM)`:** Modern JavaScript standardıdır ve yeni nesil projelerde tercih edilir.
* **`"type": "module"`:** `package.json` dosyasına bu satırın eklenmesi projenin ESM modülü kullanacağını sisteme bildirir.
* *Dikkat:* ESM yapısında içe aktarma yollarında dosya uzantısını (`.js`) belirtmek zorunludur.

### Node.js Dahili Modülleri (Built-in Modules)

* **`http`:** HTTP sunucusu ve istemcisi oluşturmanızı sağlar.
  ```javascript
  const http = require('http');
  ```
* **`fs`:** Dosya sistemi operasyonları gerçekleştirir (dosya okuma, yazma, silme).
  ```javascript
  const fs = require('fs');
  ```
* **`path`:** Dosya yollarını işletim sistemine uygun şekilde birleştirir ve ayrıştırır.
  ```javascript
  const path = require('path');
  ```
* **`os`:** Çalıştırıldığı işletim sistemi hakkında donanım ve yazılım bilgileri verir.
  ```javascript
  const os = require('os');
  ```
* **`events`:** Olay tabanlı programlama yapabilmek için `EventEmitter` sınıfını sunar.
  ```javascript
  const events = require('events');
  ```
* **`crypto`:** Güvenli şifreleme ve hashing (özetleme) işlemleri yapar.
  ```javascript
  const crypto = require('crypto');
  ```

### npm - Node Package Manager

`npm`, 2 milyondan fazla açık kaynaklı paketi barındıran dünyanın en büyük yazılım kayıt ve dağıtım merkezidir.

* **`$ npm init -y`:** Proje dizininde otomatik olarak varsayılan bir `package.json` dosyası oluşturur.
* **`$ npm install express`:** Express paketini projeye indirir ve `node_modules` klasörüne ekler.
* **`$ npm install -g nodemon`:** `nodemon` aracını küresel (global) olarak kurarak her projede kullanılabilir hale getirir.
* **`$ npm install`:** `package.json` dosyasında listelenen tüm bağımlılıkları toplu halde yükler.
* **`$ npm uninstall express`:** Belirtilen paketi projeden tamamen kaldırır.
* **`$ npm list`:** Projede o an yüklü olan paketleri ve bağımlılık ağacını listeler.

> `package.json` içerisindeki **`dependencies`** bloğu, uygulamanın canlıda (production) çalışması için gereken kritik paketleri listeler.

### package.json Dosyasının Yapısı

```json
{
  "name": "benim-projem",
  "version": "1.0.0",
  "description": "Benim ilk Node.js projem",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

* **`name`, `version`:** Projenin benzersiz adı ve güncel sürüm numarası.
* **`main`:** Uygulamanın çalışmaya başladığı ana giriş dosyası (`index.js`).
* **`scripts`:** Terminal üzerinden çalıştırılabilen kısayol komutları (`npm run start`, `npm run dev`).
* **`dependencies`:** Canlı ortamda (production) çalışmak için zorunlu olan paketler.
* **`devDependencies`:** Yalnızca geliştirme aşamasında (development) kullanılan araçlar.

### Node.js ile Otomatik Yeniden Başlatma (`node --watch`)

Node.js 18 ve üzeri sürümlerde harici bir araca gerek kalmadan dosya değişikliklerini otomatik algılayan yerleşik bir izleme mekanizması bulunmaktadır:

```bash
# Geliştirme aşamasında otomatik izleme ile çalıştırma:
node --watch index.js
```

1. Terminalde `node --watch index.js` komutunu çalıştırın.
2. Kod dosyanızda değişiklik yapın.
3. Dosyayı kaydedin (`Ctrl + S`).
4. Sunucu otomatik olarak yeniden başlar!

---

## 5. Pratik Proje: Sayaç ve Hesap Makinesi

### Sayaç Uygulaması

```javascript
// sayac.js
const sayac = {
  deger: 0,

  artir() {
    this.deger++;
    console.log(`Sayaç: ${this.deger}`);
  },

  azalt() {
    this.deger--;
    console.log(`Sayaç: ${this.deger}`);
  },

  sifirla() {
    this.deger = 0;
    console.log("Sayaç sıfırlandı!");
  },

  goster() {
    console.log(`Mevcut değer: ${this.deger}`);
  }
};

// Modül olarak dışarı aktarıyoruz
module.exports = { sayac };

// Test kodları
sayac.artir(); // Sayaç: 1
sayac.artir(); // Sayaç: 2
sayac.azalt(); // Sayaç: 1
sayac.goster(); // Mevcut değer: 1
sayac.sifirla(); // Sayaç sıfırlandı!
```

* **Nesne (Object):** Sayaç mantığı bir nesne içinde veri ve metodların birleşimiyle tasarlandı.
* **`this` anahtar kelimesi:** Nesnenin kendi içerisindeki özelliğe (`deger`) erişmek için kullanılır.
* **Metot Kısaltması:** `artir() {}` yazımı `artir: function() {}` ile tamamen aynı anlama gelir.

---

### Hesap Makinesi Uygulaması (Temel Fonksiyonlar)

```javascript
// hesap.js
function topla(a, b) { 
  return a + b; 
}

function cikar(a, b) { 
  return a - b; 
}

function carp(a, b)  { 
  return a * b; 
}

function bol(a, b) {
  if (b === 0) {
    return "Hata: Sıfıra bölme yapılamaz!";
  }
  return a / b;
}

function ussu(taban, us) { 
  return Math.pow(taban, us); 
}

function karekok(sayi) {
  if (sayi < 0) {
    return "Hata: Negatif sayının karekökü alınamaz!";
  }
  return Math.sqrt(sayi);
}

module.exports = { topla, cikar, carp, bol, ussu, karekok };

// Test İşlemleri
console.log("5 + 3 =", topla(5, 3));         // 8
console.log("10 - 4 =", cikar(10, 4));      // 6
console.log("6 x 7 =", carp(6, 7));         // 42
console.log("15 / 3 =", bol(15, 3));        // 5
console.log("10 / 0 =", bol(10, 0));        // Hata mesajı döner
console.log("2^3 =", ussu(2, 3));           // 8
console.log("V16 =", karekok(16));          // 4
```

* **Sıfıra Bölme Kontrolü:** `if (b === 0)` koşulu ile olası yazılımsal çöküşler (*Crash*) engellenir.
* **`Math.pow()` ve `Math.sqrt()`:** JavaScript'in dahili matematik kütüphanesinin temel fonksiyonlarıdır.
* **Erken Return (Early Return):** Hata durumunda kodun devam etmesini engelleyerek fonksiyonun hemen sonuç dönmesini sağlar.

---

### Switch-Case İle Dinamik Hesap Makinesi

```javascript
// hesapMakinesi.js - Switch/Case Alternatifi
function hesapla(a, islem, b) {
  switch (islem) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return "Hata: Sıfıra bölme!";
      return a / b;
    default:
      return "Bilinmeyen işlem!";
  }
}

// Test Dizisi
const islemler = [
  [10, "+", 5],
  [20, "-", 8],
  [6, "*", 7],
  [15, "/", 3],
  [10, "/", 0]
];

islemler.forEach(([a, op, b]) => {
  console.log(`${a} ${op} ${b} = ${hesapla(a, op, b)}`);
});

module.exports = { hesapla };
```

* **`switch / case`:** Çoklu koşul durumlarını `if-else` bloklarına kıyasla çok daha temiz ve okunabilir şekilde yönetmenizi sağlar.
* **`default` bloğu:** Tanımlanan operatörler dışında geçersiz bir simge gelirse sistemin güvenli bir uyarı döndürmesini sağlar.

---

### Tüm Modülleri Birleştirme (`index.js`)

```javascript
// index.js - Her şeyi bir araya getirip test ediyoruz
const { sayac } = require('./sayac');
const { hesapla } = require('./hesap');

console.log("=== SAYAÇ TESTİ Başlıyor ===");
sayac.artir();
sayac.artir();
sayac.artir();
const mevcut = sayac.deger; // 3

console.log("\n=== HESAP MAKİNESİ Test Ediliyor ===");
console.log(`Mevcut sayaç değeri: ${mevcut}`);
console.log(`${mevcut} x 10 = ${hesapla(mevcut, "*", 10)}`);
console.log(`${mevcut} + 7 = ${hesapla(mevcut, "+", 7)}`);

console.log("\n=== TÜMÜ TAMAMLANDI ===");
```