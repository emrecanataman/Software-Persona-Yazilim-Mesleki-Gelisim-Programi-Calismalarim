# SQL Server ve SSMS ile Veri Tabanı Yönetimi

## Hatırlatma

### Veri ve bilgi

- **Veri**, tek başına her zaman anlam ifade etmeyen ham değer veya gözlemdir. Örneğin `85`, bir sınav puanı, ürün adedi ya da sıcaklık ölçümü olabilir; bağlam olmadan neyi anlattığı belli değildir.
- **Bilgi**, verilerin bağlam içinde düzenlenmesi, işlenmesi ve yorumlanmasıyla elde edilir. Örneğin “Sınıftaki öğrencilerin sınav puanı ortalaması 85’tir” ifadesi, verileri anlamlı bir sonuca dönüştürür.
- **Amaç**, yalnızca veri biriktirmek değil; doğru veriyi düzenli biçimde saklayıp gerektiğinde erişerek yararlı bilgi üretebilmektir. Verinin anlamı, hangi konuya ait olduğuna ve nasıl yorumlandığına bağlıdır.

### Veritabanı nedir?

**Veritabanı**, birbiriyle ilişkili verilerin belirli bir düzen içinde saklandığı yapıdır. Örneğin bir okul veritabanında öğrenciler, dersler ve kayıtlar hakkındaki bilgiler bulunabilir. Veriler gelişigüzel dosyalarda tutulmak yerine, tanımlı bir yapıya göre düzenlenir.

İlişkisel veritabanlarında veriler çoğunlukla **tablolar** içinde saklanır. Tablolar satır ve sütunlardan oluşur: her satır bir kaydı (örneğin bir öğrenciyi), her sütun ise o kaydın bir özelliğini (örneğin adını veya numarasını) temsil eder. Tablolar arasındaki ilişkiler, ortak alanlar üzerinden bağlantı kurmayı sağlar.

Veritabanı kullanmanın başlıca yararları şunlardır:

- Verilere ihtiyaç duyulduğunda düzenli ve hızlı erişmek.
- Aynı bilginin gereksiz yere tekrar edilmesini ve tutarsızlık oluşmasını azaltmak.
- Verilere erişimi yetkilendirmek ve değişiklikleri kontrollü biçimde yönetmek.
- Verileri yedekleyerek arıza veya hatalı işlem durumlarında geri kazanmayı kolaylaştırmak.

Veritabanını saklama ve yönetme işini yapan yazılıma **veritabanı yönetim sistemi (VTYS/DBMS)** denir. SQL Server bu tür bir sistemdir; veritabanı ise SQL Server içinde oluşturup yönettiğimiz veri yapısıdır.

### SQL neye yarar?

**SQL (Structured Query Language)**, ilişkisel veritabanlarına komut vermek ve onlarla çalışmak için kullanılan dildir. SQL Server, SQL dilinin T-SQL adı verilen genişletilmiş biçimini kullanır. SQL; veri ekleme, okuma, değiştirme ve silmenin yanı sıra veritabanı yapısını tanımlamak için de kullanılır.

- Verileri okumak için `SELECT`, yeni kayıt eklemek için `INSERT`, kayıtları değiştirmek için `UPDATE` kullanılır. Kayıt silme işlemi `DELETE` ile yapılır.
- Tablo ve benzeri yapıları oluşturmak veya değiştirmek için `CREATE` ve `ALTER`; artık gerekmeyen bir yapıyı kaldırmak için `DROP` kullanılır.
- `WHERE` gibi koşullar, işlemin hangi kayıtlar üzerinde yapılacağını belirlemeye yardımcı olur.

Örneğin `SELECT` ile öğrencilerin adlarını listeleyebilir, `WHERE` ile yalnızca belirli bir sınıftaki öğrencileri seçebiliriz. Bu komutlar ilerleyen bölümlerde ayrıntılı olarak ele alınacaktır.

### Verinin değeri ve korunması

Veriyi toplamak, doğrulamak ve güncel tutmak zaman ve kaynak gerektirir; ayrıca veriler karar alma ve hizmet sunma açısından değer taşıyabilir. Bu nedenle verilerin **gizliliği, bütünlüğü ve erişilebilirliği** korunmalıdır: yalnızca yetkili kişiler erişebilmeli, bilgiler izinsiz veya hatalı biçimde değiştirilmemeli ve ihtiyaç duyulduğunda kullanılabilir olmalıdır.

Temel koruma alışkanlıkları arasında güçlü kimlik doğrulama kullanmak, her kullanıcıya yalnızca işi için gerekli yetkileri vermek, düzenli yedek almak ve yazılımları güncel tutmak bulunur. SQL sorgularında dışarıdan alınan değerleri sorgu metnine gelişigüzel eklemek yerine parametreli sorgular kullanmak da yaygın güvenlik risklerini azaltmaya yardımcı olur. Veriyi korumak, veritabanı çalışmalarının ayrılmaz bir parçasıdır.

## SQL Server ekosistemine genel bakış

SSMS: SQL Server Management Studio, SQL Server ile etkileşim kurmak için kullanılan bir araçtır. Kullanıcıların veritabanlarını yönetmelerine, sorgular yazmalarına ve raporlar oluşturmalarına olanak tanır. SSMS, kullanıcı dostu bir arayüz sunar ve SQL Server'ın tüm özelliklerini kullanmanıza yardımcı olur. (Management tool, write queries, manage databases, create reports)

İşletim Sistemi: Windows Server, Windows 10/11, Linux (bazı sürümler), CPU, RAM.

İstemci Uygulamalar (Web, Mobil): SQL Server'a bağlanmak için kullanılan uygulamalardır. Bu uygulamalar, kullanıcıların veritabanlarına erişmelerini ve veri üzerinde işlem yapmalarını sağlar.

## SQL Server + SSMS kurulumu

SQL Server kurulumu için öncelikle bilgisayarda kullanılacak sürümün, işletim sisteminin ve donanım gereksinimlerinin uygun olduğundan emin olunur. Ardından Microsoft'un resmi kaynaklarından SQL Server kurulumu başlatılır. Kurulum sırasında veri tabanı motoru, yönetim araçları ve gerekli servisler seçilebilir. Kurulum türü olarak genellikle temel veya özel kurulum seçenekleri sunulur; öğrenme amaçlı çalışmalar için temel kurulum yeterli olabilir.

Kurulum tamamlandıktan sonra SQL Server Authentication veya Windows Authentication yöntemiyle SQL Server'a bağlanılması gerekir. SQL Server Authentication için kullanıcı adı ve parola oluşturulurken, Windows Authentication mevcut Windows oturumunun kimlik bilgilerini kullanır.

SQL Server Management Studio (SSMS), SQL Server üzerinde sorgu çalıştırmak, veri tabanlarını ve tabloları yönetmek, kullanıcıları tanımlamak ve yedekleme işlemleri yapmak için kullanılan grafiksel bir yönetim aracıdır. Microsoft'un resmi sitesinden indirilen SSMS kurulumu tamamlandıktan sonra SQL Server'a hangi sunucu üzerinden bağlanılacağı belirtilir. Sunucu adı çoğunlukla `localhost`, bilgisayar adı veya kurulum sırasında verilen örnek adı olabilir.

SSMS açıldıktan sonra "Connect" (Bağlan) seçeneği kullanılarak SQL Server'a başarılı bir şekilde bağlanılır. Bağlantı oluştuğunda Object Explorer bölümünden sunucular, veri tabanları, tablolar ve diğer nesneler görüntülenebilir. Yeni bir sorgu penceresi açmak için **New Query** seçeneğine tıklanır. Örneğin, `SELECT @@VERSION;` sorgusu SQL Server sürümünü ve kurulum bilgilerini göstermeye yardımcı olur.

Kurulum sürecinde SQL Server servisi ve SSMS'nin doğru kurulmuş olması, başlangıçta veritabanı işlemlerini sorunsuz gerçekleştirmek için önemlidir. Bağlantı hatalarında sunucu adının, kimlik doğrulama yönteminin, SQL Server servisinin ve ağ/yerel güvenlik ayarlarının kontrol edilmesi gerekir.

### Veri Tabanı Oluşturma

SQL Server'da veri tabanı oluşturmak için SSMS arayüzü veya T-SQL kullanılabilir.

#### SSMS ile oluşturma

1. Object Explorer'da bağlı olduğunuz sunucuyu genişletin.
2. **Databases** klasörüne sağ tıklayın ve **New Database...** seçeneğini seçin.
3. **Database name** alanına `OkulDB` gibi açıklayıcı ve kullanılmayan bir ad yazın. Türkçe karakterler ve boşluklar yerine İngilizce karakterler ve alt çizgi kullanmak daha güvenlidir. Birleşik isimler yazarken 2. kelimenin baş harfinin büyük olması okunabilirliği ve anlaşılabilirliği artırır. Örnek: `OkulDB`, `MusteriBilgileri`, `UrunlerListesi`.
4. Gerekirse veri ve günlük dosyalarının konumunu ve büyüme ayarlarını inceleyin. Öğrenme amaçlı yerel kullanımda varsayılan ayarlar genellikle yeterlidir.
5. **OK** düğmesine tıklayın. Yeni veri tabanı **Databases** altında görünür. Görünmüyorsa klasöre sağ tıklayıp **Refresh** seçin.

#### T-SQL ile oluşturma

```sql
CREATE DATABASE OkulDB;
GO
```

Komut, `OkulDB` adlı veri tabanını oluşturur. Aynı isimde bir veri tabanı varsa hata alınır; adın kullanılabilir olduğunu önceden kontrol edin. İşlemi gerçekleştiren hesabın veri tabanı oluşturma yetkisi olmalıdır. Gerçek ortamlarda dosya konumu, yedekleme ve kurtarma ayarlarını ihtiyaca göre planlayın.

## Veri Tiplerine Hızlı Bakış

Veri tipi, bir sütunda hangi türde değerlerin saklanabileceğini belirler. Doğru veri tipini seçmek, verilerin tutarlı tutulmasına ve sorguların beklenen şekilde çalışmasına yardımcı olur. Tablo oluştururken her sütuna, saklayacağı bilgiye uygun bir veri tipi verilir.

### Metin türleri: `CHAR`, `VARCHAR`, `NCHAR`, `NVARCHAR`

Ad, adres ve e-posta gibi karakterlerden oluşan değerler metin türlerinde saklanır.

- `VARCHAR(n)`, en fazla `n` karakterlik, Unicode olmayan metinler içindir.
- `CHAR(n)`, sabit uzunluklu metinler içindir. Kısa değerler de belirtilen uzunluğa tamamlanır; sabit kodlar için kullanılabilir.
- `NVARCHAR(n)`, Türkçe karakterler ve farklı alfabeleri destekleyen Unicode metin saklar. Türkçe içeriklerde çoğunlukla tercih edilir. Unicode metin sabitleri `N` ile yazılır: `N'Çağrı'`.
- `NCHAR(n)`, sabit uzunluklu Unicode metin saklar.

Örneğin `Ad NVARCHAR(50)` sütunu, en fazla 50 karakterlik ad tutabilir. Uzunluk sınırı ihtiyaca göre belirlenmelidir. Daha uzun ve değişken metinler için `VARCHAR(MAX)` veya `NVARCHAR(MAX)` kullanılabilir.

### Sayısal türler: `INT`, `BIGINT`, `DECIMAL`, `FLOAT`

- `INT`, stok adedi gibi tam sayılar içindir. Daha büyük tam sayı aralıkları gerektiğinde `BIGINT` kullanılabilir.
- `DECIMAL(p, s)`, kesin ondalık değerler saklar. `p` toplam basamak sayısını, `s` virgülden sonraki basamak sayısını belirtir. Örneğin `DECIMAL(10, 2)` fiyat gibi iki ondalık basamaklı değerler için uygundur.
- `FLOAT`, yaklaşık değer saklar; ölçüm ve bilimsel hesaplarda kullanılabilir. Kesin olması gereken para tutarlarında genellikle `DECIMAL` tercih edilir.

### Tarih ve saat türleri: `DATE`, `TIME`, `DATETIME2`

- `DATE` yalnızca tarihi, `TIME` gün içindeki saati saklar.
- `DATETIME2` tarih ve saati birlikte saklar ve hassasiyeti ihtiyaca göre ayarlanabilir.
- `DATETIME` mevcut sistemlerde sık görülür; yeni tasarımlarda ihtiyaca göre `DATE`, `TIME` veya `DATETIME2` değerlendirilebilir.

Tarihleri metin yerine tarih türlerinde saklamak, karşılaştırma ve sıralama işlemlerinin doğru yapılmasını sağlar. Belirsiz yazımlardan kaçınmak için `2026-11-24` gibi yıl-ay-gün biçimi kullanılabilir.

### Mantıksal tür: `BIT`

`BIT`, doğru/yanlış gibi iki durumlu bilgiler için kullanılır; örneğin ürünün aktif olup olmadığını tutabilir. SQL Server'da `0` yanlış, `1` doğru anlamına gelir. Sütun `NULL` kabul ediyorsa boş değer ayrıca “belirtilmemiş” anlamına gelebilir.

### Örnek

```sql
CREATE TABLE Urunler (
	UrunID INT,
	UrunAdi NVARCHAR(100),
	Fiyat DECIMAL(10, 2),
	StokAdedi INT,
	EklenmeTarihi DATE,
	AktifMi BIT
);
```

Bu tabloda her sütunun türü, saklayacağı bilginin niteliğine göre seçilmiştir. Örneğin stok adedi tam sayı, fiyat ise iki ondalık basamaklı kesin bir sayıdır.

## SQL sorgu yapısı ve DDL komutları: CREATE / ALTER / DROP

### SQL sorgusunun genel yapısı

**SQL (Structured Query Language)**, ilişkisel veritabanları üzerinde sorgu çalıştırmak ve veritabanı nesnelerini yönetmek için kullanılan standart bir dilin adıdır. SQL Server bu dilin Microsoft'a ait genişletilmiş biçimi olan **T-SQL** dilini kullanır.

SQL komutları farklı amaçlara göre gruplandırılır:

| Komut ailesi | Kullanım amacı | Temel komutlar |
|---|---|---|
| DDL | Veritabanı ve tablo gibi nesnelerin yapısını oluşturur veya değiştirir | `CREATE`, `ALTER`, `DROP` |
| DML | Tablodaki verileri ekler, okur, değiştirir veya siler | `INSERT`, `SELECT`, `UPDATE`, `DELETE` |
| DCL | Kullanıcıların yetkilerini yönetir | `GRANT`, `DENY`, `REVOKE` |
| TCL | İşlemleri onaylar veya geri alır | `COMMIT`, `ROLLBACK` |

Bu dersin odak noktası **DDL** komutlarıdır. Ancak veriyi okumak için temel `SELECT` yapısını da bilmek gerekir. Veritabanı önce oluşturulur, sonra tablolar tanımlanır ve en sonunda tabloya veri eklenerek sorgulanır.

### Temel SELECT sorgu şablonu

Veritabanındaki kayıtları okumak için kullanılan temel komut `SELECT`tir:

```sql
SELECT sütunlar
FROM tablo_adi
WHERE şartlar
ORDER BY sıralama_sütunu;
```

Bu komutun bölümleri farklı sorulara cevap verir:

- `SELECT`: Hangi sütunların görüntüleneceğini belirler.
- `FROM`: Verilerin hangi tablodan okunacağını belirtir.
- `WHERE`: Hangi satırların işleme alınacağını filtreler.
- `ORDER BY`: Sonuçların hangi sütuna göre sıralanacağını belirler.

Örneğin, tüm öğrencilerin adını ve yaşını listelemek için:

```sql
SELECT Ad, Yas
FROM Ogrenciler;
```

Yalnızca 18 veya daha büyük yaştaki öğrencileri görmek için şart eklenir:

```sql
SELECT Ad, Yas
FROM Ogrenciler
WHERE Yas >= 18
ORDER BY Ad;
```

Burada `WHERE` satırları filtreler, `ORDER BY` alfabetik sıralama yapar ve `SELECT` verinin yapısını değiştirmez.

### SQL yazım kuralları

- SQL anahtar kelimeleri çoğu durumda büyük-küçük harfe duyarlı değildir; `SELECT` ile `select` aynı işlemi yapabilir.
- Okunabilirlik için anahtar kelimeler büyük, tablo ve sütun adları adlandırma düzenine göre yazılabilir.
- Her SQL cümlesinin sonunda `;` kullanmak iyi bir pratiktir.
- Açıklama satırları `--` ile başlar:

```sql
-- Bu satır bir açıklamadır
SELECT * FROM Ogrenciler;
```

- `*` sembolü tablodaki tüm sütunları seçmek için kullanılır. Gerçek uygulamalarda performans ve okunabilirlik için gerekli sütunların açıkça yazılması tercih edilir.

```sql
SELECT OgrenciID, Ad, Yas
FROM Ogrenciler;
```

### DDL: Veritabanı yapısını oluşturma ve değiştirme

**DDL (Data Definition Language)**, veritabanı nesnelerinin şeklini ve yapısını tanımlayan komutların adıdır. Tablodaki kayıtları değil, nesnenin kendisini etkiler.

DDL içinde kullanılan temel komutlar şunlardır:

- `CREATE`: Yeni bir veritabanı, tablo, görünüm veya indeks oluşturur.
- `ALTER`: Mevcut bir tabloyu veya nesneyi değiştirir.
- `DROP`: Var olan bir nesneyi veritabanından tamamen kaldırır.
- Yapı değişikliklerinde `PRIMARY KEY`, `NOT NULL` ve `CHECK` gibi kurallar veri bütünlüğüne yardım eder.

### CREATE DATABASE: Veritabanı oluşturma

Bir veritabanı, tabloların, indekslerin, kullanıcıların ve diğer nesnelerin saklandığı üst yapıdır. Yeni veritabanı oluşturduktan sonra `USE` komutu ile üzerinde çalışılacak aktif veritabanı seçilir.

```sql
USE master;
GO

-- OrnekDB adında yeni bir veritabanı oluşturur
CREATE DATABASE OrnekDB;
GO

-- Oluşturulan veritabanını aktif hale getirir
USE OrnekDB;
GO
```

- `USE master;`: Sunucunun sistem veritabanlarından `master` veritabanına geçer. `master`, sunucu yapılandırmalarını ve veritabanı bilgilerini tutar.
- `CREATE DATABASE`: Adı verilen yeni veritabanını oluşturur.
- `USE OrnekDB;`: Sonraki komutların `OrnekDB` üzerinde çalışmasını sağlar.
- `GO`: SSMS'de komutları ayrı yürütme gruplarına ayıran toplu çalışma işaretidir. SQL komutunun kendisi değildir.

Eğer aynı adla bir veritabanı zaten varsa `CREATE DATABASE` komutu hata verebilir. Hata almamak için önceden varlığı kontrol edilebilir:

```sql
IF DB_ID(N'OrnekDB') IS NULL
BEGIN
    CREATE DATABASE OrnekDB;
END;
GO

USE OrnekDB;
GO
```

`DB_ID`, verilen veritabanı adının kimliğini döndürür. `NULL` olması veritabanının bulunmadığı anlamına gelir.

#### Gelişmiş CREATE DATABASE örneği

Veritabanı dosyalarının adı, boyutu ve büyüme miktarı ihtiyaçlara göre ayarlanabilir:

```sql
CREATE DATABASE OrnekDB2
ON PRIMARY
(
    NAME = N'OrnekDB2_Data',
    FILENAME = N'C:\SQLData\OrnekDB2_Data.mdf',
    SIZE = 20MB,
    FILEGROWTH = 5MB
)
LOG ON
(
    NAME = N'OrnekDB2_Log',
    FILENAME = N'C:\SQLData\OrnekDB2_Log.ldf',
    SIZE = 5MB,
    FILEGROWTH = 1MB
);
GO
```

- `ON PRIMARY`: Ana veri dosyası ayarlarını tanımlar.
- `NAME`: SQL Server içindeki mantıksal dosya adıdır.
- `FILENAME`: Dosyanın bilgisayardaki fiziksel yoludur.
- `.mdf`: Ana veritabanı veri dosyası uzantısıdır.
- `LOG ON`: İşlem günlük dosyası ayarlarını tanımlar.
- `.ldf`: Veritabanı günlük dosyası uzantısıdır.
- `SIZE`: Dosyanın başlangıç boyutudur.
- `FILEGROWTH`: Dosya dolduğunda ne kadar büyüyeceğini belirtir.

Bu gelişmiş seçenekler gerçek sunucuda veritabanı, klasör izinleri ve disk alanı planlamasıyla birlikte kullanılmalıdır. Öğrenme amacıyla çoğunlukla basit `CREATE DATABASE OrnekDB;` komutu yeterlidir.

### CREATE TABLE: Tablo oluşturma

Veritabanı içindeki veriler çoğunlukla **tablolar** halinde saklanır. Bir tablo oluşturulurken her sütun için ad ve veri türü belirtilir:

```sql
CREATE TABLE Ogrenciler
(
    OgrenciID INT,
    Ad NVARCHAR(50),
    Yas INT,
    KayitTarihi DATE
);
GO
```

Bu tabloda `Ogrenciler` bir nesne adıdır; `OgrenciID`, `Ad`, `Yas` ve `KayitTarihi` tabloda bulunacak sütunlardır.

#### Birincil anahtar ve kimlik sütunu

Bir tablodaki her satırı benzersiz biçimde belirleyen sütuna **birincil anahtar (PRIMARY KEY)** denir. Birincil anahtar boş olamaz ve aynı değeri tekrar edemez.

Yeni kayıt eklenirken numaranın otomatik artmasını sağlayan `IDENTITY` kullanılabilir:

```sql
CREATE TABLE Ogrenciler
(
    OgrenciID INT IDENTITY(1,1) PRIMARY KEY,
    Ad NVARCHAR(50) NOT NULL,
    Yas INT NULL,
    KayitTarihi DATE NOT NULL
);
GO
```

- `IDENTITY(1,1)`: Başlangıç değeri 1 olup her yeni kayıtta 1 artar.
- `PRIMARY KEY`: Sütunu birincil anahtar yapar.
- `NOT NULL`: Sütunun mutlaka değer içermesi gerektiğini belirtir.
- `NULL`: Sütunun boş değer kabul edebileceğini belirtir.

#### Tablo Oluşturma: `CREATE TABLE`

Veritabanında bilgi saklamak için önce bir tablo oluşturulur. Tablo; her biri belirli türde bilgi tutan sütunlardan, bu sütunlara ait değerleri içeren satırlardan oluşur. SQL Server'da tablo oluşturmak için `CREATE TABLE` komutu kullanılır. Komutun genel biçimi şöyledir:

```sql
CREATE TABLE TabloAdi (
    SutunAdi VeriTipi Kural,
    DigerSutunAdi VeriTipi Kural
);
```

Aşağıdaki örnekte öğrencilerin temel bilgilerini tutan `Ogrenci` tablosu oluşturulur:

```sql
CREATE TABLE Ogrenci (
    OgrenciNo INT NOT NULL PRIMARY KEY,
    Ad VARCHAR(30) NOT NULL,
    SoyAd VARCHAR(30) NOT NULL,
    TCKimlikNo CHAR(11) NOT NULL UNIQUE,
    KayitTarihi DATE NOT NULL,
    ErkekMi BIT NULL
);
GO
```

##### Sütunlar ve veri tipleri

- `OgrenciNo INT`: Öğrenci numarasını tam sayı olarak saklar.
- `Ad VARCHAR(30)` ve `SoyAd VARCHAR(30)`: Değişken uzunluktaki metinleri, en fazla 30 karakter olacak şekilde saklar. Türkçe karakter içerebilecek metinlerde `NVARCHAR` da tercih edilebilir.
- `TCKimlikNo CHAR(11)`: Uzunluğu sabit olan 11 karakterlik bir değeri saklar. Kimlik numarası hesaplamalarında kullanılmayacağı için metin olarak tutulur; böylece baştaki sıfırlar kaybolmaz.
- `KayitTarihi DATE`: Saat bilgisi olmadan tarih saklar.
- `ErkekMi BIT`: SQL Server'da `BIT`, `0`, `1` veya `NULL` değerlerini alabilir. Bu örnekte alan isteğe bağlıdır; `NULL`, bilginin girilmediğini belirtir. Gerçek uygulamalarda kişinin cinsiyet bilgisi ve seçenekleri iş gereksinimlerine göre tasarlanmalıdır.

##### Kuralların anlamı

- `NOT NULL`, sütunun boş bırakılamayacağını belirtir. Bir değer bilinmiyorsa veya girilmemişse `NULL` kullanılır; `NULL`, sıfır ya da boş metinle aynı değildir.
- `PRIMARY KEY` (birincil anahtar), her satırı benzersiz biçimde tanımlar. Bu örnekte `OgrenciNo` tekrarlanamaz ve boş bırakılamaz.
- `UNIQUE`, sütundaki değerlerin tekrar etmesini engeller. Burada aynı kimlik numarasının birden fazla öğrenciye verilmesini önler.

`CREATE TABLE` komutunu çalıştırmadan önce doğru veritabanının seçili olduğundan emin olun. Aynı veritabanında `Ogrenci` adlı tablo zaten varsa komut hata verir. Tablo oluşturulduktan sonra yapısını `ALTER TABLE` ile değiştirebilir, içindeki kayıtları `SELECT` ile okuyabilirsiniz.

### ALTER TABLE: Mevcut tabloyu değiştirme

`ALTER TABLE`, var olan bir tablonun sütunlarını veya kısıtlarını değiştirir.

`ALTER TABLE`, daha önce oluşturulmuş bir tablonun yapısını değiştirmek için kullanılır. Bu komutla sütun ekleyebilir veya bir sütunun veri tipini ve boş değer kabul edip etmeyeceğini değiştirebiliriz. Aşağıdaki örneklerde `dbo`, SQL Server'da tablonun şemasını belirtir; `dbo.Ogrenciler` ifadesi `dbo` şemasındaki `Ogrenciler` tablosudur.

#### Yeni sütun ekleme

```sql
ALTER TABLE Ogrenciler
ADD Email NVARCHAR(100) NULL;
```

```sql
ALTER TABLE dbo.Ogrenciler
ADD Email NVARCHAR(100) NULL;
```

Bu komut, `Ogrenciler` tablosuna `Email` adlı yeni bir sütun ekler. `NVARCHAR(100)`, en fazla 100 karakter uzunluğunda Unicode metin saklar; Unicode desteği Türkçe karakterler gibi farklı alfabelerdeki karakterlerin doğru saklanmasını sağlar. `NULL`, bu sütunun değerinin bilinmeyebileceği veya henüz girilmemiş olabileceği anlamına gelir.

Sütun `NULL` kabul ettiğinden, tabloda önceden bulunan kayıtlar için e-posta adresi sağlamak gerekmez; bu kayıtların yeni `Email` değeri `NULL` olur. Bu durum boş metin (`N''`) ile aynı değildir: `NULL` değer olmadığını, boş metin ise uzunluğu sıfır olan bir metin değerini ifade eder.

> **Dikkat:** `Email` adlı sütun tabloda zaten varsa aynı adla tekrar eklenemez. Komutu çalıştırmadan önce tablo yapısını kontrol edin. Tabloyu kullanan sorgular ve uygulamalar da yeni sütundan etkilenebileceği için değişikliği planlamak önemlidir.

#### Sütun türünü değiştirme

```sql
ALTER TABLE Ogrenciler
ALTER COLUMN Ad NVARCHAR(100) NOT NULL;
```

Bu işlem mevcut verilerle uyumlu olacak şekilde uygulanmalıdır. Örneğin metni sayıya dönüştürürken veri kaybı veya hata oluşabilir.

```sql
ALTER TABLE dbo.Ogrenciler
ALTER COLUMN Sehir NVARCHAR(100) NULL;
```

Bu komut, `Sehir` sütununu en fazla 100 karakterlik Unicode metin olarak tanımlar ve `NULL` değerine izin verir. Örneğin sütun daha önce `NVARCHAR(50)` ise uzunluğunu 100 karaktere çıkarır. Böylece daha uzun değerler saklanabilir.

`ALTER COLUMN` kullanırken sütunun mevcut verilerini ve yeni tanımı birlikte değerlendirmek gerekir. Uzunluğu azaltmak, mevcut değerlerden biri yeni sınıra sığmıyorsa hata verebilir. Sütunun `NULL` kabul etmesini kaldırmak (`NOT NULL`) isteniyorsa önce mevcut `NULL` değerler geçerli değerlerle güncellenmelidir; aksi durumda değişiklik uygulanamaz.

`NULL` durumunu değiştiren örnek:

```sql
ALTER TABLE dbo.Ogrenciler
ALTER COLUMN Sehir NVARCHAR(100) NOT NULL;
```

Bu tanım, her kayıtta `Sehir` değeri bulunmasını zorunlu kılar. Tabloda `NULL` değerler varsa, değişiklikten önce bu satırlar için uygun bir değer belirlenmelidir. Gerçek veriler için anlamlı olmayan rastgele değerler kullanmak yerine, hangi bilginin doğru olduğunu belirlemek gerekir.

`ALTER TABLE` tablo yapısını değiştirir, tablonun adını değiştirmez. Yapı değişikliklerini özellikle önemli veriler içeren tablolarda uygulamadan önce mevcut verileri ve değişikliğin etkilerini kontrol edin.

#### Sütun kaldırma

```sql
ALTER TABLE Ogrenciler
DROP COLUMN Email;
```

Bu komut tablodaki `Email` sütununu ve o sütundaki verileri kaldırır.

#### Tabloya kısıt ekleme

Yaşın negatif olmamasını sağlamak için kontrol kısıtı eklenebilir:

```sql
ALTER TABLE Ogrenciler
ADD CONSTRAINT CK_Ogrenciler_Yas
CHECK (Yas >= 0);
```

- `CONSTRAINT`: Kısıtın adıdır.
- `CHECK`: Girilebilecek değerleri kontrol eder.
- `CK_Ogrenciler_Yas`: Tabloyu ve kısıtın amacını ifade eden örnek bir kısıt adıdır.

#### ALTER TABLE Kullanırken Dikkat!

- Tablo doluysa, veri tipi küçültme işlemleri veri kaybına neden olabilir.

- Büyük tablolarda ALTER işlemleri çok uzun sürebilir ve sistemi kilitleyebilir.

- Canlı sistemlerde önce mutlaka test ortamında deneyin.

- Şoma değişiklikleri için mümkünse bakım zamanı (maintenance window) kullanın.

### DROP: Nesneyi kaldırma

`DROP`, bir veritabanı nesnesini tamamen kaldırmak için kullanılan DDL komutudur. `DELETE` veya `TRUNCATE` yalnızca tablodaki kayıtları temizleyebilirken, `DROP` nesnenin kendisini de siler. Bu nedenle komut çalıştırılmadan önce hedef ve sonuç mutlaka kontrol edilmelidir.

#### Tabloyu kaldırma

```sql
DROP TABLE Ogrenciler;
GO
```

```sql
DROP TABLE dbo.Ogrenciler;
```

Bu komuttan sonra:

- `Ogrenciler` tablosu artık veritabanında bulunmaz.
- Tabloya ait sütunlar, kısıtlamalar ve indeksler de silinir.
- Tablo içindeki tüm veriler kalıcı olarak kaldırılır.
- Yedek veya başka bir kurtarma yöntemi yoksa işlem kolayca geri alınamaz.

Tablonun var olup olmadığından emin olunmadığında, SQL Server'da hata oluşmasını önlemek için `IF EXISTS` kullanılabilir:

```sql
DROP TABLE IF EXISTS dbo.Ogrenciler;
```

> `IF EXISTS`, tablo varsa siler; tablo yoksa bu nedenle hata üretmez. Ancak tablo gerçekten silinmeden önce hedefin doğru olduğundan yine de emin olunmalıdır.

Nesne varsa silmek için güvenli kontrol yapılabilir:

```sql
IF OBJECT_ID(N'dbo.Ogrenciler', N'U') IS NOT NULL
BEGIN
    DROP TABLE dbo.Ogrenciler;
END;
GO
```

Burada `dbo` varsayılan şema adıdır. **Şema**, tablo ve diğer nesneleri gruplandıran bir isim alanıdır.

#### Veritabanını kaldırma

```sql
USE master;
GO

DROP DATABASE OrnekDB;
GO
```

Bir veritabanını silmek için önce başka bir veritabanına geçmek gerekir. Aktif olarak kullanılan veritabanı silinemez.

Veritabanı silinirken önceki bağlantılar sonlandırılarak da işlem yapılabilir:

```sql
IF DB_ID(N'OrnekDB') IS NOT NULL
BEGIN
    ALTER DATABASE OrnekDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE OrnekDB;
END;
GO
```

Üretim ortamında veritabanı silme işlemlerinde yedek alınmalı ve işlem yalnızca yetkili kullanıcı tarafından yapılmalıdır.

```sql
DROP DATABASE OrnekDB;
```

Bu işlemle `OrnekDB` içindeki tablolar, görünümler, saklı yordamlar, ilişkiler ve diğer veritabanı nesneleriyle birlikte tüm veriler silinir. Yanlış veritabanında çalıştırılırsa çok büyük ve geri dönüşü zor veri kayıplarına yol açabilir.

Silinecek veritabanının gerçekten hedef veritabanı olduğunu kontrol etmek için önce mevcut veritabanlarını listeleyebilir ve bağlantınızı doğrulayabilirsiniz:

```sql
SELECT name
FROM sys.databases;
```

Başka kullanıcıların bağlantısı varsa silme işlemi engellenebilir. Böyle bir durumda bağlantıları sonlandırmak gibi yönetim işlemleri gerekebilir; bu işlemler canlı sistemlerde dikkatle ve yetkili kişiler tarafından yapılmalıdır.

#### `DROP` kullanırken dikkat edilmesi gerekenler

- Canlı sistemlerde `DROP` komutunu zorunlu olmadıkça kullanmayın.
- İşlemden önce güncel ve geri yüklenebilir bir yedek bulunduğunu doğrulayın.
- SSMS durum çubuğunda veya sorgu penceresinde aktif veritabanının doğru olduğunu kontrol edin.
- Komutu çalıştırmadan önce tablo veya veritabanı adını, ortamı (eğitim, test, üretim) ve sorgunun tamamını tekrar kontrol edin.
- Mümkünse önce test ortamında deneyin; üretim ortamında yetki ve onay sürecine uyun.
- Veritabanı nesnesini silmek gerekmiyorsa daha az yıkıcı bir işlem tercih edin.

#### `DROP`, `TRUNCATE`, `DELETE` ve `ALTER` farkı

| Komut | Temel etkisi |
| --- | --- |
| `DROP TABLE` | Tabloyu, yapısını ve verilerini siler. |
| `DROP DATABASE` | Veritabanının tamamını siler. |
| `TRUNCATE TABLE` | Tablonun tüm kayıtlarını hızlıca temizler; tablo yapısı kalır. |
| `DELETE` | Koşula bağlı olarak kayıtları siler; tablo yapısı kalır. |
| `ALTER TABLE` | Tablo yapısını değiştirir; nesneyi silmez. |

Örneğin yalnızca öğrencilerin kayıtlarını temizlemek, fakat tabloyu daha sonra yeniden kullanmak istiyorsanız `DROP TABLE` yerine aşağıdaki komutlardan uygun olanı değerlendirin:

```sql
TRUNCATE TABLE dbo.Ogrenciler;
```

Belirli kayıtları koşula göre silmek için ise `DELETE` kullanılır:

```sql
DELETE FROM dbo.Ogrenciler
WHERE Sehir = N'Ankara';
```

`DROP`, yanlış kullanıldığında en tehlikeli DDL komutlarından biridir. Bu nedenle önce amacın veriyi temizlemek mi, tablo yapısını değiştirmek mi, yoksa nesneyi tamamen kaldırmak mı olduğunu belirleyin; ardından en uygun komutu seçin.

### CREATE, ALTER ve DROP kullanım sırası

Yeni bir tabloda DDL komutlarının temel akışı aşağıdaki gibi olabilir:

```sql
USE OrnekDB;
GO

CREATE TABLE Ogrenciler
(
    OgrenciID INT IDENTITY(1,1) PRIMARY KEY,
    Ad NVARCHAR(50) NOT NULL,
    Yas INT NOT NULL,
    KayitTarihi DATE NOT NULL
);
GO

ALTER TABLE Ogrenciler
ADD Email NVARCHAR(100) NULL;
GO

SELECT OgrenciID, Ad, Yas, KayitTarihi, Email
FROM Ogrenciler;
GO
```

Bu örnekte önce tabloda kayıt tutacak yapı oluşturulur, ardından tablaya yeni bir sütun eklenir. Son `SELECT` komutu oluşturulan tablonun mevcut satırlarını okumak için kullanılır.

## Kayıt Ekleme: `INSERT`

Tabloyu oluşturduktan sonra tabloyu satırlar, yani kayıtlar doldururuz. Yeni kayıt eklemek için `INSERT INTO` komutu kullanılır:

```sql
INSERT INTO TabloAdi (Sutun1, Sutun2)
VALUES (Deger1, Deger2);
```

Önce hedef tablonun adını, ardından parantez içinde hangi sütunlara veri yazılacağını belirtiriz. `VALUES` içindeki her değer, listelenen sütunla aynı sırada olmalıdır.

Aşağıdaki örnek, daha önce oluşturulan `Ogrenciler` tablosuna kaydedilebilir:

```sql
USE OrnekDB;
GO

INSERT INTO dbo.Ogrenciler (Ad, Yas, KayitTarihi, Email)
VALUES (N'Ayşe Yılmaz', 24, '2026-11-24', N'ayse@example.com');

INSERT INTO dbo.Ogrenciler (Ad, Yas, KayitTarihi, Email)
VALUES (N'Mehmet Kaya', 26, '2026-11-24', NULL);

INSERT INTO dbo.Ogrenciler (Ad, Yas, KayitTarihi, Email)
VALUES (N'Elif Demir', 22, '2026-11-24', N'elif@example.com');
```

Örnekte `OgrenciID` sütununa değer yazılmamıştır. Bu sütun `IDENTITY(1,1)` olarak tanımlandığından SQL Server her yeni satır için otomatik olarak artan bir numara üretir.

Bir satırda isteğe bağlı bir e-posta yoksa `NULL` yazılır; boş metin (`''`) ile aynı değildir. Türkçe metinlerin düzgün saklanması için `N` ön eki kullanılabilir:

```sql
INSERT INTO dbo.Ogrenciler (Ad, Yas, KayitTarihi, Email)
VALUES (N'Ömer Çelik', 25, '2026-11-24', NULL);
```

Birden fazla kayıt aynı komutta eklenebilir:

```sql
INSERT INTO dbo.Ogrenciler (Ad, Yas, KayitTarihi, Email)
VALUES
    (N'Ayşe Yılmaz', 24, '2026-11-24', N'ayse@example.com'),
    (N'Mehmet Kaya', 26, '2026-11-24', NULL),
    (N'Elif Demir', 22, '2026-11-24', N'elif@example.com');
```

Sütun adları yazılmazsa `VALUES` içindeki değerler tablonun tüm sütunlarına varsayılan sıralamada verilmelidir. Bu yöntem hataya açık olduğundan sütunları açıkça yazmak daha güvenlidir.

## Veri Okuma: `SELECT` ve `WHERE`

### Tüm kayıtları okuma

`SELECT`, tablodaki verileri okumak için kullanılır:

```sql
SELECT *
FROM dbo.Ogrenciler;
```

`*` tüm sütunları seçer. Gerekli sütunları belirterek daha anlaşılır ve verimli bir sorgu yazılabilir:

```sql
SELECT OgrenciID, Ad, Yas, KayitTarihi
FROM dbo.Ogrenciler;
```

`FROM`, verinin okunacağı tabloyu belirtir. SQL sorguları satır başlarına göre değil; cümledeki sözcük sırasına göre okunur.

### Koşullu sorgulama

Belirli kayıtları seçmek için `WHERE` kullanılır:

```sql
SELECT OgrenciID, Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas >= 25;
```

Bu sorgu yaşı 25 veya daha büyük olan öğrencileri listeler.

```sql
SELECT Ad, Email
FROM dbo.Ogrenciler
WHERE Email IS NULL;
```

`NULL` bir sayı veya metin değildir. Bu nedenle `= NULL` kullanılmaz; `IS NULL` ve `IS NOT NULL` kullanılır.

Birden fazla kayıt eklemeyi tamamladıysanız, örnekleri test etmek için aşağıdaki sorgu tüm kayıtları gösterebilir:

```sql
SELECT OgrenciID, Ad, Yas, KayitTarihi, Email
FROM dbo.Ogrenciler;
```

## Operatörler

Operatörler, koşulları karşılaştırmak ve birden fazla koşulu birbirine bağlamak için kullanılır.

### Karşılaştırma operatörleri

| Operatör | Anlamı | Örnek |
|---|---|---|
| `=` | Eşittir | `Yas = 25` |
| `<>` | Eşit değildir | `Yas <> 25` |
| `>` | Büyük | `Yas > 20` |
| `>=` | Büyük veya eşit | `Yas >= 20` |
| `<` | Küçük | `Yas < 30` |
| `<=` | Küçük veya eşit | `Yas <= 30` |

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas >= 22 AND Yas <= 25;
```

Bu sorgu yaşı 22 ile 25 arasında olan kayıtları getirir. Aynı sonuç `BETWEEN` ile de yazılabilir:

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas BETWEEN 22 AND 25;
```

#### WHERE İçinde Kullanım Örnekleri

```sql
SELECT * FROM Ogrenciler
WHERE OgrenciId > 10;
```

Bu sorgu, `OgrenciId` değeri 10'dan büyük olan öğrencilerin tüm sütunlarını getirir. `*`, tablodaki bütün sütunları seçer.

```sql
SELECT Ad, DogumTarihi
FROM Ogrenciler
WHERE DogumTarihi >= '2000-01-01';
```

Bu sorgu, doğum tarihi 1 Ocak 2000 veya daha sonra olan öğrencilerin adını ve doğum tarihini getirir. `>=` operatörü belirtilen tarihi de kapsar.

```sql
SELECT Ad, Sehir
FROM Ogrenciler
WHERE Sehir <> 'Ankara';
```

Bu sorgu, şehri Ankara olmayan öğrencilerin adını ve şehrini getirir. `<>` eşit değildir anlamına gelir; bazı SQL sistemlerinde aynı koşul `!=` ile de yazılabilir.

### Mantıksal operatörler

- `AND`: Tüm koşullar sağlanmalıdır.
- `OR`: Koşullardan en az biri sağlanmalıdır.
- `NOT`: Koşulun tersini alır.

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas < 25 OR Email IS NULL;
```

Bu sorgu yaşı 25'ten küçük olanları veya e-posta adresi bulunmayanları getirir.

#### `Ogrenciler` tablosu üzerinden örnekler

**Ankara'da yaşayan ve 1 Ocak 2000 veya sonrasında doğan öğrenciler:**

```sql
SELECT *
FROM Ogrenciler
WHERE Sehir = 'Ankara'
    AND DogumTarihi >= '2000-01-01';
```

`AND` nedeniyle iki koşulun da sağlanması gerekir: öğrencinin şehri Ankara olmalı ve doğum tarihi belirtilen tarihte veya daha sonra olmalıdır.

**Ankara'da veya İstanbul'da yaşayan öğrenciler:**

```sql
SELECT *
FROM Ogrenciler
WHERE Sehir = 'Ankara'
     OR Sehir = 'İstanbul';
```

`OR` nedeniyle koşullardan herhangi birini sağlayan öğrenciler sonuçlara dahil edilir; yani Ankara'da yaşayanlar ve İstanbul'da yaşayanlar aynı listede gösterilir.

**Ankara'da yaşamayan öğrenciler:**

```sql
SELECT *
FROM Ogrenciler
WHERE NOT Sehir = 'Ankara';
```

`NOT`, şehir Ankara olduğunda doğru olan koşulun tersini alır. `Sehir` değeri `NULL` olan satırlar bu koşulda sonuçlara dahil olmaz; bu satırları da ele almak için ayrıca `OR Sehir IS NULL` koşulu eklenmelidir.

### `IN` ve `LIKE`

`IN`, bir değerin verilen seçeneklerden biri olup olmadığını kontrol eder:

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas IN (22, 24, 26);
```

`LIKE`, metin içinde örüntü aramak için kullanılır. `%` sıfır veya daha fazla karakter, `_` ise tek bir karakter yerine geçer:

```sql
SELECT Ad
FROM dbo.Ogrenciler
WHERE Ad LIKE N'A%';
```

Bu sorgu adı A harfiyle başlayan öğrencileri getirir.

```sql
SELECT Ad
FROM dbo.Ogrenciler
WHERE Ad LIKE N'%Yılmaz';
```

Bu sorgu soyadı Yılmaz ile biten öğrencileri getirir. Türkçe karakter ve büyük/küçük harf kuralı veritabanının ayarlanan diline göre değişebilir.

## Sıralama ve Takma Ad: `ORDER BY` ve `AS`

### Sıralama

Bir `SELECT` sorgusu çalıştırıldığında satırların hangi sırada döneceği, ayrıca belirtilmedikçe garanti edilmez. Sonuçları anlamlı ve öngörülebilir bir sıraya koymak için `ORDER BY` kullanılır. Sıralama, veritabanındaki kayıtların kalıcı sırasını değiştirmez; yalnızca sorgunun ürettiği sonuç kümesini düzenler.

Temel sözdizimi şöyledir:

```sql
SELECT sütunlar
FROM tablo
ORDER BY sıralama_sütunu [ASC | DESC];
```

- `ASC` (ascending), küçükten büyüğe veya A'dan Z'ye artan sıralamadır. Yazılmazsa varsayılan olarak `ASC` kabul edilir.
- `DESC` (descending), büyükten küçüğe veya Z'den A'ya azalan sıralamadır.
- `ORDER BY` genellikle sorgunun en sonunda, varsa `WHERE` koşulundan sonra yazılır.

Örneğin öğrencileri yaşlarına göre küçükten büyüğe sıralayabiliriz:

```sql
SELECT OgrenciID, Ad, Yas
FROM dbo.Ogrenciler
ORDER BY Yas ASC;
```

Yaşı büyük öğrencileri önce görmek için `DESC` kullanılır:

```sql
SELECT OgrenciID, Ad, Yas
FROM dbo.Ogrenciler
ORDER BY Yas DESC;
```

Sıralama, `WHERE` ile birlikte de kullanılabilir. Aşağıdaki sorgu yalnızca 20 yaş ve üzerindeki öğrencileri getirir ve bunları ada göre alfabetik sıralar:

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
WHERE Yas >= 20
ORDER BY Ad ASC;
```

#### Birden fazla sütuna göre sıralama

Birden fazla sütun yazıldığında sıralama önceliği soldan sağa doğru ilerler. Önce ilk sütuna, ilk sütunda eşitlik varsa ikinci sütuna bakılır:

```sql
SELECT Ad, Yas
FROM dbo.Ogrenciler
ORDER BY Yas DESC, Ad ASC;
```

Bu örnekte önce yaşlar büyükten küçüğe sıralanır. Yaşları aynı olan öğrenciler kendi aralarında ada göre alfabetik sıralanır.

Sıralama için seçilen sütunun `SELECT` listesinde bulunması zorunlu değildir:

```sql
SELECT Ad
FROM dbo.Ogrenciler
ORDER BY Yas DESC;
```

Bu sorgu yalnızca adları gösterir; ancak sıralamayı belirlemek için `Yas` sütununu kullanır. Aynı değere sahip satırların kendi aralarındaki sırası kesin değilse, sonucu daha öngörülebilir yapmak için ikinci bir ölçüt, örneğin `OgrenciID`, eklenebilir.

> **Not:** `NULL` bir değerin sıralamadaki yeri kullanılan veritabanı sistemine ve sıralama yönüne göre değişebilir. Eksik değerlerle çalışırken bu davranışı dikkate almak gerekir.

### Takma ad

`AS`, sütunlara veya tablolara sorgu içinde kullanılacak geçici ve daha anlaşılır adlar vermek için kullanılır. Bu adlandırma veritabanındaki tablo ya da sütunun gerçek adını değiştirmez; yalnızca sorgunun okunmasını ve sonuç başlıklarının anlaşılmasını kolaylaştırır.

#### Sütun takma adı

Bir sütuna verilen takma ad, sonuç ekranında sütun başlığı olarak görünür:

```sql
SELECT Ad AS OgrenciAdi, Yas AS OgrenciYasi
FROM dbo.Ogrenciler;
```

Sonuçta `Ad` yerine `OgrenciAdi`, `Yas` yerine `OgrenciYasi` başlıkları görülür. Özellikle hesaplanan değerleri adlandırmak için takma ad kullanmak önemlidir:

```sql
SELECT Ad, Yas + 1 AS GelecekYilYasi
FROM dbo.Ogrenciler;
```

Burada `GelecekYilYasi`, bir tabloda kayıtlı gerçek bir sütun değildir; sorgu çalışırken hesaplanan değerin başlığıdır. Türkçe karakter ve boşluk içeren takma adlar gerekiyorsa köşeli parantez kullanılabilir:

```sql
SELECT Ad AS [Öğrenci Adı], Yas AS [Öğrenci Yaşı]
FROM dbo.Ogrenciler;
```

#### Tablo takma adı

Tabloya verilen kısa ad, özellikle uzun tablo adlarını tekrar tekrar yazmamak veya birden fazla tabloyla çalışırken sütunların hangi tabloya ait olduğunu belirtmek için kullanılır:

```sql
SELECT o.Ad, o.Yas
FROM dbo.Ogrenciler AS o;
```

Bu örnekte `o`, `dbo.Ogrenciler` tablosunun sorgu içindeki geçici adıdır. Tablo takma adı verildikten sonra sütunlara `o.Ad` biçiminde erişilebilir.

> **Dikkat:** Takma adlar yalnızca mevcut sorgu süresince geçerlidir. Sorgu bittikten sonra veritabanında kalıcı bir değişiklik oluşturmazlar.

## Toplamalar ve Gruplama

Toplama (aggregate) fonksiyonları, bir sütundaki birden fazla satırın değerlerini değerlendirerek tek bir sonuç üretir. Örneğin öğrenci tablosundaki kayıt sayısını, yaşların ortalamasını veya en yüksek yaşı bulmak için kullanılır. Bir `GROUP BY` ifadesi yoksa sonuç genellikle tek satırdır.

| Fonksiyon | Görevi | Örnek |
|---|---|---|
| `COUNT(*)` | Sorgu sonucundaki satırları sayar | `COUNT(*)` |
| `COUNT(sütun)` | Belirtilen sütunda `NULL` olmayan değerleri sayar | `COUNT(Email)` |
| `SUM()` | Sayısal değerleri toplar | `SUM(Yas)` |
| `AVG()` | Sayısal değerlerin aritmetik ortalamasını verir | `AVG(Yas)` |
| `MAX()` | En büyük değeri verir | `MAX(Yas)` |
| `MIN()` | En küçük değeri verir | `MIN(Yas)` |

Bu fonksiyonlara, uygun veri türündeki bir sütun verilir. `SUM()` ve `AVG()` sayısal değerler üzerinde kullanılır; `MAX()` ve `MIN()` ise sayısal değerlerin yanı sıra metin veya tarih değerlerinde de en büyük/en küçük değeri bulabilir. Metinlerde sıralama, veritabanının karşılaştırma kurallarına göre yapılır.

```sql
SELECT
    COUNT(*) AS OgrenciSayisi,
    AVG(Yas) AS OrtalamaYas,
    MIN(Yas) AS EnKucukYas,
    MAX(Yas) AS EnBuyukYas
FROM dbo.Ogrenciler;
```

Bu sorgu tabloda bulunan öğrenci sayısını ve yaş bilgilerine ait özetleri tek satırda verir.

Sonuç sütunlarına verilen `AS` adları, sorgu çıktısının daha anlaşılır görünmesini sağlar. Bu adlar tabloda yeni sütun oluşturmaz.

`SUM(Yas)` tüm yaş değerlerini toplar:

```sql
SELECT SUM(Yas) AS YaslarToplamı
FROM dbo.Ogrenciler;
```

`COUNT(*)` satır sayısını, `COUNT(Email)` ise `Email` değeri `NULL` olmayan satır sayısını verir. `NULL`, bilginin bilinmediğini veya girilmediğini belirtir; boş metin (`''`) ya da sıfır ile aynı şey değildir:

```sql
SELECT
    COUNT(*) AS TumKayitlar,
    COUNT(Email) AS EmailiOlanKayitlar
FROM dbo.Ogrenciler;
```

`COUNT(sütun)`, `SUM()`, `AVG()`, `MIN()` ve `MAX()` hesaplama sırasında `NULL` değerleri dikkate almaz. Buna karşılık `COUNT(*)`, sütunların değerlerine bakmadan her satırı sayar. Örneğin tabloda beş satır varsa ve bunların ikisinde `Email` `NULL` ise `COUNT(*)` sonucu `5`, `COUNT(Email)` sonucu `3` olur.

Bir sütundaki farklı, `NULL` olmayan değerleri saymak için `DISTINCT` kullanılabilir:

```sql
SELECT COUNT(DISTINCT Email) AS FarkliEmailSayisi
FROM dbo.Ogrenciler;
```

`SUM()` veya `AVG()` için uygun, `NULL` olmayan değer bulunmazsa sonuç `NULL` olur; `COUNT()` ise sayılacak değer yoksa `0` verir. Bu nedenle boş tablo veya eksik verilerle çalışırken sonuçları yorumlamak önemlidir. Gerekirse `ISNULL()` gibi bir fonksiyonla `NULL` yerine başka bir değer gösterilebilir; ancak bu, hesaplamanın anlamını değiştirebileceği için bilinçli yapılmalıdır.

## `GROUP BY` ve `HAVING` ile Rapor Üretme

Bir tablodaki tüm satırlar için toplam, ortalama veya sayı hesaplamak tek satırlı bir rapor oluşturur. Ancak verileri yaş, kayıt tarihi, şehir veya bölüm gibi bir niteliğe göre ayrılıp her grup için ayrı sonuç almak istediğimizde `GROUP BY` kullanırız.

Örneğin bir tabloda yüz öğrencinin kaydı bulunabilir. Bu öğrencileri tek tek listelemek yerine yaşlarına göre kaç öğrenci olduğunu görmek istediğimizde yaşları gruplamamız gerekir.

### `GROUP BY`

`GROUP BY`, belirtilen sütundaki aynı değerlere sahip satırları tek bir grup haline getirir ve toplama fonksiyonlarını her grup için ayrı ayrı çalıştırır.

```sql
SELECT Yas, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
GROUP BY Yas
ORDER BY Yas;
```

Bu sorguda işlem şu şekilde gerçekleşir:

1. `FROM dbo.Ogrenciler` ile öğrenciler tablosu seçilir.
2. `GROUP BY Yas` ile aynı yaştaki öğrenciler ayrı gruplara ayrılır.
3. `COUNT(*)` her grup için satır sayısını hesaplar.
4. `SELECT Yas, COUNT(*) AS OgrenciSayisi` ile yaş ve öğrenci sayısı görüntülenir.
5. `ORDER BY Yas` grupları yaşa göre sıralar.

Örneğin aşağıdaki satırlarda 20 yaşında üç, 21 yaşında iki öğrenci olsun:

| Yas | OgrenciSayisi |
|---:|---:|
| 20 | 3 |
| 21 | 2 |

> **COUNT(*)** gruptaki satır sayısını verir. **COUNT(sütun_adı)** ise o sütundaki `NULL` olmayan değerleri sayar.

#### Select Listesi Kuralı

Toplama fonksiyonuna yazılmayan bir sütun, `SELECT` listesinde kullanılıyorsa genellikle `GROUP BY` içinde de bulunmalıdır:

```sql
SELECT Yas, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
GROUP BY Yas;
```

Bu sorguya göre yaşlar gruplandırılır; her yaşın karşısında o yaşa ait öğrenci sayısı yazılır. Eğer `Yas` yalnızca `SELECT` içinde kullanılıp `GROUP BY` içinde belirtilmezse SQL Server, hangi yaşın rapor satırında gösterileceğini kesin olarak bilemez ve hata verebilir.

Aşağıdaki kullanım hatalıdır:

```sql
SELECT Yas, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler;
```

Bu sorguda tek satırda toplam öğrenci sayısı hesaplanırken başka bir sütundan tek bir yaş değeri beklenir. Yaşların her biri için ayrı bilgi istendiği için de `GROUP BY Yas` yazılmalıdır.

#### Birden Fazla Sütuna Göre Gruplama

Gruplama birden fazla sütun kullanılarak daha ayrıntılı yapılabilir:

```sql
SELECT Yas, KayitTarihi, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
GROUP BY Yas, KayitTarihi
ORDER BY KayitTarihi, Yas;
```

Bu sorgu önce yaş ve kayıt tarihinin birleşimini gruplar. Yani yalnızca yaşı aynı olanlar tek grup sayılmaz; kayıt tarihi de aynı olan öğrenciler birlikte gruplanır.

Örneğin iki yaşındaki öğrencilerin kayıt tarihi aynı ise sonuç tek grup olurken kayıt tarihleri farklıysa sonuç iki farklı satır olarak görüntülenir:

```text
Yas = 20, KayitTarihi = 2026-01-10
Yas = 20, KayitTarihi = 2026-02-10
```

#### Kayıt Tarihlerine Göre Gruplama

Farklı kayıt tarihlerindeki öğrenci sayısını bulmak için:

```sql
SELECT KayitTarihi, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
GROUP BY KayitTarihi
ORDER BY KayitTarihi;
```

Bu sorgu her kayıt tarihini ayrı bir grup olarak ele alır ve o tarihte kaç öğrencinin kaydedildiğini gösterir.

### Gruplar Üzerinde Toplama Hesabı

`GROUP BY` ile `COUNT`, `SUM`, `AVG`, `MIN` ve `MAX` fonksiyonları kullanılabilir:

```sql
SELECT
    Yas,
    COUNT(*) AS OgrenciSayisi,
    SUM(Yas) AS YaslarToplami,
    AVG(Yas) AS YasOrtalamasi,
    MIN(Yas) AS EnDusukYas,
    MAX(Yas) AS EnYuksekYas
FROM dbo.Ogrenciler
GROUP BY Yas;
```

Burada her yaş grubu için öğrenci sayısı ve yaşla ilgili hesaplamalar ayrı ayrı yapılır. Ancak bu örnekte hem grup sütunu hem hesaplanan sütunun aynı olması gibi görünür; gerçek hayatta toplama genellikle puan, satış veya fiyat gibi başka bir sütun üzerinde yapılır.

Örneğin her kayıttaki puanı hesaplamak yerine her öğrenci yaş grubunun puan ortalamasını bulmak için:

```sql
SELECT Yas, AVG(Puan) AS PuanOrtalamasi
FROM dbo.Ogrenciler
GROUP BY Yas;
```

Toplama fonksiyonları `NULL` değerlerini genellikle hesaba katmaz. Bu nedenle ortalama veya toplam hesaplaması yapan bir sütunda eksik değerler varsa sonuç yorumlanırken eksik veriler dikkate alınmalıdır.

### `WHERE` ile `GROUP BY` Arasındaki Fark

`WHERE` ve `GROUP BY` farklı amaçlarla kullanılır:

- `WHERE`, gruplama başlamadan önce satırları filtreler.
- `GROUP BY`, filtrelenmiş satırları belirtilen sütunun değerlerine göre gruplar.
- `HAVING`, oluşturulmuş grupları hesaplanan sonuçlarına göre filtreler.

Örneğin 2026 yılından itibaren kaydedilen öğrencileri tarihlerine göre gruplayabiliriz:

```sql
SELECT KayitTarihi, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
WHERE KayitTarihi >= '2026-01-01'
GROUP BY KayitTarihi
ORDER BY KayitTarihi;
```

Bu sorguda ilk olarak 2026-01-01 tarihinden eski kayıtlar `WHERE` ile çıkarılır. Kalan satırlar `KayitTarihi` sütununa göre gruplandırılır.

`WHERE` içinde normal sütunlarda filtreleme yapılır:

```sql
WHERE Yas >= 18
```

Ancak grup içinde hesaplanan bir değer olan `COUNT(*)` için `WHERE` kullanılamaz. Sayı hesaplanmadan önce bütün satırlar filtrelenmiş olacağından oluşturulmamış gruplar henüz mevcut değildir.

### `HAVING`

`HAVING`, `GROUP BY` ile oluşturulan grupları filtrelemek için kullanılır. Özellikle gruplara ait toplam değerlerin belirli bir koşulu sağlayıp sağlamadığını sorgulamak istediğimizde kullanılır.

```sql
SELECT KayitTarihi, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
GROUP BY KayitTarihi
HAVING COUNT(*) >= 2
ORDER BY KayitTarihi;
```

Bu sorgu önce aynı kayıt tarihine sahip satırları gruplar. Daha sonra yalnızca en az iki öğrencisi bulunan tarihleri gösterir.

#### `WHERE` ve `HAVING` Aynı Sorguda

```sql
SELECT KayitTarihi, COUNT(*) AS OgrenciSayisi
FROM dbo.Ogrenciler
WHERE KayitTarihi >= '2026-01-01'
GROUP BY KayitTarihi
HAVING COUNT(*) >= 2
ORDER BY KayitTarihi;
```

Bu sorgunun mantığı şöyledir:

1. 2026-01-01 tarihinden eski kayıtlar `WHERE` ile elenir.
2. Kalan satırlar kayıt tarihine göre gruplanır.
3. `HAVING` ile yalnızca iki veya daha fazla öğrencisi olan tarihler seçilir.
4. Sonuç tarihe göre sıralanır.

| Amaç | Kullanılacak Bölüm |
|---|---|
| Gruplama yapılmadan satırları filtrelemek | `WHERE` |
| Satırları belirtilen sütuna göre gruplamak | `GROUP BY` |
| Oluşan grup sonuçlarını filtrelemek | `HAVING` |
| Sonuçları sıralamak | `ORDER BY` |

### Temel Sorgu Sırası

Bir sorguda bu bölümler yazılırken kullanılan temel sıra şöyledir:

```sql
SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY
```

SQL yazımında bu bölüm sırası önemlidir. Mantığı kavramak için sıralamayı şu şekilde düşünebiliriz:

1. **FROM:** Verilerin geleceği tablo seçilir.
2. **WHERE:** Gruplama öncesi satırlar filtrelenir.
3. **GROUP BY:** Satırlar gruplara ayrılır.
4. **HAVING:** Gruplar filtrelenir.
5. **SELECT:** Gösterilecek sütunlar ve grup hesapları belirlenir.
6. **ORDER BY:** Sonuçlar sıralanır.

`SELECT` sorguda önce yazılır, ancak verilerin işlenme mantığı `FROM` ile başlar. Bu ayrım SQL sözdizimini değil, sorgunun kavramsal işlem sırasını anlamaya yardımcı olur.

### Sık Yapılan Hatalar

- `SELECT` listesinde gruplama fonksiyonuna dahil olmayan bir sütunu yazıp `GROUP BY` içinde belirtmemek.
- Toplama sonucunu filtrelemek için `WHERE` kullanmaya çalışmak; bu tür durumlarda `HAVING` kullanılmalıdır.
- `COUNT(*)` ile `COUNT(sütun_adı)` arasındaki farkı göz ardı etmek.
- Sonuçların sıralanmadığı varsayılması; grup sonuçlarının sıralı görünmesi için `ORDER BY` kullanılmalıdır.
- Tarih filtrelerinde metin yerine uygun tarih türünü kullanmak ve tarih biçimini veritabanı ayarlarıyla uyumlu tutmak.
