# SQL Server Alıştırmaları: Kurs Kayıt Sistemi

İkinci soruda ilk soruda oluşturulan tabloyu geliştirecek, üçüncü soruda tüm kayıtlar kullanılarak rapor hazırlanacak.

Her soru için SQL komutlarınızı ayrı bir sorgu dosyasında saklayın. Sonraki soruya geçerken veritabanını veya tabloyu silmeyin. Kayıt ekleme komutlarını yalnızca bir kez çalıştırın; aksi hâlde rapor sonuçları değişir.

## 1. Soru — Kolay: Tablo oluşturma ve ilk kayıtlar

Bir yazılım kursuna kayıt olan öğrencilerin bilgilerini saklayacaksınız.

1. `KursDB` adlı veritabanını oluşturun ve üzerinde çalışılacak veritabanı olarak seçin.
2. Aşağıdaki yapıya sahip `Ogrenciler` tablosunu oluşturun.

| Sütun | Veri tipi | Kural |
| --- | --- | --- |
| `OgrenciID` | `INT` | 1'den başlayıp birer artan `IDENTITY`, birincil anahtar |
| `Ad` | `NVARCHAR(50)` | Boş bırakılamaz |
| `Yas` | `INT` | Boş bırakılamaz |
| `Sehir` | `NVARCHAR(50)` | Boş bırakılamaz |
| `KayitTarihi` | `DATE` | Boş bırakılamaz |
| `Puan` | `DECIMAL(5, 2)` | Boş bırakılabilir |

3. Aşağıdaki dört kaydı ekleyin. `OgrenciID` değerlerini elle vermeyin; Türkçe metin sabitlerinde `N` ön ekini kullanın.

| Ad | Yas | Sehir | KayitTarihi | Puan |
| --- | --- | --- | --- | --- |
| Ayşe Yılmaz | 22 | Ankara | 2026-11-01 | 80.00 |
| Mehmet Kaya | 25 | İstanbul | 2026-11-02 | 70.00 |
| Elif Demir | 22 | Ankara | 2026-11-03 | 90.00 |
| Ömer Çelik | 28 | İzmir | 2026-10-20 | `NULL` |

4. Tüm kayıtları ve sütunları listeleyin.
5. Yalnızca `Ad` ve `Yas` sütunlarını seçerek yaşı 25 veya daha büyük olan öğrencileri listeleyin. Sonuçları yaşa göre küçükten büyüğe sıralayın.

**Kendi kontrolünüz:** Tabloda dört kayıt bulunmalı; son sorgu Mehmet Kaya ve Ömer Çelik'i bu sırayla göstermelidir.

## 2. Soru — Orta: Tabloyu geliştirme ve koşullu sorgulama

Kurs yönetimi öğrencilerin e-posta adreslerini de saklamak ve yeni kayıtlar eklemek istiyor. Birinci sorudaki tablo üzerinden devam edin.

1. `ALTER TABLE` kullanarak tabloya `NVARCHAR(100)` türünde, boş bırakılabilen `Email` sütununu ekleyin. İlk dört öğrencinin bu sütunundaki değerleri değiştirmeyin.
2. `Yas` değerinin 18 veya daha büyük olmasını sağlayan, `CK_Ogrenciler_Yas` adlı bir `CHECK` kısıtı ekleyin.
3. Aşağıdaki kayıtları sütun adlarını açıkça belirterek tek bir `INSERT` komutuyla ekleyin.

| Ad | Yas | Sehir | KayitTarihi | Puan | Email |
| --- | --- | --- | --- | --- | --- |
| Ali Yıldız | 24 | Ankara | 2026-11-04 | 70.00 | ali@example.com |
| Zeynep Ak | 26 | İstanbul | 2026-11-05 | 90.00 | zeynep@example.com |
| Deniz Eren | 23 | İstanbul | 2026-11-06 | `NULL` | `NULL` |
| Ece Aydın | 21 | İzmir | 2026-11-07 | 95.00 | ece@example.com |
| Can Koç | 30 | Ankara | 2026-10-15 | 100.00 | can@example.com |
| Aslı Şen | 24 | Bursa | 2026-11-08 | 85.00 | `NULL` |

4. Aşağıdaki isteklerin her biri için ayrı bir sorgu yazın:
   - Ankara veya İstanbul'da yaşayan, yaşı 22 ile 26 arasında olan öğrencilerin adını, yaşını ve şehrini listeleyin. Şehir seçiminde `IN`, yaş aralığında `BETWEEN` kullanın. Önce yaşa göre azalan, eşit yaşlarda ada göre artan sıralama yapın.
   - E-posta adresi bulunmayan öğrencilerin adını ve şehrini listeleyin.
   - Adı A harfiyle başlayan öğrencilerin adını ve şehrini listeleyin.
5. İlk dört öğrencinin `Email` değerlerinin neden `NULL` olduğunu ve bunları ararken neden `= NULL` kullanılamayacağını kendi cümlelerinizle açıklayın.

**Kendi kontrolünüz:** Tabloda toplam 10 kayıt bulunmalıdır. Dördüncü adımdaki sorgular sırasıyla 6, 6 ve 3 kayıt döndürmelidir. Yaşı 17 olan bir kayıt eklenmeye çalışıldığında hangi kuralın işlemi engelleyeceğini açıklayın; bu kaydı eklemeniz gerekmiyor.

## 3. Soru — Zor: Şehirlere göre kurs başarı raporu

Kurs yönetimi, kasım ayından itibaren kayıt olan öğrencileri şehir bazında değerlendirmek istiyor. Önceki iki soruda oluşturduğunuz 10 kaydı kullanın; verileri değiştirmeyin.

1. Aşağıdaki koşulları birlikte karşılayan **tek bir rapor sorgusu** yazın:
   - Yalnızca kayıt tarihi `2026-11-01` veya sonrası olan öğrencileri hesaplamaya alın.
   - Öğrencileri şehirlerine göre gruplayın.
   - Her şehir için aşağıdaki sütunları üretin ve belirtilen takma adları kullanın.

| Rapor sütunu | Takma ad |
| --- | --- |
| Şehir | `Sehir` |
| Öğrenci sayısı | `OgrenciSayisi` |
| Puanı girilmiş öğrenci sayısı | `PuaniGirilenOgrenciSayisi` |
| E-posta adresi bulunan öğrenci sayısı | `EmailiOlanOgrenciSayisi` |
| Puanların toplamı | `ToplamPuan` |
| Puanların ortalaması | `OrtalamaPuan` |
| En düşük puan | `EnDusukPuan` |
| En yüksek puan | `EnYuksekPuan` |

2. Rapor sorgusunda yalnızca **en az üç öğrencisi bulunan ve puan ortalaması en az 80 olan** şehirleri gösterin. Sonuçları ortalama puana göre azalan; ortalamalar eşitse şehir adına göre artan sıralayın.
3. Sorguyu çalıştırmadan önce hangi şehirlerin sonuçta bulunacağını ve bu şehirler için tüm rapor değerlerini elle hesaplayın. Ardından sorgu çıktısıyla karşılaştırın.
4. Aşağıdaki noktaları kendi sorgunuz üzerinden açıklayın:
   - Kayıt tarihi koşulu neden `WHERE`, öğrenci sayısı ve ortalama koşulları neden `HAVING` içinde yer almalıdır?
   - `COUNT(*)` ile `COUNT(Puan)` İstanbul için neden farklı sonuç verir?
   - İstanbul'un puan ortalaması hesaplanırken toplam puan kaç öğrenciye bölünür? `NULL` puanı sıfır saymak sonucu nasıl değiştirirdi?
   - Can Koç'un 100 puanı, Ankara'nın bu rapordaki toplamını ve ortalamasını neden etkilemez?

**Kendi kontrolünüz:** Raporda iki şehir bulunmalıdır. Sonuçta öğrenci sayısı ile puanı girilmiş öğrenci sayısının farklı olduğu bir şehir yer almalıdır. Raporu ders notlarındaki `WHERE`, toplama fonksiyonları, `GROUP BY`, `HAVING`, `AS` ve `ORDER BY` konularını birlikte kullanarak çözebilirsiniz.
