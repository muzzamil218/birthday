// Confetti Animation
const confettiContainer = document.getElementById('confettiContainer');

function createConfetti() {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti';
    
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA', '#FF8B94', '#FFB86C'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const size = Math.random() * 10 + 5;
    confettiPiece.style.width = size + 'px';
    confettiPiece.style.height = size + 'px';
    confettiPiece.style.background = randomColor;
    confettiPiece.style.left = Math.random() * 100 + '%';
    confettiPiece.style.top = '-10px';
    confettiPiece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    
    const duration = Math.random() * 2 + 2;
    const delay = Math.random() * 0.5;
    const xOffset = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 720;
    
    confettiPiece.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
    confettiPiece.style.setProperty('--x-offset', xOffset + 'px');
    confettiPiece.style.setProperty('--rotation', rotation + 'deg');
    
    confettiContainer.appendChild(confettiPiece);
    
    setTimeout(() => confettiPiece.remove(), (duration + delay) * 1000);
}

// Add confetti animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) translateX(var(--x-offset)) rotate(var(--rotation));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create confetti pieces continuously
setInterval(createConfetti, 200);

// Create initial burst of confetti
for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 30);
}

// Sound Effect (Optional - uncomment for celebration sound)
/*
function playSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Play sound on load
setTimeout(playSound, 500);
*/

// Add interactive click celebration
document.addEventListener('click', () => {
    for (let i = 0; i < 20; i++) {
        setTimeout(createConfetti, i * 20);
    }
});

// Mouse trail effect (optional enhancement)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

console.log('🎉 Happy Birthday Zunii! 🎉');
