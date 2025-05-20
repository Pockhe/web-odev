// Yeni Servis Talebi Sayfası
document.addEventListener('DOMContentLoaded', function() {
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>Yeni Servis Talebi</h1>
        <div class="form-container">
            <input type="text" id="musteriAdi" placeholder="Adınız ve Soyadınız">
            <input type="text" id="telefonNo" placeholder="Telefon Numaranız">
            <input type="text" id="cihazModeli" placeholder="Cihaz Modeliniz">
            <textarea id="ariza" placeholder="Arıza Açıklaması"></textarea>
            <button onclick="servisTalebiOlustur()">Gönder</button>
        </div>
        <div id="sonuc"></div>
        <button onclick="window.location.href='/'">Ana Sayfaya Dön</button>
    `;
    document.body.appendChild(content);
});

function servisTalebiOlustur() {
    const musteriAdi = document.getElementById('musteriAdi').value;
    const telefonNo = document.getElementById('telefonNo').value;
    const cihazModeli = document.getElementById('cihazModeli').value;
    const ariza = document.getElementById('ariza').value;
    const sonuc = document.getElementById('sonuc');
    
    if(musteriAdi && telefonNo && cihazModeli && ariza) {
        const servisNo = Math.floor(Math.random() * 1000);
        sonuc.innerHTML = `
            <h3>Servis Talebi Alındı!</h3>
            <p>Müşteri: ${musteriAdi}</p>
            <p>Telefon: ${telefonNo}</p>
            <p>Cihaz: ${cihazModeli}</p>
            <p>Arıza: ${ariza}</p>
            <p>Servis No: ${servisNo}</p>
            <p>Bu numarayı saklayın, servis takibi için kullanacaksınız!</p>
        `;
    } else {
        sonuc.innerHTML = '<p style="color: red;">Lütfen tüm bilgileri doldurun!</p>';
    }
} 