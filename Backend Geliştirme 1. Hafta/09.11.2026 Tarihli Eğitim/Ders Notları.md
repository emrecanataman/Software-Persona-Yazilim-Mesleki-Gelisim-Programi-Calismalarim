# Node.js İle Backend Programlama

## 1. Kavramsal Zemin

Web'de ilk bakışta frontend tarafı dikkate alınsa da backend tarafı çok daha önemlidir. Burada bir web sitesinin çalışma prensipleri ve güvenliği sağlayan unsurlar yer almaktadır. 

### Web Nedir?
Web, internet üzerinde çalışan ve birbirine bağlı belgeler, uygulamalar ve hizmetler bütünüdür. 

### Web Nasıl Çalışır?
* **İstemci (Client):** Kullanıcının tarayıcısı veya uygulaması. Verileri görüntüler ve kullanıcı ile etkileşime girer.
* **Ağ (Network):** İnternet altyapısı. İstemci ile sunucu arasındaki veri taşıma yolu.
* **Sunucu (Server):** Arka planda çalışan bilgisayar. Verileri işler ve yanıt gönderir.  

### Frontend Nedir?
Kullanıcının gördüğü kısım. 
* **HTML:** Web'in iskeletidir.
* **CSS:** Web'e verdiğimiz görsel tasarım ve stil.
* **JavaScript:** Web'in ileri düzeye geçmesini sağlar. Değerlidir. Web ile etkileşimi ve dinamik davranışı sağlar. Web'de yapılan her şey denilebilir.
* **React, Vue, Angular vb.:** Asıl isimlerinin sonunda `.js` yazar. Sebebi bunların JavaScript tabanlı olmasıdır. Popüler kütüphanelerdir. Kütüphaneler (Framework), yazılım süreçlerinde kullanılan hazır altyapılar, araçlar ve kurallar bütünüdür. Olmasalardı pek bir şey olmazdı ama her şeyi bizim yazmamız gerekirdi. Hata oranımız artardı ve ciddi zaman kaybına uğrardık. 

Frontend tarayıcıda çalışır. Arka yüzde çalışmaz, ön yüzde çalışır. Kullanıcı arayüzü (`UI`) oluşturur. 

### Backend Nedir?
Görünmez kahramandır. Perde arkasında çalışır, yapılan işlemleri göremeyiz. Örneğin kimlik doğrulama (`Authentication`) işlemleri, iş mantığı (`Business Logic`), API işlemleri, ödeme servisleri...

Sunucuda çalışır ve kullanıcılar göremez. 

Bu eğitim sürecinde Node.js kullanacağız. Peki neden Node.js?
1. Yurt dışında yaklaşık %90-95 oranında Node.js kullanılır. Yeni start-uplarda tercih edilir.
2. Hızlıdır, performanslıdır ve sunucu diline daha yakındır.

### Frontend vs. Backend

| Özellik | Frontend | Backend |
| :--- | :--- | :--- |
| **Çalışma Yeri** | Tarayıcıda çalışır | Sunucuda çalışır |
| **Görülebilirlik** | Kullanıcı görür | Kullanıcı göremez |
| **Ana Teknolojiler** | HTML, CSS ve JavaScript | Node.js, Python ve Java |
| **Veri Depolama** | Geçici olarak depolasa da genel olarak veri depolamaz | Veritabanı kullanarak veri depolanır |
| **Güvenlik** | Sınırlı güvenlik sağlanır | Tam kontrol güvenlik sağlanır |
| **Örnek İşler** | Buton rengi ayarlama ve animasyonlar | Şifre doğrulama işlemleri ve ödeme sistemleri |

### Fullstack Geliştirici Nedir?
Frontend - Backend - Veritabanı  
**Fullstack** = Frontend + Backend + Veritabanı

---

## 2. Client-Server Mimarisi

İnternetin temel çalışma prensibi.

### İstemci-Sunucu Nasıl Çalışır?
`Client (İstemci)` (Tarayıcı, mobil uygulama vs.) üzerinden `Request (İstek)` gönderilir, `Server (Sunucu)` (`Node.js`, veritabanı vs.) üzerinden `Response (Yanıt)` gelir. 

> **Örnek:** Tarayıcıda `google.com` yazıyorsun. Bu URL'nin DNS'i çözümleniyor, IP'ye çevriliyor. Tarayıcı Google sunucusuna HTTP isteği yolluyor. Sunucu bu isteği işliyor ve HTML hazırlıyor. Yanıt geliyor, HTML, CSS, JS dosyaları geri gönderiliyor ve tarayıcı sayfayı açıyor.

---

## 3. HTTP (HyperText Transfer Protocol) Protokolü

Tarayıcı ile sunucu arasındaki ortak dil. İstemci ile sunucu arasındaki veri alışverişinin kurallarını belirleyen protokol.

* **Durumsuz (Stateless):** Her istek bağımsızdır. Sunucu önceki isteği hatırlamaz.
* **İstek-Yanıt Modeli:** Her işlem bir `request` ile başlar, bir `response` ile biter.
* **HTTPS:** HTTP'nin şifrelenmiş hali. Veriler güvenle taşınır.
* **Metin Tabanlı:** İnsan tarafından okunabilir mesajlar kullanılır. 

### HTTP Metodları (Fiiller)
* **GET:** Veri oku. *Örnek: Kullanıcı listesini getir.*
* **POST:** Veri Oluştur. *Örnek: Yeni kullanıcı kaydet.*
* **PUT:** Veri Güncelle. *Örnek: Kullanıcı bilgisini değiştir.*
* **DELETE:** Veri Sil. *Örnek: Kullanıcıyı sistemden kaldır.*
* **PATCH:** Kısmi Güncelle. *Örnek: Sadece şifreyi değiştir.*

### HTTP Status Kodları
Sunucu, isteğin sonucunu bu kodlarla bildirir.

* **1xx - Bilgi:** `100 Continue`
* **2xx - Başarı:** `200 OK` - İşlem Tamam | `201 Created` - Oluşturuldu | `204 No Content` - Boş Yanıt
* **3xx - Yönlendirme:** `301 Moved` - Kalıcı taşındı | `302 Found` - Geçici taşındı
* **4xx - İstemci Hatası:** `400 Bad Request` - Hatalı istek | `401 Unauthorized` - Giriş gerekli | `403 Forbidden` - Erişim yok | `404 Not Found` - Bulunamadı
* **5xx - Sunucu Hatası:** `500 Internal Server Error` | `503 Service Unavailable`

### HTTP İstek (Request) Yapısı

```http
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGci...
Content-Type: application/json
Accept: application/json

// --- Body (POST/PUT için) ---
{
    "name": "Ahmet",
    "email": "ahmet@example.com"
}
```

Burada frontend/backend'e kabaca şunu söylüyor: *"Bana kullanıcıları getir. İsteğin formatı ve kimliğimle ilgili bilgiler de burada."*

* **`GET /api/users HTTP/1.1`**: Burada 3 önemli şey var:
  * `GET` → HTTP metodudur. Genellikle veri almak için kullanılır.
  * `/api/users` → Backend'deki hangi adrese/endpoint'e istek yaptığımızı belirtir.
  * `HTTP/1.1` → Kullanılan HTTP protokol sürümüdür.
  *(Örneğin `GET /api/products` "Bana ürünleri getir")*

* **`Host: example.com`**: İsteğin hangi sunucuya gönderildiğini belirtir. *(Örneğin `Host: api.site.com` "Bu isteği api.site.com sunucusuna gönderiyorum.")*

* **`Authorization: Bearer eyJhbGci...`**: Kimlik doğrulama/yetkilendirme amacıyla kullanılır. Örneğin kullanıcı giriş yaptığında backend ona bir token verebilir.  
  Frontend daha sonra: `Authorization: Bearer abc123` gibi bu token'ı gönderir. Backend de: *"Bu token geçerli mi? Bu kullanıcı bu işlemi yapabilir mi?"* diye kontrol eder. `Bearer` burada token'ın `Authorization` header'ında gönderildiğini ifade eden şemadır.

* **`Content-Type: application/json`**: Gönderilen verinin hangi formatta olduğunu söyler. Burada: `application/json` demek: *"Gönderdiğim veri JSON formatında."*

* **`Accept: application/json`**: Bu ise biraz farklı. `Content-Type`: *"Ben ne gönderiyorum?"* `Accept`: *"Ben nasıl bir cevap bekliyorum?"* demektir. Dolayısıyla: `Accept: application/json` şunu söylüyor: *"Backend, bana cevabı JSON formatında gönder."*

### HTTP Yanıt (Response) Yapısı

```http
HTTP/1.1 200 OK
Content-Type: application/json
Date: Mon, 01 Jan 2025 12:00:00 GMT
X-Request-ID: abc123

// --- Response Body ---
{
    "success": true,
    "data": [
        {"id": 1, "name": "Ahmet" },
        {"id": 2, "name": "Mehmet" }
    ],
    "total": 2
}
```

Backend frontend'e cevap gönderiyor. Bunu şöyle düşünebiliriz:

```text
Frontend
   │
   │ HTTP Request
   ▼
Backend
   │
   │ HTTP Response
   ▼
Frontend
```

* **`HTTP/1.1 200 OK`**: `HTTP/1.1`, Kullanılan HTTP sürümü, `200` HTTP status code yani durum kodu. `200`, isteğin başarılı olduğunu belirtir. `OK` Durum kodunun insan tarafından okunabilir açıklamasıdır.
* **`Content-Type: application/json`**: *"Sana gönderdiğim response JSON formatında."*
* **`Date: Mon, 01 Jan 2025 12:00:00 GMT`**: Cevabın oluşturulduğu tarihi belirtir. 
* **`X-Request-ID: abc123`**: İsteği takip etmek için kullanılan özel bir ID olabilir. Örneğin backend'de hata oluştuğunda loglarda: `Request ID: abc123` görülerek hangi istekte sorun yaşandığı bulunabilir.

Bunlar Response Header'larıdır. Backend burada cevapla ilgili metadata yani ek bilgiler gönderir. 

* **`// --- Response Body ---`**

```json
{
    "success": true, // İşlemin başarılı olduğunu belirtiyor.
    "data": [
        {"id": 1, "name": "Ahmet" }, // Kullanıcının benzersiz kimliği.
        {"id": 2, "name": "Mehmet" }
    ],
    "total": 2 // Toplam kayıt sayısıdır. 
}
```

Asıl önemli bölüm burası. Backend'in frontend'e gönderdiği asıl veriler burada. Örneğin frontend bu cevabı aldıktan sonra ekranda Ahmet, Mehmet şeklinde kullanıcıları gösterebilir. 

---

## 4. REST API

Modern web uygulamalarının iletişim standardı.

### REST API Nedir?
* **API:** Application Programming Interface (Uygulama Programlama Arayüzü)
* REST prensiplerine göre tasarlanmış bir API, farklı uygulamaların birbiriyle HTTP üzerinden konuşmasını sağlar. 
* **Stateless (Durumsuzluk):** Her istek kendi içinde tamdır. Sunucu session-token tutmaz.
* **JSON Yanıtlar:** Veri taşımak için standart format kullanılır.
* **Resource Based:** URL'ler kaynakları temsil eder. 
* **Uniform Interface:** Tutarlı URL yapısı ve standart yanıtlar.
* **HTTP Metodları:** GET, POST, PUT, DELETE ile CRUD işlemleri.
* **Client Server:** Frontend ile backend tamamen ayrı çalışır.

### REST API Endpoint (Uç Nokta) Tasarımı
Bir istemcinin (örneğin bir web sitesi veya mobil uygulamanın) sunucudaki bir kaynağa (veriye veya işleme) ulaşmak için istek gönderdiği URL adresi ve HTTP metodu ikilisidir. Daha basit bir deyişle; API'nin dış dünyayla konuştuğu "kapı numarası"dır.

| HTTP Metodu | Endpoint | Açıklama |
| :--- | :--- | :--- |
| **GET** | `/api/users` | Tüm kullanıcıları listele. |
| **GET** | `/api/users/:id` | Belirli bir kullanıcıyı getir. |
| **POST** | `/api/users` | Yeni kullanıcı oluştur (body gerekli). |
| **PUT** | `/api/users/:id` | Kullanıcıyı tamamen güncelle. |
| **PATCH** | `/api/users/:id` | Kullanıcıyı kısmi güncelle. |
| **DELETE** | `/api/users/:id` | Kullanıcıyı sil. |

---

## 5. JSON Yapısı

JavaScript Object Notation - Evrensel veri formatı, her dil okuyabilir, `{"key": "value"}` yapısı.

### JSON Nedir?
JSON (JavaScript Object Notation / JavaScript Nesne Gösterimi), insan tarafından kolayca okunup yazılabilen, makineler tarafından ise hızlıca işlenip ayrıştırılabilen hafif bir veri değişim formatıdır. Adında "JavaScript" geçmesine rağmen JSON, belirli bir programa veya dile bağlı değildir; Python, Java, C#, PHP, Ruby ve Go gibi neredeyse tüm modern programlama dilleriyle birlikte kullanılabilir.

### JSON Örneği

```json
{
    "id": 1,
    "name": "Ahmet Yılmaz",
    "age": 25,
    "isStudent": true,
    "scores": [95, 87, 92], 
    "address": {
        "city": "İstanbul",
        "district": "Beşiktaş"
    },
    "email": null
}
```

* **String:** `"Ahmet Yılmaz"`
* **Number:** `1`, `25`, `95`
* **Boolean:** `true`, `false`
* **Array:** `[95, 87, 92]`
* **Object:** `{"city": "İstanbul"}`
* **Null:** `null`

### JSON Yazım Kuralları 
* Anahtarlar çift tırnakta yazılır: `"name": "Ahmet"`
* Trailing comma yasak: `{ "a": 1, }` *(Hata verir)*
* Tek tırnak kullanılmaz: `'name': 'Ahmet'` *(Hata verir)*
* Boolean küçük harf: `"active": true`
* Sayılar tırnaksız: `"age": 25`
* Yorum satırı yok: `// bu hata verir`

### JSON Metotları
* `JSON.stringify()` $\rightarrow$ JS nesnesini JSON metne çevirir.
* `JSON.parse()` $\rightarrow$ JSON metni JS nesnesine çevirir.

---

## Peki Node.js Tüm Bunları Nasıl Kullanır?

```text
Tarayıcı (Client) ────────> Node.js Sunucu ────────> Tarayıcı (Görüntüle)
                HTTP İsteği                JSON Yanıt
```