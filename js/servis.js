const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n=== YENİ SERVİS TALEBİ ===\n");

// Müşteri bilgilerini al
rl.question("Adınız ve Soyadınız: ", (musteriAdi) => {
    rl.question("Telefon Numaranız: ", (telefonNo) => {
        rl.question("Cihaz Modeliniz: ", (cihazModeli) => {
            rl.question("Arıza Açıklaması: ", (ariza) => {
                // Bilgileri kontrol et
                if(musteriAdi && telefonNo && cihazModeli && ariza) {
                    // Servis kaydı oluştur
                    let servisNo = Math.floor(Math.random() * 1000);
                    
                    console.log("\nServis Talebi Bilgileri:");
                    console.log("Müşteri: " + musteriAdi);
                    console.log("Telefon: " + telefonNo);
                    console.log("Cihaz: " + cihazModeli);
                    console.log("Arıza: " + ariza);
                    console.log("\nServis Numaranız: " + servisNo);
                    console.log("Bu numarayı saklayın, servis takibi için kullanacaksınız!");
                }
                else {
                    console.log("Hata: Lütfen tüm bilgileri doldurun!");
                }

                // Ana menüye dön
                console.log("\nAna menüye dönmek için bir tuşa basın...");
                rl.question("", () => {
                    rl.close();
                    require('../index.js');
                });
            });
        });
    });
}); 