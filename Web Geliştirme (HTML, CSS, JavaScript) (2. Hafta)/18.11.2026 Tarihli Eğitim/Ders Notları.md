# JavaScript Ders Notları

> **Ders:** Web Geliştirme (HTML, CSS, JavaScript)  
> **Konu:** JavaScript'e giriş ve temel JavaScript yapıları

## HTML ve CSS Hatırlatması

HTML sayfanın yapısını, CSS ise bu yapının görünümünü ve düzenini oluşturur. JavaScript'i bu yapının etkileşim ve otomasyon katmanı olarak düşünebiliriz. HTML kaba inşaat, CSS iç ve dış tasarım, JavaScript ise elektrik tesisatı ve otomasyon sistemidir.

CSS tarafında Bootstrap veya Tailwind gibi hazır araçlar ihtiyacı karşılamıyorsa özelleştirme yapılabilir. Sass/SCSS gibi ön işlemcilerle stilleri modüllere bölmek; header, body, sipariş ve sipariş detayı gibi bölümlerin stillerini ayrı dosyalarda yönetmek, büyük projelerde bakım kolaylığı sağlar. Aynı modülerlik yaklaşımı JavaScript dosyaları için de geçerlidir.

## JavaScript'in Web Dünyasındaki Yeri

JavaScript, web sayfalarını etkileşimli hâle getirmek için kullanılan bir programlama dilidir. Form gönderme, butona tepki verme, veriyi kontrol etme, DOM'u değiştirme, ses/video oynatma, canlı veri güncelleme ve sunucuyla iletişim kurma gibi işlemler JavaScript ile yapılabilir.

Kullanıcının yaptığı her etkileşim bir olay oluşturur. JavaScript bu olayı dinleyip gerekli kodu çalıştırır. Böylece HTML ve CSS ile hazırlanmış statik sayfa, kullanıcı davranışlarına tepki veren bir uygulamaya dönüşür.

Bir web uygulamasının temel yaşam döngüsü şöyledir:

1. Web sunucusu HTML, CSS ve JavaScript dosyalarından oluşan paketi tarayıcıya gönderir.
2. Tarayıcı dosyaları yükler ve DOM'u oluşturur.
3. JavaScript DOM'u günceller, olayları dinler ve gerekli sunucu isteklerini yapar.
4. Kullanıcı etkileşimleri sonucunda ekran ve uygulama durumu yeniden güncellenir.

## JavaScript Ekosistemi ve Kullanım Alanları

JavaScript'in kullanım alanı tarayıcıyla sınırlı değildir:

- **Frontend:** React, Vue, Angular ve Svelte gibi araçlar arayüzü bileşenlere ayırmayı, durum değişikliklerini yönetmeyi ve büyük uygulamaları daha düzenli geliştirmeyi sağlar.
- **Backend:** Node.js, JavaScript'i tarayıcı dışında çalıştırır. Express.js, Fastify ve NestJS gibi araçlarla API ve web sunucuları oluşturulabilir.
- **Full-stack:** Next.js, Nuxt, SvelteKit ve Remix; frontend ile backend ihtiyaçlarını routing, veri erişimi, derleme ve SSR/SSG gibi özelliklerle bir çatı altında birleştirir.
- **Durum yönetimi:** Redux, Zustand, MobX ve Pinia; farklı bileşenlerin ortak kullandığı verilerin merkezi biçimde yönetilmesine yardımcı olur.
- **Test ve build:** Jest, Mocha, Cypress ve Playwright testlerde; Webpack, Vite, Rollup, esbuild ve Parcel ise geliştirme ve üretim paketlerinin hazırlanmasında kullanılır.
- **Mobil ve masaüstü:** React Native ve Ionic mobil, Electron ve Tauri masaüstü uygulamaları geliştirmeyi mümkün kılar.

Bu kütüphaneler JavaScript'in kendisi değildir; JavaScript'in üzerine kurulmuş araçlardır. Kütüphane seçerken yalnızca popülerliğe değil, projenin ihtiyacına, dokümantasyona, topluluğa, performansa, güvenliğe ve bağımlılıkların sürüm uyumluluğuna bakılmalıdır. Çok sayıda bağımlılık eklemek her zaman daha iyi bir uygulama anlamına gelmez; her bağımlılık bakım ve güncelleme sorumluluğu getirir.

### Frontend

React, Vue, Angular ve Svelte gibi araçlar arayüzü bileşenlere ayırır. React'te state değiştiğinde ilgili görünüm güncellenir; sanal DOM yaklaşımı gerçek DOM'a yalnızca gerekli değişikliklerin uygulanmasına yardımcı olur.

### Backend ve REST API

Node.js tarafında Express.js ile REST API'ler oluşturulabilir. REST yaklaşımında HTTP metotları işlemin türünü ifade eder:

- `GET` veri okur.
- `POST` yeni veri oluşturur.
- `PUT` veya `PATCH` veri günceller.
- `DELETE` veri siler.

İstek içindeki query parametreleri, URL parametreleri ve body/payload sunucuya bilgi taşır. Sunucu bu verileri doğrulamalı, yetkilendirmeyi kontrol etmeli ve işlemin sonucunu uygun HTTP durum koduyla döndürmelidir. Sunucunun HTML'i hazırlayıp göndermesi server-side rendering (SSR), tarayıcının JavaScript ile arayüzü oluşturması client-side rendering yaklaşımıdır.

### Diğer Kullanım Alanları

State management, test ve build araçları yalnızca büyük framework'lerde değil, gerektiğinde sade JavaScript projelerinde de kullanılabilir. Örneğin bir uygulamanın kayıtlarını tek bir JavaScript modülünde tutup güncellemek mümkündür. Ancak üretim ortamında verinin nerede saklanacağı, birden fazla kullanıcının aynı veriye erişimi ve yetkilendirme gibi konular ayrıca sunucu tarafında tasarlanmalıdır.

## Programlama Dilleriyle İlgili Perspektif

Programlama dili, bilgisayara hangi işlemleri hangi kurallarla yapacağını anlatma aracıdır. Python veri bilimi, yapay zekâ, makine öğrenmesi ve otomasyon alanlarında; C ve C++ işletim sistemi, oyun motoru ve gömülü sistemlerde; Go Docker/Kubernetes ve yüksek performanslı servislerde; PHP WordPress, Laravel ve Drupal gibi sistemlerde; Java kurumsal ve banka sistemlerinde; C# ise Unity oyun geliştirmede sık kullanılır.

Bu eşleştirmeler kesin sınırlar değildir. Bir problem birden fazla dille çözülebilir. Önemli olan yalnızca bir dilin sözdizimini bilmek değil, doğru mimariyi, kütüphaneyi, veri akışını ve çalışma ortamını seçebilmektir. JavaScript bilgisi de bu nedenle yalnızca tarayıcıda birkaç komut yazmaktan ibaret değildir; istemci, sunucu, ağ, veri ve kullanıcı etkileşiminin birlikte düşünülmesini gerektirir.

## ECMAScript Standardı ve Modern JavaScript

JavaScript'in farklı ortamlarda tutarlı çalışabilmesi için ortak bir standarda ihtiyaç duyuldu. ECMAScript, JavaScript'in temel kurallarını tanımlayan standarttır. Tarayıcılar ve Node.js bu standardı uygulayarak aynı dilin farklı çalışma ortamlarını sunar. JavaScript ise bu standardın pratikteki uygulamalarından biri olarak düşünülebilir.

ES5 (2009) döneminde `var`, fonksiyon tabanlı yapı ve callback ağırlıklı asenkron kod yaygındı. Callback zincirleri, bir işlemin sonucunu başka bir fonksiyona aktararak ilerlediği için kodun iç içe ve zor takip edilir hâle gelmesine yol açabiliyordu.

ES6 (2015) ile JavaScript büyük projeler için daha elverişli özellikler kazandı:

- `let` ve `const` ile daha kontrollü değişken kapsamı,
- arrow function ile kısa fonksiyon yazımı,
- template literal ile değişken içeren metinler,
- destructuring ile dizi ve nesnelerden değer ayırma,
- spread/rest ile veri birleştirme ve kalan değerleri toplama,
- `import`/`export` ile modüler dosya yapısı,
- `class` sözdizimi,
- daha sonraki sürümlerde `async/await`, optional chaining (`?.`), `Object.entries` ve `Object.values`.

Template literal örneği:

```javascript
const name = "Onur";
const message = `Merhaba ${name}`;
```

Modül sistemi sayesinde HTTP isteği yapan yardımcı fonksiyon, veritabanı bağlantısı veya belirli bir iş kuralı ayrı dosyalarda tutulabilir. `export` ile dışarı açılan değerler `import` ile başka bir dosyada kullanılabilir. Bu yaklaşım, HTML/CSS tarafında modüler dosyalar kullanma fikrinin JavaScript karşılığıdır.

## JavaScript'in Sayfaya Eklenmesi

JavaScript; inline, internal veya external olarak tanımlanabilir. Inline kullanım HTML elemanının üzerinde hızlı örnekler için kullanılabilir, fakat kod büyüdükçe HTML ile davranışın birbirine karışmasına neden olur. Internal kullanımda `<script>` etiketi içinde kod yazılır. External kullanımda ise JavaScript ayrı bir dosyada tutulur ve tekrar kullanılabilirlik ile bakım kolaylaşır.

Script'in DOM elemanları oluşturulmadan çalışması, `querySelector` gibi işlemlerde `null` sonucu alınmasına neden olabilir. Bu nedenle script'i uygun yerde çalıştırmak, `defer` kullanmak veya `DOMContentLoaded` olayını beklemek gerekir. Parantezler ve fonksiyon çağrıları kodun çalışmasını tetiklediği için JavaScript'te söz dizimi kadar yürütme zamanını da anlamak önemlidir.

## Veri Türleri ve Değişkenler

JavaScript dinamik türlenen bir dildir. `string` metinleri, `number` sayıları, `boolean` mantıksal değerleri, `bigint` çok büyük tam sayıları, `undefined` atanmamış değeri, `null` bilinçli boşluğu, `symbol` benzersiz tanımlayıcıları ve `object` karmaşık veri yapılarını ifade eder. Dizi de teknik olarak özel bir object türüdür.

| Veri türü | Açıklama | Örnek |
| --- | --- | --- |
| `string` | Metin verisi | `const ad = "Onur";` |
| `number` | Tam veya ondalıklı sayı | `const yas = 25;` |
| `bigint` | Çok büyük tam sayı | `const sayi = 9007199254740991n;` |
| `boolean` | Mantıksal değer | `const aktif = true;` |
| `undefined` | Değer atanmamış durum | `let x;` |
| `null` | Bilinçli olarak boş değer | `const veri = null;` |
| `symbol` | Benzersiz tanımlayıcı | `Symbol("id")` |
| `object` | Karmaşık veri yapısı | `{ ad: "Onur" }` |

`undefined` ile `null` ayrımı önemlidir. Bir değişkene hiç değer verilmemişse `undefined`, bir değerin bilerek temizlendiği veya bulunmadığı ifade edilmek isteniyorsa `null` kullanılabilir.

Değişkenlerin temel özellikleri:

| Tanım | Kapsam | Yeniden tanımlama | Yeniden atama | Not |
| --- | --- | --- | --- | --- |
| `var` | Fonksiyon | Evet | Evet | Hoisting davranışı nedeniyle dikkatli kullanılmalıdır. |
| `let` | Blok | Hayır | Evet | Değeri değişebilen değişkenler için kullanılır. |
| `const` | Blok | Hayır | Hayır | Yeniden atama yapılamaz; nesnenin içi otomatik olarak donmaz. |

Modern JavaScript'te varsayılan olarak `const`, yeniden atanması gereken değerlerde `let` tercih edilir. `var` fonksiyon kapsamlıdır; yeniden tanımlama ve hoisting davranışları kodun beklenmedik biçimde çalışmasına yol açabileceği için yeni kodlarda dikkatli kullanılmalıdır. `const` bir değişkenin yeniden atanmasını engeller, fakat nesnenin iç özelliklerini otomatik olarak dondurmaz:

```javascript
const user = { name: "Onur" };
user.name = "Ayşe"; // Nesnenin iç özelliği değişebilir.
```

## Tür Dönüşümü ve Güvenli Karşılaştırma

JavaScript gerektiğinde türleri otomatik olarak dönüştürür. Örneğin `true + 1` ifadesinde `true`, sayısal bağlamda `1` kabul edilir ve sonuç `2` olur. Bu örtük dönüşümler kısa görünse de kodun sonucunu tahmin etmeyi zorlaştırabilir.

```javascript
Number("5");  // 5
String(10);   // "10"
Boolean(1);   // true
```

Bu nedenle özellikle kullanıcı girdilerinde dönüşümü açıkça yapmak ve doğrulamak gerekir. Karşılaştırmalarda `===` kullanmak da tür dönüşümünden kaynaklanan sürprizleri azaltır:

```javascript
5 == "5";   // true: tür dönüşümü yapılır.
5 === "5";  // false: türler farklıdır.
```

İstemci tarafındaki filtreleme veya doğrulama güvenlik önlemi olarak kabul edilmemelidir. Kullanıcı geliştirici araçlarını veya doğrudan HTTP isteğini kullanarak bu kontrolleri aşabilir. Asıl doğrulama, yetkilendirme ve veri temizleme backend tarafında yapılmalıdır. Loglama ve izleme de hatalı, beklenmeyen veya şüpheli isteklerin incelenebilmesi için önemlidir.

## Encode, Decode ve JSON İletişimi

Encoding, veriyi başka bir sisteme aktarılabilecek biçime dönüştürür; encryption değildir. URL encoding boşlukları, Türkçe karakterleri ve özel sembolleri URL içinde taşınabilir hâle getirir. Base64 ise binary veriyi metin olarak iletmek için kullanılabilir. Her iki işlem de veriyi gizlemez; uygun bir anahtar ve şifreleme algoritması olmadan güvenlik sağlamaz.

JSON, sistemler arasında veri taşımada kullanılan metin tabanlı ve dil bağımsız formattır. JavaScript nesnesini göndermeden önce `JSON.stringify`, gelen JSON metnini kullanmadan önce `JSON.parse` kullanılır:

```javascript
const user = { name: "Onur", age: 30 };
const encodedUser = JSON.stringify(user);
const decodedUser = JSON.parse(encodedUser);
```

JSON; frontend-backend iletişiminde, REST API'lerde ve NoSQL belge tabanlı veritabanlarında sık kullanılır. Dışarıdan gelen JSON parse edilirken veri geçersiz olabilir; bu işlem `try...catch` ile kontrollü biçimde ele alınmalıdır.

## Scope, İşlemler ve Koşullar

Scope, bir değişkenin nereden erişilebileceğini belirler. `let` ve `const` blok kapsamlıdır; süslü parantezler içindeki blokla sınırlıdır. `var` fonksiyon kapsamlıdır. Kapsamı mümkün olduğunca dar tutmak, değişkenlerin yanlışlıkla değiştirilmesini ve isim çakışmalarını azaltır.

`+`, `-`, `*`, `/`, `%`, `**`, `++` ve `--` temel aritmetik operatörlerdir. `+` hem toplama hem de metin birleştirme yapabildiği için operandların türleri kontrol edilmelidir. İşlem önceliği karmaşık olduğunda parantez kullanmak daha anlaşılır kod üretir.

Az sayıda koşul için `if/else`, aynı ifadenin birçok sabit değerle karşılaştırılması için `switch/case` kullanılabilir. `switch` yapısında `break` unutulursa kod sonraki `case` bloklarına da devam edebilir. Hiçbir durum eşleşmediğinde çalışacak `default` bloğu tanımlamak güvenli bir varsayılan davranış sağlar.

## 8. Diziler: Filtreleme ve Diğer Metotlar

### `filter()`

`filter()` bir dizinin elemanlarını verilen koşula göre süzer ve koşulu sağlayan elemanlardan **yeni bir dizi** oluşturur. Özgün dizi değiştirilmez.

```javascript
const sayilar = [5, 12, 8, 130, 44];
const filtered = sayilar.filter(number => number > 10);

console.log(filtered); // [12, 130, 44]
```

Nesne dizilerinde filtreleme, nesnenin belirli bir özelliğine göre yapılabilir:

```javascript
const kullanicilar = [
  { id: 1, name: "Onur", age: 30 },
  { id: 2, name: "Ahmet", age: 17 },
  { id: 3, name: "Ayşe", age: 22 }
];

const yetiskinler = kullanicilar.filter(user => user.age >= 18);

console.log(yetiskinler);
// [
//   { id: 1, name: "Onur", age: 30 },
//   { id: 3, name: "Ayşe", age: 22 }
// ]
```

İstemci tarafında filtreleme yalnızca ekranda gösterilecek veriyi düzenlemek için kullanılmalıdır. Yetki, fiyat, stok veya erişim gibi güvenlik ve iş kurallarının backend tarafında da uygulanması gerekir.

### Diğer Dizi Metotları

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitString = fruits.join(", ");
console.log(fruitString); // "Banana, Orange, Apple, Mango"

const selectedFruits = fruits.slice(1, 3);
console.log(selectedFruits); // ["Orange", "Apple"]

console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"
```

- `concat()` dizileri birleştirir.
- `join(separator)` dizi elemanlarını ayraç kullanarak bir metne dönüştürür.
- `slice(start, end)` başlangıç indeksini dahil eder, bitiş indeksini dahil etmez ve yeni dizi döndürür.
- `toString()` diziyi varsayılan virgül ayıracıyla metne dönüştürür.

## 9. Destructuring

Destructuring, dizi veya nesne içindeki değerleri ayrı değişkenlere ayırmanın kısa yoludur.

### Dizi Destructuring

Dizi elemanları sıralarına göre değişkenlere atanır. Gereksiz elemanlar boş virgülle atlanabilir; kalan elemanlar rest (`...`) ile alınabilir.

```javascript
const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue

const numbers = [10, 20, 30, 40];
const [firstNumber, , ...remaining] = numbers;

console.log(firstNumber); // 10
console.log(remaining);   // [30, 40]
```

### Nesne Destructuring

Nesne özellikleri isimleri üzerinden alınır. Özelliğe farklı bir değişken adı verilebilir veya varsayılan değer tanımlanabilir.

```javascript
const user = { name: "Ayşe", age: 25 };
const { name, age } = user;

console.log(name); // Ayşe
console.log(age);  // 25

const product = { name: "Laptop" };
const { name: productName, price = 0 } = product;

console.log(productName); // Laptop
console.log(price);       // 0
```

## 10. Çok Boyutlu Diziler

Bir dizinin elemanları da dizi olduğunda çok boyutlu dizi oluşur. Bu yapı; tablo, matris, oyun tahtası veya koordinat verisi gibi durumlarda kullanılabilir. İç içe dizilerde önce dış dizinin, sonra iç dizinin indeksi yazılır.

```javascript
const matris = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

console.log(matris[0][0]); // 1
console.log(matris[1][2]); // 7
console.log(matris[2][3]); // 12
```

## 11. Döngüler

Döngüler, bir kod bloğunu bir koşul sağlandığı sürece veya bir koleksiyonun elemanları üzerinde tekrar tekrar çalıştırır.

```javascript
// Tekrar sayısı biliniyorsa for kullanılabilir.
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Koşul doğru olduğu sürece çalışır.
let sayac = 0;
while (sayac < 3) {
  console.log(sayac);
  sayac++;
}

// Koşul en sonda kontrol edilir; en az bir kez çalışır.
let sayi = 0;
do {
  console.log(sayi);
  sayi++;
} while (sayi < 2);

// Dizinin elemanları üzerinde gezinir.
const meyveler = ["elma", "armut", "muz"];
for (const meyve of meyveler) {
  console.log(meyve);
}
```

`break` döngüyü tamamen bitirir; `continue` mevcut iterasyonun kalanını atlayıp sonraki iterasyona geçer. Sonsuz döngü oluşmaması için döngü koşulunun bir noktada `false` olacağı garanti edilmelidir.

```javascript
let text = "";

for (let i = 0; i < 5; i++) {
  text += `The number is ${i}<br>`;
}
```

Bir döngünün içinde başka bir döngü kullanılması, veri miktarı arttığında çalışma maliyetini yükseltebilir. Bu nedenle yalnızca doğru sonucu üretmek değil, algoritmanın zaman ve bellek maliyetini de düşünmek gerekir.

## 12. Objeler

Object literal, anahtar-değer çiftlerinden oluşan veri yapısıdır:

```javascript
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
```

Özelliklere nokta veya köşeli parantez notasyonuyla erişilebilir:

```javascript
car.type;
car["model"];
```

Köşeli parantez notasyonu, okunacak özellik adı bir değişkende tutulduğunda kullanışlıdır:

```javascript
const propertyName = "color";
console.log(car[propertyName]); // white
```

Bir obje kendi metotlarını da içerebilir. Metot içinde `this`, çağrıldığı objeyi ifade eder:

```javascript
const user = {
  name: "Onur",
  references: ["JavaScript"],
  getReferences() {
    return this.references;
  }
};

console.log(user.getReferences());
```

`Object.keys()` anahtarları, `Object.values()` değerleri, `Object.entries()` ise anahtar-değer çiftlerini döndürür:

```javascript
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
```

### Immutability ve Deep Clone

Bir obje başka bir değişkene doğrudan atandığında çoğunlukla referansı kopyalanır:

```javascript
const user1 = { name: "Onur" };
const user2 = user1;

user2.name = "Ayşe";
console.log(user1.name); // Ayşe
```

Özgün veriyi değiştirmeden yeni obje oluşturmak için spread kullanılabilir:

```javascript
const updatedUser = { ...user1, name: "Mehmet" };
```

İç içe nesnelerde daha derin bir kopya gerektiğinde `structuredClone()` kullanılabilir. `JSON.stringify()` ve `JSON.parse()` basit veri yapılarında işe yarasa da fonksiyon, `undefined`, `Date`, `Map` gibi değerleri tam olarak korumaz. Immutability, özellikle React gibi state değişikliğini referans üzerinden takip eden yapılarda önemlidir.

## 13. JSON Notasyonu

JSON (JavaScript Object Notation), verileri saklamak ve sistemler arasında taşımak için kullanılan hafif, metin tabanlı ve dil bağımsız bir formattır. Veriler anahtar-değer yapısıyla tutulur:

```json
{
  "name": "Onur",
  "age": 30,
  "isDeveloper": true,
  "skills": ["JavaScript", "Node.js", "React"],
  "address": {
    "city": "İstanbul",
    "country": "Türkiye"
  }
}
```

JSON; REST API iletişiminde, frontend-backend veri aktarımında ve belge tabanlı NoSQL veritabanlarında sık kullanılır. JavaScript nesnesini metne çevirmek için `JSON.stringify()`, metni nesneye çevirmek için `JSON.parse()` kullanılır.

## 14. Fonksiyonlar

Fonksiyonlar belirli bir görevi yerine getiren, tekrar kullanılabilir kod bloklarıdır. Parametreler fonksiyon tanımında beklenen girdiler, argument'ler ise fonksiyon çağrılırken gönderilen gerçek değerlerdir.

```javascript
function merhaba() {
  console.log("Merhaba, dünya!");
}

merhaba();

function toplam(a, b) {
  return a + b;
}

console.log(toplam(3, 5)); // 8
```

`return` fonksiyonun çalışmasını sonlandırır ve isteğe bağlı olarak bir değer döndürür. Fonksiyonlar; DOM olayları, form işlemleri, veri dönüşümleri ve tekrar eden iş kuralları için kod tekrarını azaltır.

### `arguments` Nesnesi

Geleneksel fonksiyonlarda `arguments`, çağrı sırasında gönderilen değerleri tutan dizi benzeri bir nesnedir:

```javascript
function topla() {
  let sum = 0;

  for (const argument of arguments) {
    sum += argument;
  }

  return sum;
}

console.log(topla(4, 6, 10)); // 20
```

Modern JavaScript'te değişken sayıda argüman için rest parametresi daha anlaşılırdır:

```javascript
function total(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
```

### Özyineleme (Recursion)

Özyineleme, bir fonksiyonun kendisini tekrar çağırmasıdır. Her recursive fonksiyonda çağrıları durduracak bir temel durum (base case) bulunmalıdır:

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

Recursion; ağaç, grafik, klasör yapısı ve böl-parçala-yönet türü algoritmalarda kullanılabilir. Base case tanımlanmazsa çağrılar sonsuza kadar sürebilir.

## 15. Sık Kullanılan Hazır Metotlar

```javascript
eval("2 + 3");             // 5; güvenilmeyen veriyle kullanılmamalıdır.
isNaN("abc");              // true
parseInt("10px", 10);      // 10
parseFloat("10.5px");      // 10.5
String(true);              // "true"
Number("42");              // 42
Number.isNaN("abc");       // false
```

`parseInt()` tam sayı, `parseFloat()` ondalıklı sayı elde etmek için kullanılır. `isNaN()` değeri sayıya dönüştürerek kontrol edebilir; `Number.isNaN()` yalnızca değer doğrudan `NaN` ise `true` döndürür. `eval()` metni JavaScript kodu olarak çalıştırdığı için kullanıcı girdisiyle kullanılması ciddi güvenlik riski oluşturur ve genellikle kaçınılmalıdır.

## 16. Nesne Yönelimli Programlama (OOP)

JavaScript, prototip tabanlı bir dil olmasına rağmen `class` sözdizimiyle nesne yönelimli programlama yaklaşımını destekler. OOP'de ilişkili veriler ve bu veriler üzerinde çalışan davranışlar bir arada modellenir. Sınıf bir şablon, nesne ise bu şablondan üretilen örnektir.

### Sınıf, Nesne ve Yapıcı Metot

```javascript
class Araba {
  constructor(marka, renk) {
    this.marka = marka;
    this.renk = renk;
  }

  calistir() {
    return `${this.marka} çalıştırıldı.`;
  }
}

const araba1 = new Araba("Toyota", "Kırmızı");
const araba2 = new Araba("Ford", "Mavi");

console.log(araba1.marka);      // Toyota
console.log(araba2.calistir()); // Ford çalıştırıldı.
```

`constructor()` yeni nesne oluşturulurken otomatik çalışır. `marka` ve `renk` özellik, `calistir()` ise metottur. `this`, üzerinde işlem yapılan nesnenin kendisini ifade eder.

### Kalıtım

Bir sınıfın başka bir sınıfın özellik ve metotlarını devralmasına kalıtım denir. `extends` üst sınıftan kalıtım almak, `super()` ise üst sınıfın constructor'ını çağırmak için kullanılır:

```javascript
class ElektrikliAraba extends Araba {
  constructor(marka, renk, batarya) {
    super(marka, renk);
    this.batarya = batarya;
  }
}

const tesla = new ElektrikliAraba("Tesla", "Beyaz", 100);
console.log(tesla.calistir()); // Tesla çalıştırıldı.
```

OOP büyük ve modüler sistemlerde yararlı olabilir; küçük bir problem için gereksiz sınıf ve kalıtım katmanları eklemek kodu zorlaştırabilir. Yaklaşım, projenin büyüklüğüne ve bakım ihtiyacına göre seçilmelidir.

## 17. Hata Yakalama ve Hata İzleme

Beklenmeyen durumları kontrollü biçimde yönetmek için `try...catch` kullanılır. `finally` bloğu hata oluşsa da oluşmasa da çalıştırılması gereken temizlik işlemleri için tercih edilir:

```javascript
try {
  const data = JSON.parse(input);
  console.log(data);
} catch (error) {
  console.error("Geçersiz JSON:", error);
} finally {
  console.log("İşlem tamamlandı.");
}
```

Hata yakalama; JSON parse, ağ isteği, DOM işlemi ve dış sistemlerle iletişim gibi kırılgan noktalarda kullanılabilir. Hata izleme ise hatanın türünü, oluştuğu yeri, zamanını ve mümkünse stack bilgisini kaydetme sürecidir. Geliştirme sırasında developer tools, breakpoint ve `console` kullanılabilir; üretimde ise seviyeli loglama ve merkezi izleme sistemleri tercih edilir. Hassas kullanıcı verileri loglara yazılmamalıdır.
