// Dosya işlemleri için Node.js'in yerleşik fs modülünü içe aktarır.
const fs = require('fs');

// Dosya yollarını işletim sistemi kurallarına göre oluşturmak için path modülünü kullanır.
const path = require('path');

// Dosyanın script dosyasına göre tam yolunu verir; farklı klasörden çalıştırıldığında da doğru dosyayı bulur.
const dosyaYolu = path.join(__dirname, 'önemlinot.json');

// Dosyadaki JSON metnini JavaScript'te bir diziye dönüştürür.
function notlariOku() {
	const dosyaIcerigi = fs.readFileSync(dosyaYolu, 'utf-8');
	return JSON.parse(dosyaIcerigi);
}

// Yeni bir not ekler, güncel diziyi dosyaya kaydeder ve sonucu konsola yazdırır.
function yeniNotEkle(yeniNot) {
	const notlar = notlariOku();

	// Yeni metni dizinin sonuna ekler.
	notlar.push(yeniNot);

	// Diziyi okunabilir JSON biçimine dönüştürüp dosyaya kaydeder.
	fs.writeFileSync(dosyaYolu, JSON.stringify(notlar, null, 2), 'utf-8');

	console.log(`Yeni not eklendi: ${yeniNot}`);
}

// Dosyadan güncel notları okur ve her birini ayrı satırda yazdırır.
const notlar = notlariOku();

notlar.forEach((not, index) => {
	console.log(`${index + 1}. ${not}`);
});
yeniNotEkle("Bugün yeni bir konu çalıştım.");
// Fonksiyonu bu satırın çağrılmasıyla kullanabilirsin.
// Örnek: yeniNotEkle("Bugün yeni bir konu çalıştım.");
