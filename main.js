
onload = () => {
  const audio = document.getElementById('myAudio');
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

  // 3. Cek posisi musik terakhir
    if (localStorage.getItem('musicStatus') === 'playing') {
        const savedTime = localStorage.getItem('musicTime');
        if (savedTime) audio.currentTime = parseFloat(savedTime);
        audio.play().catch(() => console.log("Klik layar untuk musik"));
    }
// Pastikan musik jalan saat klik pertama (karena kebijakan browser)
document.body.addEventListener('click', () => {
    audio.play();
    localStorage.setItem('musicStatus', 'playing');
}, { once: true });

// Simpan progres musik
setInterval(() => {
    if (!audio.paused) {
        localStorage.setItem('musicTime', audio.currentTime);
    }
}, 1000);