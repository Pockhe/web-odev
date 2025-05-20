// Servis Takip Sayfası
document.addEventListener('DOMContentLoaded', function() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Servis Takip</h1>
        <div class="form-container">
            <input type="text" id="servisNo" placeholder="Servis Numaranızı Girin">
            <button onclick="servisSorgula()">Sorgula</button>
        </div>
        <div id="sonuc"></div>
        <button onclick="window.location.href='/'">Ana Sayfaya Dön</button>
    `;
    document.body.appendChild(content);
});

function servisSorgula() {
    const servisNo = document.getElementById('servisNo').value;
    const sonuc = document.getElementById('sonuc');
    
    // Basit bir servis durumu kontrolü
    const durumlar = {
        "123": "Tamir Ediliyor",
        "456": "Parça Bekleniyor",
        "789": "Teslime Hazır"
    };
    
    const durum = durumlar[servisNo] || "Servis kaydı bulunamadı!";
    sonuc.innerHTML = `
        <h3>Servis Durumu:</h3>
        <p>Servis No: ${servisNo}</p>
        <p>Durum: ${durum}</p>
    `;
} 