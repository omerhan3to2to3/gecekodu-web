// TopBar scroll animasyonu
let lastScrollTop = 0;
const topBar = document.querySelector('.topBar');
const scrollThreshold = 100; // TopBar'ın gizlenmesi için gereken scroll mesafesi

// Sosyal medya ikonları animasyonunu tetikleme fonksiyonu
function triggerIconAnimation() {
    if (topBar) {
        // Önce animasyon sınıfını kaldır
        topBar.classList.remove('animate');
        
        // Kısa bir gecikme ile tekrar ekle
        setTimeout(() => {
            topBar.classList.add('animate');
        }, 100);
    }
}

// Sayfa yüklendiğinde sosyal medya ikonları animasyonunu başlat
document.addEventListener('DOMContentLoaded', function() {
    if (topBar) {
        // Kısa bir gecikme ile animasyonu başlat
        setTimeout(() => {
            topBar.classList.add('animate');
        }, 300);
    }
});

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Scroll mesafesi threshold'dan büyükse animasyonu başlat
    if (scrollTop > scrollThreshold) {
        if (scrollTop > lastScrollTop) {
            // Aşağı kaydırma - TopBar'ı gizle
            topBar.classList.remove('scroll-up');
            topBar.classList.add('scroll-down');
        } else {
            // Yukarı kaydırma - TopBar'ı göster
            topBar.classList.remove('scroll-down');
            topBar.classList.add('scroll-up');
            
            // TopBar görünür olduğunda ikon animasyonunu tetikle
            setTimeout(() => {
                triggerIconAnimation();
            }, 350); // TopBar animasyonu bittikten sonra
        }
    } else {
        // Sayfa başına yakınsa TopBar'ı göster
        topBar.classList.remove('scroll-down', 'scroll-up');
        
        // TopBar görünür olduğunda ikon animasyonunu tetikle
        setTimeout(() => {
            triggerIconAnimation();
        }, 350); // TopBar animasyonu bittikten sonra
    }
    
    lastScrollTop = scrollTop;
}); 