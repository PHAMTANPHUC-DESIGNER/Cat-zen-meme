document.addEventListener('DOMContentLoaded', () => {
    const meritCountEl = document.getElementById('merit-count');
    const moButton = document.getElementById('mo-button');
    const catImage = document.getElementById('cat-image');
    const mantraText = document.getElementById('mantra-text');
    const floatContainer = document.getElementById('float-container');
    const lotusContainer = document.getElementById('lotus-petals');

    let count = 0;
    const mantras = [
        "Nam mô A Di Đà Phật...",
        "Tâm bất biến giữa dòng đời vạn biến...",
        "Hết tiền rồi, khấn thôi...",
        "Ăn no ngủ kỹ là chân lý...",
        "Cầu cho deadline biến mất...",
        "Vô tri là hạnh phúc...",
        "Tịnh tâm, tịnh tâm...",
        "Khổ tận cam lai, mèo mai có cá...",
        "Tất cả chỉ là phù du...",
        "Thiên linh linh, địa linh linh..."
    ];

    // Initialize background petals
    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.width = (Math.random() * 15 + 10) + 'px';
        petal.style.height = petal.style.width;
        lotusContainer.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 10000);
    }

    setInterval(createPetal, 1000);

    // Audio Setup (Web Audio API for simple 'cốc' sound)
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    function playMoSound() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    }

    // Interaction logic
    moButton.addEventListener('click', (e) => {
        // Increment count
        count++;
        meritCountEl.textContent = count;

        // Play sound
        playMoSound();

        // Animation for cat nod head 3D (bowing)
        catImage.classList.add('cat-nod');
        setTimeout(() => catImage.classList.remove('cat-nod'), 800);

        // Shake mo
        moButton.classList.add('shake');
        setTimeout(() => moButton.classList.remove('shake'), 500);

        // Change mantra randomly every 5 clicks
        if (count % 5 === 0) {
            const randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
            mantraText.style.opacity = 0;
            setTimeout(() => {
                mantraText.textContent = randomMantra;
                mantraText.style.opacity = 0.8;
            }, 200);
        }

        // Floating text
        createFloatingText(e.clientX, e.clientY);
    });

    function createFloatingText(x, y) {
        const float = document.createElement('div');
        float.className = 'floating-merit';
        float.textContent = '+1 Công Đức';
        float.style.left = (x - 40) + 'px';
        float.style.top = (y - 20) + 'px';
        
        floatContainer.appendChild(float);
        
        setTimeout(() => {
            float.remove();
        }, 1000);
    }

    // Interactive Hover effect on cat
    catImage.addEventListener('mousemove', (e) => {
        const rect = catImage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        catImage.style.transform = `perspective(500px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;
    });

    catImage.addEventListener('mouseleave', () => {
        catImage.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg)';
    });
});
