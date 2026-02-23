// --- LÓGICA DE DECRIPTAÇÃO ---

const fullMessage = "Wowwwww I'm amazed you made it here, you're SOOOOOO smart, I wanna thank you for everything you do for me, and thank you for being the most awesome person I know, I hope next valentine I can spoil you as you deserve, until then I'll give you all my love in every way I can. Will you be my E-Valentine?"; 
const correctV = "200"; 
let currentTimer = null;

function decryptLetter() {
  const input = document.getElementById('vInput').value.trim();
  if(input === correctV){
    document.getElementById('encryptedPage').classList.remove('active');
    document.getElementById('decryptedPage').classList.add('active');

    // Resets visuais para garantir que a página está limpa
    document.getElementById('finalButtons').style.opacity = '0';
    document.getElementById('noBtn').style.transform = 'translate(0px, 0px)'
    
    // Inicia o efeito de máquina de escrever
    typeWriterEffect(fullMessage, 'typewriterText');
    
  } else {
    alert("Try again dumbasss, look closely at the graph");
  }
}

// --- EFEITO TYPEWRITER ---
function typeWriterEffect(text, elementId) {
  const element = document.getElementById(elementId);
  
  // Pára qualquer escrita que ainda esteja a decorrer
  if (currentTimer) clearTimeout(currentTimer);
  
  // Limpa o texto anterior
  element.innerHTML = ''; 
  
  let i = 0;
  const speed = 50; 

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      // Guarda o ID do temporizador para o poder cancelar se necessário
      currentTimer = setTimeout(type, speed);
    } else {
      document.getElementById('finalButtons').style.opacity = '1';
      element.innerHTML += '<span class="cursor"></span>';
      currentTimer = null; // Limpa a variável quando termina
    }
  }
  type();
}