const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n=== SERVİS TAKİP ===\n");

// Servis numarasını al
rl.question("Servis Numaranızı Girin: ", (servisNo) => {
    // Basit bir servis durumu kontrolü
    let durumlar = {
        "123": "Tamir Ediliyor",
        "456": "Parça Bekleniyor",
        "789": "Teslime Hazır"
    };
    
    let durum = durumlar[servisNo] || "Servis kaydı bulunamadı!";
    
    console.log("\nServis Durumu:");
    console.log("Servis No: " + servisNo);
    console.log("Durum: " + durum);

    // Ana menüye dön
    console.log("\nAna menüye dönmek için bir tuşa basın...");
    rl.question("", () => {
        rl.close();
        require('../index.js');
    });
}); 