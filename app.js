// Telefon Servis Uygulaması
console.log("Telefon Teknik Servisi Başlatılıyor...");

// Basit bir veritabanı simülasyonu
let servisKayitlari = [];

// Servis kaydı oluşturma fonksiyonu
function servisKaydiOlustur(musteriAdi, telefonNo, cihazModeli, ariza) {
    let yeniKayit = {
        id: servisKayitlari.length + 1,
        musteriAdi: musteriAdi,
        telefonNo: telefonNo,
        cihazModeli: cihazModeli,
        ariza: ariza,
        durum: "Alındı",
        tarih: new Date().toLocaleString()
    };
    
    servisKayitlari.push(yeniKayit);
    return yeniKayit.id;
}

// Servis durumu sorgulama fonksiyonu
function servisDurumuSorgula(id) {
    let kayit = servisKayitlari.find(k => k.id === id);
    return kayit || null;
}

// Servis durumu güncelleme fonksiyonu
function servisDurumuGuncelle(id, yeniDurum) {
    let kayit = servisKayitlari.find(k => k.id === id);
    if (kayit) {
        kayit.durum = yeniDurum;
        return true;
    }
    return false;
}

// Uygulamayı başlat
console.log("Uygulama hazır!");
console.log("Ana menüye yönlendiriliyorsunuz...");

// Ana menüye yönlendir
setTimeout(function() {
    window.location.href = "index.js";
}, 1000); 