// Countdown bis Weihnachten
function updateCountdown() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // 25. Dezember
    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1); // Nächstes Jahr
    }

    const diff = christmas - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = `${days} Tage, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden`;
}

setInterval(updateCountdown, 1000);

// Weihnachtswunsch speichern und anzeigen
document.getElementById('saveWish').addEventListener('click', () => {
    const wish = document.getElementById('wishInput').value;
    if (wish.trim() === '') {
        alert('Bitte gib einen Wunsch ein!');
        return;
    }
    localStorage.setItem('christmasWish', wish);
    document.getElementById('wishDisplay').textContent = `🎁 Dein Wunsch: "${wish}"`;
});

// Wunsch beim Laden der Seite anzeigen
window.addEventListener('load', () => {
    const savedWish = localStorage.getItem('christmasWish');
    if (savedWish) {
        document.getElementById('wishDisplay').textContent = `🎁 Dein Wunsch: "${savedWish}"`;
    }
    updateCountdown();
});
