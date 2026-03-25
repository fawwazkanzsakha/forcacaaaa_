const title = document.querySelector('.title')
const text = `I Have Something`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
function playMusic(event) {
    event.preventDefault(); // Menahan perpindahan halaman sementara
    
    const audio = document.getElementById("myAudio");
    const targetUrl = event.currentTarget.href;

    // Memutar audio "Risk It All"
    audio.play().then(() => {
        // Setelah musik mulai, tunggu 30ms agar transisi terasa halus
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 300);
    }).catch(error => {
        // Jika ada kendala (misal: setelan browser), tetap pindah ke halaman bunga
        console.error("Gagal memutar musik:", error);
        window.location.href = targetUrl;
    });
}const audio = document.getElementById('myAudio');
const openButton = document.querySelector('.btn');

// Fungsi untuk memutar musik
openButton.addEventListener('click', function(e) {
    // Memutar musik
    audio.play().catch(error => {
        console.log("Autoplay diblokir oleh browser, musik akan jalan setelah interaksi.");
    });

    // Simpan status musik agar tetap menyala di halaman selanjutnya (flower.html)
    localStorage.setItem('musicStatus', 'playing');
});