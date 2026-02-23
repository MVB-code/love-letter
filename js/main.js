// --- NAVEGAÇÃO E POP-UPS ---
function goToEncrypted() {
  document.getElementById('frontPage').classList.remove('active');
  document.getElementById('encryptedPage').classList.add('active');
  
  const audio = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  const isMuted = localStorage.getItem('musicMuted') === 'true';
  
  if(audio && !isMuted) {
    audio.play().then(() => {
      btn.innerHTML = svgMusicOn;
      btn.classList.add('playing');
    }).catch(e => console.log("Áudio à espera de interação"));
  }

  setTimeout(() => {
    document.getElementById('errorModal').style.display = 'flex';
  }, 800);
}

function closeErrorModal() {
  document.getElementById('errorModal').style.display = 'none';
}

// TODO maybeee adicionar confetis idk
function showSuccess() {
  document.getElementById('successModal').style.display = 'flex';
}

function closeSuccessModal() {
  document.getElementById('successModal').style.display = 'none';
}

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * 200 - 100; 
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// --- LÓGICA DO SOM ---
const svgMusicOn = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`;
const svgMusicOff = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`;

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');
  const isMuted = localStorage.getItem('musicMuted') === 'true';

  if (!isMuted) {
    // Shows "ON" by default
    btn.innerHTML = svgMusicOn;
    btn.classList.add('playing');
    // Tenta dar paly se o browser der block antes de um click espera só
    music.play().catch(() => console.log("Waiting for user interaction to play audio."));
  } else {
    btn.innerHTML = svgMusicOff;
    btn.classList.remove('playing');
  }
});

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btn = document.getElementById('musicToggle');

  if (music.paused) {
    music.play();
    btn.innerHTML = svgMusicOn;
    btn.classList.add('playing');
    localStorage.setItem('musicMuted', 'false');
  } else {
    music.pause();
    btn.innerHTML = svgMusicOff;
    btn.classList.remove('playing');
    localStorage.setItem('musicMuted', 'true');
  }
}


function goHome() {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('active');
  });
  
  document.getElementById('frontPage').classList.add('active');
  
  const vInput = document.getElementById('vInput');
  if(vInput) vInput.value = '';

  const noBtn = document.getElementById('noBtn');
  if(noBtn) noBtn.style.transform = 'translate(0px, 0px)';
}