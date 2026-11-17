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
- **10.11.2026 Tarihli Eğitim:** Node.js temelleri ve ilgili kavram soruları.

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
