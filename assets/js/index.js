const btn = document.getElementById('hbtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

// Toggle menu open/close
btn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    overlay.classList.toggle('show');
    btn.classList.toggle('open');
});

// Close when clicking overlay
overlay.addEventListener('click', () => {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    btn.classList.remove('open');
});

// Active menu item highlight
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});