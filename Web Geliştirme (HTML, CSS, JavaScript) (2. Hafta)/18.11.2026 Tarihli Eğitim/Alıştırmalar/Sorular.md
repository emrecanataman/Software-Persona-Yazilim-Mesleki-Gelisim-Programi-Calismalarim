# JavaScript Alıştırma Soruları: Mini Alışveriş Sepeti

## Ortak Veri

```javascript
const urunler = [
  { id: 1, ad: "Klavye",    fiyat: 500,  stok: 10 },
  { id: 2, ad: "Fare",      fiyat: 250,  stok: 0 },
  { id: 3, ad: "Kulaklık",  fiyat: 900,  stok: 5 },
  { id: 4, ad: "Monitör",   fiyat: 4200, stok: 3 },
  { id: 5, ad: "Mouse Pad", fiyat: 100,  stok: 25 }
];
```

---

## 🟢 Soru 1 (Kolay): Ürünleri Filtrele

`filter()` ile **stokta olan (`stok > 0`) ve fiyatı 300 TL'den yüksek** ürünleri `uygunUrunler` adlı yeni bir diziye al. Sonra `for...of` içinde destructuring kullanarak şu çıktıyı yazdır:

```
Klavye: 500 TL
Kulaklık: 900 TL
Monitör: 4200 TL
```

`urunler` dizisi değişmemeli.

---

## 🟡 Soru 2 (Orta): `Sepet` Sınıfı

`Sepet` adlı bir sınıf yaz:

- `constructor()` boş bir `kalemler` dizisi oluştursun.
- `ekle(urun, adet)` metodu:
  - `adet > urun.stok` ise ekleme yapmasın ve `false` döndürsün.
  - Aksi halde `{ ...urun, adet }` biçiminde **kopya** bir kalem ekleyip `true` döndürsün. Orijinal ürün objesi değişmemeli.
- `toplamTutar()` metodu, döngüyle `fiyat * adet` toplamını döndürsün.

Soru 1'deki `uygunUrunler` ile test et:

```javascript
const sepet = new Sepet();
sepet.ekle(uygunUrunler[0], 2);   // true  (Klavye x2)
sepet.ekle(uygunUrunler[2], 1);   // true  (Monitör x1)
sepet.ekle(uygunUrunler[1], 10);  // false (Kulaklık stoğu 5)
console.log(sepet.toplamTutar()); // 5200
```

---

## 🔴 Soru 3 (Zor): Kalıtım, JSON ve Güvenli Yükleme

Soru 2'deki `Sepet` sınıfını kullan.

1. `Sepet`'ten `extends` ile türeyen `IndirimliSepet` sınıfını yaz.
   - `constructor(indirimOrani)` içinde `super()` çağır ve oranı sakla (örneğin `0.1`).
   - `toplamTutar()` metodunu ez. `super.toplamTutar()` değerinden indirimi düşerek döndürsün.
2. `IndirimliSepet`'e `jsonaCevir()` metodunu ekle. Metot `{ indirimOrani, kalemler }` objesini `JSON.stringify` ile metne çevirsin.
3. `sepetiYukle(metin)` adlı bir fonksiyon yaz:
   - `JSON.parse` ile metni çözsün ve yeni bir `IndirimliSepet` oluşturup `kalemler`'i içine yüklesin.
   - Geçersiz JSON gelirse programı çökertmeden `console.error` ile hata yazıp `null` döndürsün.
   - `finally` bloğunda `"Yükleme denendi."` yazdırsın.

Test:

```javascript
const sepet2 = new IndirimliSepet(0.1);
sepet2.ekle(uygunUrunler[0], 2);
sepet2.ekle(uygunUrunler[2], 1);

console.log(sepet2.toplamTutar());      // 4680

const metin = sepet2.jsonaCevir();
const yuklenen = sepetiYukle(metin);
console.log(yuklenen.toplamTutar());    // 4680

console.log(sepetiYukle('{"indirimOrani":0.1,')); // hata mesajı + null
```

**Ek soru:** `urunler` dizisindeki orijinal ürünlerin hâlâ değişmemiş olduğunu `console.log` ile göster.

