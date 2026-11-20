# Express.js 
---

## 1. Express.js Nedir?

**Express.js**, Node.js üzerinde çalışan; web uygulamaları ve API'ler geliştirmek için tasarlanmış minimalist, hızlı ve esnek bir web uygulama çatısıdır (framework). Node.js'in çekirdek HTTP yeteneklerini soyutlayarak sunucu oluşturma, yönlendirme (routing) ve veri işleme süreçlerini büyük ölçüde basitleştirir. Özellikle **RESTful API** mimarilerinin geliştirilmesinde endüstri standardı haline gelmiştir.

> **Kurulum Komutu:** `npm install express`

### Neden Express.js? Yerleşik `http` Modülü Yetmez mi?

Node.js, harici bir pakete ihtiyaç duymadan kendi içinde yerleşik olarak gelen `http` modülü ile bir web sunucusu ayağa kaldırabilir. Ancak saf `http` modülü çok düşük seviyeli (low-level) çalışır. Bu yaklaşımda:
* Gelen isteğin URL'si ve HTTP metodu (`GET`, `POST` vb.) `if-else` bloklarıyla manuel olarak kontrol edilir.
* İstek gövdesi (request body), ağ üzerinden gelen veri parçaları (chunk) dinlenerek elle birleştirilir ve JSON formatına dönüştürülür.
* Yanıt başlıkları (`Content-Type`) ve durum kodları her seferinde manuel olarak tanımlanır.

Uygulama büyüdükçe bu durum ciddi kod tekrarına, karmaşıklığa ve bakım zorluğuna yol açar. **Express.js**, doğrudan `http` modülünün üzerine inşa edilmiştir ve bu karmaşık işlemleri okunabilir, modüler bir API ile yapmamızı sağlar.

### Aynı İşlemin İki Farklı Yaklaşımla Yapılması

Aşağıda, kullanıcıları listeleyen (`GET /users`) ve yeni kullanıcı ekleyen (`POST /users`) basit bir sunucunun iki farklı yöntemle yazımı karşılaştırılmıştır.

#### 1. Saf `http` Modülü ile Yaklaşım

```javascript
const http = require('http');
const data = [];

http.createServer((req, res) => {
  // URL ve HTTP metodunu manuel olarak kontrol etmeliyiz
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else if (req.url === '/users' && req.method === 'POST') {
    let body = '';

    // Gelen veri akışını (stream) parça parça dinleyip birleştiriyoruz
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Veri akışı bittiğinde JSON'a çevirip kaydediyoruz
    req.on('end', () => {
      const parsed = JSON.parse(body);
      data.push(parsed);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parsed));
    });
  }
}).listen(3000);
```

#### 2. Express.js ile Yaklaşım

```javascript
const express = require('express');
const app = express();
const data = [];

// Gelen JSON verilerini otomatik olarak ayrıştıran (parse) ara yazılım
app.use(express.json());

// GET isteği için doğrudan yönlendirme
app.get('/users', (req, res) => {
  res.json(data);
});

// POST isteği için doğrudan yönlendirme
app.post('/users', (req, res) => {
  const yeni = req.body; // Veri hazır olarak req.body içinde gelir
  data.push(yeni);
  res.status(201).json(yeni);
});

app.listen(3000);
```

### Karşılaştırma Tablosu

| Özellik | Saf `http` Modülü | Express.js |
| :--- | :--- | :--- |
| **Kurulum** | Node.js ile yerleşik gelir | `npm install express` ile kurulur |
| **Routing (Yönlendirme)** | URL ve metot `if/else` ile kontrol edilir | `app.get()`, `app.post()` gibi metotlar kullanılır |
| **İstek Gövdesi (Body)** | Veri parçaları (`chunk`) elle okunur ve ayrıştırılır | `express.json()` middleware'i ile otomatik işlenir |
| **Yanıt Oluşturma** | `res.writeHead()` ve `res.end()` kullanılır | `res.status()` ve `res.json()` kullanılır |
| **Middleware Desteği** | Manuel olarak tasarlanması gerekir | Zengin hazır ve özel middleware desteği vardır |
| **Okunabilirlik & Ölçek** | Küçük örnekler için uygundur, büyüdükçe karmaşıklaşır | Kısa, düzenli, modüler ve ölçeklenebilirdir |

### Express.js Bize Ne Sağlar?

* **Kolay Routing:** `app.get()`, `app.post()`, `app.put()`, `app.delete()` gibi metotlarla tek satırda anlaşılır rotalar tanımlanır.
* **Middleware Mimarisi:** İstek ve yanıt döngüsü arasına giren fonksiyonlarla kimlik doğrulama, loglama ve hata yakalama gibi ortak işlemler kolayca zincirlenir.
* **Otomatik JSON Desteği:** Yerleşik `express.json()` middleware'i sayesinde gelen JSON verileri otomatik olarak JavaScript nesnesine dönüştürülür.
* **Geniş Ekosistem:** CORS ayarları (`cors`), güvenlik başlıkları (`helmet`), kimlik doğrulama (`passport`) gibi binlerce hazır pakete kolayca entegre olur.
* **Minimalist ve Hızlı Yapı:** Projeye gereksiz yük bindirmez; yalnızca ihtiyaç duyulan bileşenler eklenir.
* **Devasa Topluluk:** Haftalık 30 milyondan fazla indirme sayısıyla karşılaşılan sorunlara hızlı çözüm bulma imkânı sunar.

> 💡 **Analoji:** Saf `http` modülü boş bir **arsa** gibidir; duvarını da tesisatını da kendiniz döşersiniz. Express.js ise o arsa üzerine odaları, elektrik ve su tesisatı hazır şekilde inşa edilmiş **modern bir bina** gibidir; size sadece eşyalarınızı yerleştirip yaşamaya başlamak kalır.

---

## 2. Kurulum ve İlk Sunucu

Sıfırdan bir Express.js projesi başlatmak için Node.js paket yöneticisi olan **NPM (Node Package Manager)** komutları kullanılır.

### Temel NPM ve Node Komutları

* `npm init -y`: Proje dizininde projenin kimlik bilgilerini ve bağımlılıklarını tutan `package.json` dosyasını oluşturur. `-y` (yes) bayrağı, sorulan tüm yapılandırma sorularını varsayılan değerlerle otomatik onaylar.
* `npm install express`: Express.js kütüphanesini indirir, `node_modules` klasörüne ekler ve bağımlılık kaydını `package.json` ile `package-lock.json` dosyalarına işler.
* `node app.js`: Belirtilen JavaScript dosyasını Node.js çalışma zamanında başlatır.
* `node --watch app.js`: Node.js'in yerleşik izleme modudur. Kod dosyalarında yapılan her değişiklikte sunucuyu otomatik olarak yeniden başlatır (harici `nodemon` paketine olan ihtiyacı ortadan kaldırır).

### Adım Adım Proje Kurulumu

1. **Proje klasörünü oluşturun ve içine girin:**
   ```bash
   mkdir gun3-express
   cd gun3-express
   ```
2. **`package.json` dosyasını oluşturun:**
   ```bash
   npm init -y
   ```
3. **Express.js paketini yükleyin:**
   ```bash
   npm install express
   ```
4. **Ana uygulama dosyası olan `app.js` dosyasını oluşturun ve temel sunucu kodunu yazın:**
   ```javascript
   // app.js
   const express = require('express'); // Express kütüphanesini projeye dahil et
   const app = express();              // Bir Express uygulama örneği oluştur
   const PORT = 3000;                  // Sunucunun dinleyeceği port numarası

   // Middleware: Gelen JSON gövdelerini otomatik ayrıştır
   app.use(express.json());

   // Route: Ana sayfa (GET /)
   app.get('/', (req, res) => {
     res.json({
       mesaj: 'Merhaba Express!',
       durum: 'Çalışıyor',
       versiyon: '1.0.0'
     });
   });

   // Route: Hakkında sayfası (GET /hakkinda)
   app.get('/hakkinda', (req, res) => {
     res.json({
       uygulama: 'Gün 3 Demo',
       teknoloji: 'Node.js + Express'
     });
   });

   // Sunucuyu belirtilen portta dinlemeye başla
   app.listen(PORT, () => {
     console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
   });
   ```
5. **Sunucuyu izleme modunda çalıştırın:**
   ```bash
   node --watch app.js
   ```

### Kodun Detaylı Açıklaması

* `require('express')`: Node.js'in CommonJS modül sistemini kullanarak Express paketini kodumuza aktarır.
* `express()`: Uygulamamızın çekirdeğini oluşturan `app` nesnesini üretir. Tüm rotalar ve ara yazılımlar bu nesne üzerinden tanımlanır.
* `PORT`: Sunucunun işletim sistemi üzerinde hangi ağ kapısından (port) gelen istekleri dinleyeceğini belirler.
* `app.listen(PORT, callback)`: Sunucuyu başlatır. Sunucu başarıyla ayağa kalktığında ikinci parametre olarak verilen callback fonksiyonu çalışır ve terminale bilgi mesajı yazar.

Sunucu çalıştıktan sonra tarayıcı veya Postman üzerinden `http://localhost:3000/` adresine gidildiğinde aşağıdaki JSON çıktısı alınır:

```json
{
  "mesaj": "Merhaba Express!",
  "durum": "Çalışıyor",
  "versiyon": "1.0.0"
}
```

---

## 3. `req` (Request) ve `res` (Response) Nesneleri

Express.js'te her rota fonksiyonu (route handler), iki temel parametre alır: `req` ve `res`. İstemci ile sunucu arasındaki tüm iletişim bu iki nesne üzerinden yürütülür.

> 💡 **Analoji:** Bir restoranda `req`, **müşterinin garsona verdiği sipariştir** (ne istediği, masanın numarası, özel notları). `res` ise **garsonun mutfaktan getirip müşteriye sunduğu yemektir** (sunucunun ürettiği yanıt).

### `req` (Request - Gelen İstek) Özellikleri

İstemciden sunucuya ulaşan isteğin tüm detaylarını barındırır:

* `req.method`: İsteğin HTTP metodunu verir (`GET`, `POST`, `PUT`, `DELETE` vb.).
* `req.url` / `req.originalUrl`: İstek yapılan URL yolunu verir (Örn: `/api/users`).
* `req.params`: URL yolundaki dinamik parametreleri nesne olarak tutar (Örn: `/users/5` için `{ id: '5' }`).
* `req.query`: URL sonundaki `?` işaretinden sonra gelen sorgu parametrelerini tutar (Örn: `?sayfa=2` için `{ sayfa: '2' }`).
* `req.body`: `POST` veya `PUT` istekleriyle gövdede gönderilen verileri (JSON, form verisi vb.) tutar.
* `req.headers`: İstekle birlikte gelen HTTP başlık bilgilerini (`Authorization`, `Content-Type` vb.) içerir.

### `res` (Response - Gönderilen Yanıt) Metotları

Sunucunun istemciye nasıl bir cevap döneceğini belirleyen metotlardır:

* `res.json(veri)`: JavaScript nesnesini veya dizisini otomatik olarak JSON formatına çevirir, uygun `Content-Type: application/json` başlığını ekler ve yanıtı gönderir. API geliştirmede en sık kullanılan metottur.
* `res.send(icerik)`: Düz metin, HTML etiketi veya Buffer tipinde yanıt gönderir.
* `res.status(kod)`: Yanıtın HTTP durum kodunu ayarlar (Örn: `200`, `201`, `400`, `404`, `500`). Genellikle zincirleme olarak kullanılır: `res.status(201).json(veri)`.
* `res.redirect(url)`: İstemciyi başka bir URL adresine yönlendirir.
* `res.sendFile(dosyaYolu)`: Sunucu diskinde bulunan fiziksel bir dosyayı (HTML, PDF, resim vb.) istemciye gönderir.

### Yanıt Metotları Örnek Kullanımı

```javascript
const path = require('path');

// 1. JSON formatında yanıt gönderme
app.get('/json', (req, res) => {
  res.json({ mesaj: 'Merhaba JSON' });
});

// 2. HTML veya düz metin gönderme
app.get('/metin', (req, res) => {
  res.send('<h1>Merhaba Dünya</h1>');
});

// 3. Özel durum kodu ile hata mesajı gönderme
app.get('/yok', (req, res) => {
  res.status(404).json({ hata: 'Aradığınız kayıt bulunamadı' });
});

// 4. Başka bir rotaya yönlendirme
app.get('/eski-adres', (req, res) => {
  res.redirect('/json');
});

// 5. Fiziksel bir HTML dosyasını istemciye sunma
app.get('/sayfa', (req, res) => {
  // path.join, işletim sistemine uygun güvenli dosya yolu oluşturur
  res.sendFile(path.join(__dirname, 'merhaba.html'));
});
```

---

## 4. Statik Dosyalar (`express.static`) ve İstemci İstekleri (`fetch`)

Modern web uygulamalarında sunucu sadece JSON verisi üretmekle kalmaz; aynı zamanda HTML, CSS, tarayıcı tarafı JavaScript dosyaları ve görseller gibi **statik dosyaları** da istemciye sunabilir. Express.js, bu işlem için yerleşik `express.static()` ara yazılımını sunar.

### Sunucu Tarafı (`app.js`)

```javascript
const express = require('express');
const app = express();

// 'public' klasörü içindeki tüm dosyaları dış dünyaya statik olarak aç
app.use(express.static('public'));

// Frontend tarafının veri çekeceği API uç noktası (endpoint)
app.get('/api/selam', (req, res) => {
  res.json({ mesaj: 'Sunucudan selamlar!' });
});

app.listen(3011, () => {
  console.log('Sunucu http://localhost:3011 adresinde çalışıyor.');
});
```

### İstemci Tarafı (`public/index.html` içindeki `<script>`)

```javascript
// Bu kod sunucuda değil, kullanıcının tarayıcısında çalışır!
fetch('/api/selam')
  .then(yanit => yanit.json())
  .then(veri => console.log('Gelen Veri:', veri))
  .catch(hata => console.error('İstek hatası:', hata));
```

### Çalışma Mantığı ve Akış Sırası

1. `app.use(express.static('public'))` satırı, proje kök dizinindeki `public` klasörünü web sunucusunun kök dizini (`/`) haline getirir.
2. Tarayıcıdan `http://localhost:3011` adresine girildiğinde Express, `public` klasörü içinde otomatik olarak `index.html` dosyasını arar ve kullanıcıya sunar. Benzer şekilde `public/style.css` dosyasına `/style.css` adresinden doğrudan erişilebilir.
3. Tarayıcı `index.html` sayfasını yüklediğinde içindeki `fetch('/api/selam')` kodu çalışır ve sunucudaki API rotasına asenkron bir HTTP GET isteği atar.
4. Sunucu `{ mesaj: 'Sunucudan selamlar!' }` JSON yanıtını döner ve tarayıcı konsolunda bu veri görüntülenir.

---

## 5. Express 5 ile Gelen Önemli Yenilikler

Express.js'in 5. ana sürümü (Express 5), modern JavaScript standartlarına uyum ve güvenlik açısından önemli iyileştirmeler getirmiştir:

```javascript
// 1. Asenkron (async) Hata Yönetimi: Artık try/catch zorunlu değil
app.get('/hata', async (req, res) => {
  throw new Error('Beklenmeyen bir sunucu hatası oluştu!');
  // Hata otomatik olarak yakalanır ve Express hata middleware'ine iletilir.
});

// 2. İsimlendirilmiş Wildcard (*) Rotaları
// Express 5'te yıldız (*) karakterinin mutlaka bir parametre adı olmalıdır.
app.get('/dosyalar/*yol', (req, res) => {
  res.json({ yakalananYol: req.params.yol });
});

// 3. Opsiyonel Rota Parametreleri
// Süslü parantez {} kullanarak parametrenin isteğe bağlı olduğu belirtilir.
app.get('/notlar{/:id}', (req, res) => {
  // Hem '/notlar' hem de '/notlar/42' isteklerini karşılar
  res.json({ id: req.params.id ?? 'Tüm notlar listelendi' });
});

// 4. req.body Varsayılan Değeri
// İstek gövdesi boşsa req.body artık {} yerine undefined döner.
app.post('/test', (req, res) => {
  // Hata almamak için nullish coalescing (??) ile güvenli yıkım (destructuring) yapılır
  const { ad } = req.body ?? {};
  res.json({ ad });
});

// 5. res.sendFile() Promise Desteği
app.get('/dosya-indir', async (req, res, next) => {
  try {
    await res.sendFile('/mutlak/dosya/yolu/rapor.pdf');
  } catch (hata) {
    next(hata);
  }
});
```

---

## 6. Routing (Yönlendirme) Temelleri

**Routing**, istemciden gelen bir HTTP isteğinin (URL ve HTTP metodunun) sunucu tarafında hangi kod bloğu tarafından karşılanacağını belirleme mekanizmasıdır. RESTful API tasarımında temel CRUD (Create, Read, Update, Delete) işlemleri HTTP metotlarıyla eşleştirilir:

* `GET`: Veri okuma / listeleme
* `POST`: Yeni veri oluşturma
* `PUT` / `PATCH`: Mevcut veriyi güncelleme
* `DELETE`: Veriyi silme

### Temel CRUD Route Tanımlamaları

```javascript
// GET: Tüm ürünleri listele
app.get('/urunler', (req, res) => {
  res.json({ mesaj: 'Tüm ürünler listelendi' });
});

// POST: Yeni ürün ekle
app.post('/urunler', (req, res) => {
  const yeniUrun = req.body; // Örn: { ad: 'Laptop', fiyat: 25000 }
  res.status(201).json({ mesaj: 'Ürün başarıyla eklendi', urun: yeniUrun });
});

// PUT: Belirli bir ID'ye sahip ürünü güncelle
app.put('/urunler/:id', (req, res) => {
  const { id } = req.params; // URL'deki dinamik :id değerini al
  res.json({ mesaj: `${id} numaralı ürün güncellendi` });
});

// DELETE: Belirli bir ID'ye sahip ürünü sil
app.delete('/urunler/:id', (req, res) => {
  const { id } = req.params;
  res.json({ mesaj: `${id} numaralı ürün silindi` });
});
```

> ⚠️ **Sözdizimi Hatırlatması:** JavaScript'te metinlerin içine değişken yerleştirmek için tek tırnak (`'...'`) veya çift tırnak (`"..."`) değil, **backtick** (`` `...` ``) karakteriyle oluşturulan *Template Literal* yapısı (`${id}`) kullanılmalıdır.

### URL Parametreleri (`req.params`) ve Query String (`req.query`)

İstemciden URL aracılığıyla sunucuya veri göndermenin iki temel yolu vardır:

1. **Route Parametreleri (`req.params`):** URL yolunun bir parçasıdır ve `:parametreAdi` şeklinde tanımlanır. Belirli bir tekil kaynağı işaret etmek için kullanılır.
2. **Query String (`req.query`):** URL'nin sonunda `?` işaretinden sonra `anahtar=deger&anahtar2=deger2` formatında gelir. Filtreleme, arama, sıralama ve sayfalama işlemleri için kullanılır.

```javascript
// 1. Tekil ve Çoklu Route Parametreleri
// Örnek İstek: GET /kategoriler/elektronik/urunler/15
app.get('/kategoriler/:kategori/urunler/:id', (req, res) => {
  // Express, URL parametrelerini her zaman string (metin) olarak alır
  const { kategori, id } = req.params;
  res.json({ kategori, urunId: Number(id) });
});

// 2. Query String Kullanımı
// Örnek İstek: GET /urunler?sayfa=2&limit=10&siralama=fiyat
app.get('/urunler', (req, res) => {
  // Varsayılan değer ataması (Destructuring default values)
  const { sayfa = '1', limit = '10', siralama = 'varsayilan' } = req.query;

  res.json({
    sayfa: Number(sayfa),
    limit: Number(limit),
    siralama
  });
});
```

#### Hangisini Ne Zaman Kullanmalıyız?

| Kriter | Route Parametresi (`:id`) | Query String (`?anahtar=deger`) |
| :--- | :--- | :--- |
| **Kullanım Amacı** | Belirli bir kaynağı doğrudan bulmak | Listeyi filtrelemek, aramak, sayfalamak |
| **Zorunluluk** | Genellikle rotanın eşleşmesi için zorunludur | İsteğe bağlıdır (opsiyonel) |
| **Örnek URL** | `/kullanicilar/42`, `/urunler/laptop-123` | `/urunler?sayfa=2`, `/arama?q=laptop&min=1000` |

### Rotaları Modüler Hale Getirme: `express.Router()`

Uygulama büyüdükçe tüm rotaları tek bir `app.js` dosyasında tutmak kodun okunabilirliğini yok eder. `express.Router()`, ilgili rotaları (örneğin kullanıcı işlemleri, ürün işlemleri, sipariş işlemleri) ayrı dosyalarda gruplayıp ana uygulamaya bağlamamızı sağlayan mini bir Express uygulaması gibidir.

#### 1. Alt Rota Dosyası (`routes/kullanici.js`)

```javascript
const express = require('express');
const router = express.Router(); // Bağımsız bir router nesnesi oluştur

// Ana uygulamada '/kullanicilar' ön ekine bağlanacağı için buradaki '/' aslında '/kullanicilar' demektir
router.get('/', (req, res) => {
  res.json({ mesaj: 'Tüm kullanıcılar listelendi' });
});

// Bu rota '/kullanicilar/:id' adresini karşılar
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// Bu rota 'POST /kullanicilar' adresini karşılar
router.post('/', (req, res) => {
  res.status(201).json(req.body);
});

// Router'ı dışa aktar ki app.js içinden çağrılabilsin
module.exports = router;
```

#### 2. Ana Uygulama Dosyası (`app.js`)

```javascript
const express = require('express');
const app = express();

// Modüler rota dosyalarını içe aktar
const kullaniciRouter = require('./routes/kullanici');
const urunRouter = require('./routes/urun');

app.use(express.json());

// Ön ek (prefix) tanımlayarak rotaları ana uygulamaya bağla
app.use('/kullanicilar', kullaniciRouter);
app.use('/urunler', urunRouter);

app.listen(3000);
```

---

## 7. Middleware (Ara Yazılım) Kavramı ve Hata Yönetimi

**Middleware**, istemciden gelen bir HTTP isteği sunucuya ulaştığı andan itibaren, nihai yanıt (`res`) gönderilene kadar arada çalışan fonksiyonlardır. Bir middleware fonksiyonu `req`, `res` ve `next` olmak üzere üç parametre alır.

### Middleware Nasıl Çalışır?

```
[Gelen İstek] ──▶ [Middleware 1: JSON Parse] ──▶ [Middleware 2: Loglama] ──▶ [Middleware 3: Yetki Kontrolü] ──▶ [Route Handler] ──▶ [Yanıt]
```

> 💡 **Analoji:** Middleware yapısını bir **havalimanı güvenlik kontrolüne** benzetebilirsiniz. Yolcu (istek) uçağa (route handler) binmeden önce sırasıyla bilet kontrolü, X-ray cihazı ve pasaport kontrolünden geçer. Her görevlinin yolcuyu bir sonraki noktaya yönlendirmesi **`next()`** fonksiyonunu çağırmaktır. Eğer bir noktada sorun çıkarsa (örneğin pasaport geçersizse), görevli yolcuyu durdurur ve geri çevirir (`res.status(401).json(...)`); yolcu uçağa hiç ulaşamaz.

### Pratik Middleware Örnekleri

```javascript
// 1. Uygulama Geneli (Global) Loglama Middleware'i
// app.use() ile tanımlandığı için gelen TÜM isteklerde çalışır
const logger = (req, res, next) => {
  const zaman = new Date().toLocaleTimeString('tr-TR');
  console.log(`[${zaman}] ${req.method} ${req.originalUrl}`);
  
  // İsteğin bir sonraki adıma geçmesi için next() çağrılması ZORUNLUDUR!
  next();
};

app.use(logger);

// 2. Rota Bazlı (Route-Specific) Kimlik Doğrulama Middleware'i
const authKontrol = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    // return kullanarak fonksiyonu burada sonlandırıyoruz, next() çağrılmaz
    return res.status(401).json({ hata: 'Erişim reddedildi: Token gerekli' });
  }

  if (token !== 'gizli-token-123') {
    return res.status(403).json({ hata: 'Yetkisiz erişim: Geçersiz token' });
  }

  // Token geçerliyse asıl rota fonksiyonuna geç
  next();
};

// Sadece '/profil' rotasına gelen isteklerde önce authKontrol çalışır
app.get('/profil', authKontrol, (req, res) => {
  res.json({ kullanici: 'Ahmet', rol: 'admin' });
});
```

### 404 (Bulunamadı) ve Merkezi Hata Yönetimi

Express.js'te kodların yukarıdan aşağıya doğru sırayla çalıştığını unutmamak gerekir. Tanımlanmamış URL'leri yakalamak ve uygulama genelindeki hataları tek bir merkezden yönetmek için özel middleware'ler **tüm rotaların en altına** eklenir.

```javascript
// Örnek Hata Üreten Rota
app.get('/kullanicilar/:id', (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    // next() içine bir Error nesnesi verildiğinde Express normal akışı keser
    // ve doğrudan 4 parametreli Hata Yakalayıcı Middleware'e atlar!
    return next(new Error('Kullanıcı ID değeri sayısal olmalıdır!'));
  }

  res.json({ id });
});

// 1. 404 Yakalayıcı Middleware (Tüm geçerli rotalardan SONRA yazılmalıdır)
app.use((req, res) => {
  res.status(404).json({
    hata: 'Aradığınız sayfa veya uç nokta bulunamadı',
    istenenUrl: req.originalUrl,
    metot: req.method
  });
});

// 2. Merkezi Hata Yakalayıcı Middleware (Mutlaka 4 parametre almalıdır: err, req, res, next)
app.use((err, req, res, next) => {
  console.error('Sunucu Hatası:', err.message);

  const durumKodu = err.status || 500;
  res.status(durumKodu).json({
    hata: 'İşlem sırasında bir hata oluştu',
    durum: durumKodu,
    mesaj: err.message
  });
});
```

---

## 8. Postman ile API Testi

Tarayıcıların adres çubuğu yalnızca `GET` istekleri gönderebilir. Geliştirdiğimiz `POST`, `PUT` ve `DELETE` uç noktalarını test etmek, istek başlıklarını (Headers) düzenlemek ve JSON gövdeleri göndermek için **Postman** kullanılır.

### Postman Arayüzü ve Temel Sekmeler

Bir istek oluştururken HTTP metodunu (`GET`, `POST`, `PUT`, `DELETE`) seçip URL'yi (`http://localhost:3000/kullanicilar`) yazdıktan sonra **Send** butonuna basılır. İstek ayarları şu sekmelerden yapılır:

| Sekme | Açıklama |
| :--- | :--- |
| **Params** | URL sonuna eklenecek Query String parametrelerini (`?sayfa=2`) görsel olarak düzenler. |
| **Authorization** | API güvenliği için Bearer Token, Basic Auth gibi yetkilendirme bilgilerini ekler. |
| **Headers** | İsteğe özel HTTP başlıklarını (`Content-Type`, `Accept` vb.) tanımlar. |
| **Body** | `POST` ve `PUT` isteklerinde sunucuya gönderilecek veri paketini oluşturur. |

### İstek Türlerine Göre Postman Yapılandırması

| HTTP Metodu | Örnek URL | Body Ayarı | Açıklama |
| :--- | :--- | :--- | :--- |
| **GET** | `/kullanicilar` | Yok (`none`) | Veri okuma işlemlerinde gövde gönderilmez. |
| **POST** | `/kullanicilar` | **raw → JSON** (Zorunlu) | Yeni kayıt oluşturmak için JSON nesnesi gönderilir. |
| **PUT** | `/kullanicilar/1` | **raw → JSON** (Zorunlu) | Güncellenecek alanları içeren JSON nesnesi gönderilir. |
| **DELETE** | `/kullanicilar/1` | Yok (`none`) | Silinecek kaynağın ID'si URL içinde belirtilir. |

> 🎤 **Eğitmen İpucu:** `POST` ve `PUT` isteklerinde **Body** sekmesine geçtikten sonra **raw** seçeneğini işaretlemeyi ve sağ taraftaki açılır menüden veri tipini **JSON** olarak seçmeyi unutmayın; aksi halde Express `req.body` verisini okuyamaz.

#### Örnek POST İsteği Gövdesi (JSON)

```json
{
  "ad": "Ayşe",
  "email": "ayse@test.com",
  "yas": 28
}
```

#### Örnek Sunucu Yanıtı (`Status: 200 OK | Time: 12ms`)

```json
{
  "success": true,
  "data": [
    { "id": 1, "ad": "Ahmet", "email": "ahmet@test.com" },
    { "id": 2, "ad": "Mehmet", "email": "mehmet@test.com" }
  ],
  "toplam": 2
}
```

---

## 9. Canlı Proje: Kullanıcı Yönetimi RESTful API

Öğrendiğimiz tüm kavramları birleştirerek modüler klasör yapısına sahip, tam kapsamlı bir **Kullanıcı Yönetimi API'si** geliştirelim.

### 1. Proje Klasör Yapısı

```text
gun3-express/
│
├── app.js                # Ana sunucu dosyası (Uygulama giriş noktası)
│
├── routes/
│   └── kullanici.js      # /kullanicilar rotalarının yönetimi (CRUD)
│
├── data/
│   └── kullanicilar.js   # Geçici bellek içi (in-memory) veri deposu
│
├── middleware/
│   └── logger.js         # İstek süresi ve durum kodu loglayıcı
│
├── package.json
└── node_modules/
```

### 2. API Uç Noktaları (Endpoints) Planı

| HTTP Metodu | Endpoint | Görevi | Başarılı Durum Kodu |
| :--- | :--- | :--- | :--- |
| `GET` | `/kullanicilar` | Tüm kullanıcıları listeler | `200 OK` |
| `GET` | `/kullanicilar/:id` | ID'si verilen tek bir kullanıcıyı getirir | `200 OK` |
| `POST` | `/kullanicilar` | Yeni bir kullanıcı kaydı oluşturur | `201 Created` |
| `PUT` | `/kullanicilar/:id` | Mevcut kullanıcının bilgilerini günceller | `200 OK` |
| `DELETE` | `/kullanicilar/:id` | Mevcut kullanıcıyı listeden siler | `200 OK` |

---

### Adım 1: Veri Katmanı (`data/kullanicilar.js`)

Gerçek dünya projelerinde veriler kalıcı veritabanlarında (PostgreSQL, MongoDB, MySQL) saklanır. Öğrenme aşamasında veritabanı kurulumuyla vakit kaybetmemek için verileri sunucu belleğinde (RAM) bir dizi içinde tutacağız.

```javascript
// data/kullanicilar.js
let kullanicilar = [
  {
    id: 1,
    ad: "Ahmet Yılmaz",
    email: "ahmet@example.com",
    yas: 28,
    sehir: "İstanbul"
  },
  {
    id: 2,
    ad: "Mehmet Kaya",
    email: "mehmet@example.com",
    yas: 32,
    sehir: "Ankara"
  },
  {
    id: 3,
    ad: "Ayşe Demir",
    email: "ayse@example.com",
    yas: 25,
    sehir: "İzmir"
  }
];

module.exports = kullanicilar;
```

> ⚠️ **Önemli Not:** Bu yöntem **In-Memory Database** olarak adlandırılır. Veriler RAM üzerinde tutulduğu için sunucu yeniden başlatıldığında yapılan tüm ekleme, silme ve güncelleme işlemleri sıfırlanır ve başlangıç verilerine dönülür.

---

### Adım 2: Özel Loglama Middleware'i (`middleware/logger.js`)

Gelen her isteğin hangi HTTP metoduyla yapıldığını, hangi URL'ye gittiğini, sunucunun kaç milisaniyede yanıt verdiğini ve dönen HTTP durum kodunu renkli şekilde terminale yazdıran bir ara yazılım oluşturalım.

```javascript
// middleware/logger.js
const logger = (req, res, next) => {
  const baslangicZamani = Date.now();

  // 'finish' olayı, sunucu yanıtı istemciye tamamen gönderildiğinde tetiklenir
  res.on('finish', () => {
    const gecenSure = Date.now() - baslangicZamani;
    
    // Durum kodu 400'den küçükse yeşil (\x1b[32m), hata varsa kırmızı (\x1b[31m) renk kodu seç
    const renk = res.statusCode < 400 ? '\x1b[32m' : '\x1b[31m';
    const sifirla = '\x1b[0m';

    console.log(
      `${renk}[${res.statusCode}]${sifirla}`,
      `${req.method.padEnd(7)} ${req.originalUrl.padEnd(25)}`,
      `${gecenSure}ms`
    );
  });

  next(); // İsteği rotalara aktar
};

module.exports = logger;
```

---

### Adım 3: Kullanıcı Rotaları ve CRUD İşlemleri (`routes/kullanici.js`)

Tüm kullanıcı işlemlerini tek bir router modülü altında topluyoruz. Kod içerisindeki doğrulama (validation) adımlarına ve HTTP durum kodlarına dikkat ediniz:

```javascript
// routes/kullanici.js
const express = require('express');
const router = express.Router();
const kullanicilar = require('../data/kullanicilar');

// 1. TÜM KULLANICILARI LİSTELE (GET /kullanicilar)
router.get('/', (req, res) => {
  res.json({
    basarili: true,
    adet: kullanicilar.length,
    data: kullanicilar
  });
});

// 2. TEK KULLANICI GETİR (GET /kullanicilar/:id)
router.get('/:id', (req, res) => {
  const id = Number(req.params.id); // Parametre string gelir, sayıya çeviriyoruz
  const kullanici = kullanicilar.find(k => k.id === id);

  if (!kullanici) {
    return res.status(404).json({
      basarili: false,
      hata: `${id} ID'li kullanıcı bulunamadı`
    });
  }

  res.json({ basarili: true, data: kullanici });
});

// 3. YENİ KULLANICI OLUŞTUR (POST /kullanicilar)
router.post('/', (req, res) => {
  const { ad, email, yas, sehir } = req.body;

  // Zorunlu alan kontrolü (400 Bad Request)
  if (!ad || !email) {
    return res.status(400).json({
      basarili: false,
      hata: 'Ad ve email alanları zorunludur'
    });
  }

  // E-posta benzersizlik kontrolü (409 Conflict)
  const emailMevcutMu = kullanicilar.some(k => k.email === email);
  if (emailMevcutMu) {
    return res.status(409).json({
      basarili: false,
      hata: 'Bu email adresi zaten sistemde kayıtlı'
    });
  }

  // Yeni kullanıcı nesnesini oluştur
  const yeniKullanici = {
    id: kullanicilar.length > 0 ? Math.max(...kullanicilar.map(k => k.id)) + 1 : 1,
    ad,
    email,
    yas: yas || null,
    sehir: sehir || null
  };

  kullanicilar.push(yeniKullanici);

  // Kayıt başarıyla oluşturuldu (201 Created)
  res.status(201).json({
    basarili: true,
    mesaj: 'Kullanıcı başarıyla oluşturuldu',
    data: yeniKullanici
  });
});

// 4. KULLANICI GÜNCELLE (PUT /kullanicilar/:id)
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = kullanicilar.findIndex(k => k.id === id);

  if (index === -1) {
    return res.status(404).json({
      basarili: false,
      hata: 'Güncellenecek kullanıcı bulunamadı'
    });
  }

  const eskiKayit = kullanicilar[index];
  const guncelleme = req.body;

  // Spread (...) operatörü ile eski verileri koruyup yalnızca gönderilen alanları güncelliyoruz
  kullanicilar[index] = {
    ...eskiKayit,
    ...guncelleme,
    id: eskiKayit.id // Güvenlik için ID'nin değiştirilmesini engelliyoruz
  };

  res.json({
    basarili: true,
    mesaj: 'Kullanıcı bilgileri güncellendi',
    onceki: eskiKayit,
    guncel: kullanicilar[index]
  });
});

// 5. KULLANICI SİL (DELETE /kullanicilar/:id)
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = kullanicilar.findIndex(k => k.id === id);

  if (index === -1) {
    return res.status(404).json({
      basarili: false,
      hata: 'Silinecek kullanıcı bulunamadı'
    });
  }

  // splice() metodu belirtilen indeksten 1 elemanı diziden çıkarır ve silinen elemanı dizi olarak döner
  const silinenKullanici = kullanicilar.splice(index, 1)[0];

  res.json({
    basarili: true,
    mesaj: 'Kullanıcı sistemden silindi',
    silinen: silinenKullanici
  });
});

// BONUS: Tüm kullanıcıları temizle (Geliştirme ortamı kolaylığı için)
router.delete('/', (req, res) => {
  const silinenAdet = kullanicilar.length;
  kullanicilar.splice(0, kullanicilar.length);
  res.json({ basarili: true, mesaj: `${silinenAdet} adet kayıt silindi` });
});

module.exports = router;
```

#### Kullanılan Önemli JavaScript Kavramları

* **`Array.prototype.find()`:** Koşulu sağlayan **ilk** nesneyi döndürür; bulamazsa `undefined` döner.
* **`Array.prototype.findIndex()`:** Koşulu sağlayan ilk elemanın dizi indeksini (`0, 1, 2...`) döndürür; bulamazsa `-1` döner.
* **`Array.prototype.some()`:** Dizide koşulu sağlayan en az bir eleman varsa `true`, yoksa `false` döner.
* **Spread Operatörü (`{ ...eski, ...yeni }`):** İki nesneyi birleştirir. Aynı anahtar isimleri çakışırsa sağdaki (`...yeni`) değer soldakinin üzerine yazılır.
* **`Array.prototype.splice(index, 1)`:** Diziyi yerinde değiştirerek belirtilen `index` konumundan `1` eleman siler.

---

### Adım 4: Ana Uygulama Dosyası (`app.js`)

Tüm parçaları bir araya getirip sunucuyu ayağa kaldıralım:

```javascript
// app.js
const express = require('express');
const logger = require('./middleware/logger');
const kullaniciRouter = require('./routes/kullanici');

const app = express();
const PORT = 3000;

// 1. Genel Middleware'ler (Rotalardan ÖNCE tanımlanmalıdır)
app.use(express.json());
app.use(logger);

// 2. Rotalar
app.use('/kullanicilar', kullaniciRouter);

// 3. 404 Yakalayıcı (Tüm rotalardan SONRA tanımlanmalıdır)
app.use((req, res) => {
  res.status(404).json({
    basarili: false,
    hata: 'İstek yapılan endpoint bulunamadı'
  });
});

// 4. Sunucuyu Başlat
app.listen(PORT, () => {
  console.log(`✅ Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
```

### Uygulamayı Çalıştırma ve Test Kontrol Listesi

Terminali açıp `node --watch app.js` komutunu çalıştırdıktan sonra Postman üzerinden aşağıdaki test senaryolarını sırayla doğrulayın:

- [ ] `GET /kullanicilar` → Başlangıçtaki 3 kullanıcının listelendiğini (`200 OK`) doğrulayın.
- [ ] `POST /kullanicilar` (Eksik alanla) → `ad` veya `email` göndermeden istek atıp `400 Bad Request` hatasını görün.
- [ ] `POST /kullanicilar` (Geçerli veriyle) → Yeni kullanıcı ekleyip `201 Created` yanıtını alın.
- [ ] `POST /kullanicilar` (Aynı email ile) → Tekrar istek atıp `409 Conflict` hatasını görün.
- [ ] `GET /kullanicilar/4` → Yeni eklenen kullanıcının detaylarını getirin.
- [ ] `PUT /kullanicilar/1` → 1 numaralı kullanıcının adını veya yaşını güncelleyin.
- [ ] `DELETE /kullanicilar/2` → 2 numaralı kullanıcıyı silin ve listeden eksildiğini doğrulayın.
- [ ] `GET /kullanicilar/99` → Olmayan bir ID ile istek atıp `404 Not Found` hatasını görün.

---

## 10. Sık Yapılan Hatalar ve Çözüm Rehberi

Geliştirme sürecinde en sık karşılaşılan hatalar ve pratik çözümleri aşağıdadır:

| Hata Mesajı / Sorun | Olası Nedeni | Çözüm Yolu |
| :--- | :--- | :--- |
| `Cannot GET /kullanicilar` | `app.use('/kullanicilar', ...)` satırı eksik veya yanlış yazılmış. | `app.js` içinde rota bağlama satırını ve URL yazımını kontrol edin. |
| `req.body` değeri `undefined` | `express.json()` ara yazılımı eklenmemiş veya rotalardan sonra yazılmış. | `app.use(express.json());` satırını tüm `app.use('/...', router)` satırlarının **üstüne** taşıyın. |
| `Cannot find module './routes/kullanici'` | `require()` içindeki dosya yolu veya dosya adı hatalı. | Klasör yapısını, dosya uzantısını ve büyük/küçük harf duyarlılığını kontrol edin. |
| `Error: listen EADDRINUSE: address already in use :::3000` | 3000 portu başka bir açık terminal veya uygulama tarafından kullanılıyor. | Açık terminallerde `Ctrl + C` ile çalışan sunucuyu durdurun veya `PORT` numarasını `3001` yapın. |
```