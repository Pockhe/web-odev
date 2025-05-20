// Telefon Teknik Servisi Ana Sayfa
document.addEventListener('DOMContentLoaded', function() {
    const content = document.createElement('div');
    content.innerHTML = `
        <header>
            <div class="container">
                <h1>Telefon Teknik Servisi</h1>
                <p style="color: #ecf0f1; font-size: 1.2rem; margin-top: 1rem;">Güvenilir ve Hızlı Teknik Servis Hizmetleri</p>
            </div>
        </header>

        <div class="container">
            <div class="features" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 3rem 0;">
                <div class="feature-card" style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
                    <h3 style="color: #2c3e50;">Hızlı Servis</h3>
                    <p>Ortalama 24 saat içinde tamamlanan servis işlemleri ile zaman kaybetmeyin</p>
                </div>
                <div class="feature-card" style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
                    <h3 style="color: #2c3e50;">Uzman Ekip</h3>
                    <p>Yılların deneyimine sahip uzman teknik servis ekibimiz ile güvenilir hizmet</p>
                </div>
                <div class="feature-card" style="background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
                    <h3 style="color: #2c3e50;">Garantili Onarım</h3>
                    <p>Tüm onarımlarımız 90 gün garantili olup, müşteri memnuniyeti odaklı çalışıyoruz</p>
                </div>
            </div>

            <div class="menu-buttons">
                <button onclick="window.location.href='/takip'" style="background: #2c3e50;">
                    <span style="font-size: 1.2rem;">🔍</span> Servis Takip
                </button>
                <button onclick="window.location.href='/servis'" style="background: #27ae60;">
                    <span style="font-size: 1.2rem;">📱</span> Yeni Servis Talebi
                </button>
            </div>

            <div style="text-align: center; margin: 3rem 0; color: #7f8c8d;">
                <p>7/24 Teknik Destek Hattı: <strong>0850 123 45 67</strong></p>
                <p>Merkez Servis Adresimiz: Teknoloji Caddesi No:123, İstanbul</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">Çalışma Saatlerimiz: Hafta içi 09:00 - 18:00, Cumartesi 10:00 - 16:00</p>
            </div>
        </div>
    `;
    document.body.appendChild(content);
}); 