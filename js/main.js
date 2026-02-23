// --- NAVEGAÇÃO E POP-UPS ---
function goToEncrypted() {
  document.getElementById('frontPage').classList.remove('active');
  document.getElementById('encryptedPage').classList.add('active');
  
  const audio = document.getElementById('bgMusic');
  if(audio) audio.play().catch(e => console.log("Audio waiting for interaction"));

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