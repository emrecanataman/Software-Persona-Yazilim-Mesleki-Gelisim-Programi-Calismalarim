# Yazılım Geliştirme Öğrenme Günlüğü

Yazılım geliştirme eğitimim boyunca tuttuğum gün gün ders notları,
kavram soruları, alıştırmalar ve uygulama örnekleri.

Bu çalışma alanı, eğitim serüvenimin ilerleyişini ve farklı yazılım
geliştirme alanlarındaki uygulamalarımı düzenli biçimde takip etmek için
oluşturulmuştur.

## Eğitim Alanları

- **Backend Geliştirme:** Node.js, HTTP, client-server mimarisi, REST API,
  JSON, request-response ve routing.
- **Web Geliştirme:** HTML, CSS ve JavaScript.
- **Veri Tabanı ve SQL:** Veri tabanı temelleri, SQL sorguları ve veri yönetimi.
- **Mobil Uygulama Geliştirme:** Android ve iOS uygulama geliştirme.

Her eğitim alanındaki çalışmalar, işlendiği günün tarihini taşıyan klasörlerde
toplanacaktır. Böylece öğrenme süreci, konu ve tarih bazında takip edilebilir.

## Mevcut Çalışmalar

- **09.11.2026 Tarihli Eğitim:** HTTP, client-server mimarisi, REST API ve
  JSON notları; request-response ve routing örnekleri.
- **10.11.2026 Tarihli Eğitim:** Node.js temelleri, modüller, dahili
  modüller, `fs` ile dosya işlemleri, JSON kullanımı ve uygulama alıştırmaları.
- **11.11.2026 Tarihli Eğitim:** Express.js, sunucu kurulumu, request-response
  nesneleri, statik dosyalar, `fetch`, routing, middleware, hata yönetimi,
  Postman ile API testi ve RESTful kullanıcı yönetimi API'si.
- **18.11.2026 Tarihli Eğitim:** JavaScript'in web dünyasındaki yeri, modern
  JavaScript, veri türleri, diziler, objeler, JSON, fonksiyonlar, OOP ve hata
  yakalama.
- **24.11.2026 Tarihli Eğitim:** SQL Server ve SSMS, veritabanı kurulumu,
  veri türleri, `CREATE`/`ALTER`/`DROP`, `INSERT`, `SELECT`, filtreleme,
  sıralama, toplama fonksiyonları, `GROUP BY` ve `HAVING`.

## Proje Yapısı

Çalışmalar, eğitim alanı ve hafta bilgisine göre gruplandırılır. Her eğitim
günü kendi klasöründe ders notlarını, kavram sorularını ve alıştırmaları
barındırır.

```text
Backend Geliştirme 1. Hafta/
├── 09.11.2026 Tarihli Eğitim/
├── 10.11.2026 Tarihli Eğitim/
│   └── Alıştırmalar/
└── 11.11.2026 Tarihli Eğitim/
Web Geliştirme (HTML, CSS, JavaScript) (2. Hafta)/
└── 18.11.2026 Tarihli Eğitim/
Veri Tabanı ve SQL 3. Hafta/
└── 24.11.2026 Tarihli Eğitim/
    ├── Ders Notları.md
    └── Alıştırmalar/
        └── Sorular.md
```

### Uygulama Örnekleri

Backend çalışmalarındaki Node.js uygulama örnekleri:

- `Alıştırma 1/server.js`: Basit HTTP sunucusu
- `Alıştırma 2/server.js`: HTTP sunucusu uygulaması
- `Alıştırma 3/server.js`: HTTP sunucusu uygulaması
- `Request-Response Demo/server.js`: Temel request-response örneği
- `Request-Response Demo/server2.js`: Çoklu endpoint ve routing örneği

10.11.2026 tarihli eğitimdeki Node.js alıştırmaları:

- `Alıştırma 1/kartvizit.js`: Nesneler ve kullanıcı bilgilerini biçimlendirme
- `Alıstırma 2/notdefteri.js`: `fs` modülüyle JSON dosyasından not okuma ve
  yeni not ekleme
- `Alıstırma 2/önemlinot.json`: Not defteri uygulamasının JSON verisi
- `Alıştırma 3`: Modüler kütüphane sistemi alıştırması (geliştirme aşamasında)

11.11.2026 tarihli Express.js çalışmaları:

- Express.js ile sunucu ve RESTful route oluşturma
- Statik dosya sunumu ve istemci tarafında `fetch` kullanımı
- `express.Router()` ile modüler routing
- Middleware ve merkezi hata yönetimi
- Postman ile API endpoint'lerini test etme
- CRUD işlemleri içeren kullanıcı yönetimi API'si

24.11.2026 tarihli SQL Server çalışmaları:

- SQL Server ve SSMS kurulumu
- SQL sorgu yapısı ve komut grupları
- DDL ile veritabanı ve tablo oluşturma, değiştirme ve kaldırma
- Metin, sayı, tarih ve mantıksal veri türleri
- `INSERT` ve `SELECT` ile kayıt ekleme ve okuma
- `WHERE`, `IN`, `LIKE`, `ORDER BY` ve `AS`
- Toplama fonksiyonları, `GROUP BY` ve `HAVING`
- Kurs kayıt sistemi üzerine kolay, orta ve zor SQL alıştırmaları

## Gereksinimler

- [Node.js](https://nodejs.org/) 18 veya üzeri
- Git (önerilir)

## Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone <REPOSITORY_URL>
   cd "Software Persona Yazılım Mesleki Gelişim Programı Çalışmalarım"
   ```

2. Bu projede harici bir paket kullanılmadığı için `npm install` gerekmez.

3. Ortam değişkeni kullanmak isterseniz `.env.example` dosyasını inceleyin.
   Gizli değerleri `.env` dosyasında tutun; bu dosya Git tarafından yok sayılır.

## Örnekleri çalıştırma

### Merhaba sunucusu

```powershell
node ".\Backend Geliştirme 1. Hafta\09.11.2026 Tarihli Eğitim\Alıştırmalar\Alıştırma 1\server.js"
```

Tarayıcıdan `http://localhost:3000` adresini açın.

### Request-response örneği

```powershell
node ".\Backend Geliştirme 1. Hafta\09.11.2026 Tarihli Eğitim\Request-Response Demo\server.js"
```

### Çoklu endpoint örneği

```powershell
node ".\Backend Geliştirme 1. Hafta\09.11.2026 Tarihli Eğitim\Request-Response Demo\server2.js"
```

`server2.js` için `/`, `/about` ve `/users` endpoint'lerini deneyebilirsiniz.
Her sunucu varsayılan olarak `3000` portunu kullanır. Farklı bir port için
çalıştırmadan önce `PORT` ortam değişkenini ayarlayın:

```powershell
$env:PORT=3001
node ".\Backend Geliştirme 1. Hafta\09.11.2026 Tarihli Eğitim\Request-Response Demo\server2.js"
```

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
