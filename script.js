// Toggle menu navigasi untuk tampilan HP (Responsive Menu)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Tutup menu saat salah satu link diklik di HP
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Efek mengubah warna menu aktif saat di-scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- EFEK KETIK LOGO NAVBAR OTOMATIS & NGULANG TERUS (LOOPING) ---
const textLogo = "Portofolio Web Development";
let iLogo = 0;
let isDeletingLogo = false;
const speedTyping = 90;   // Kecepatan saat mengetik
const speedDeleting = 50; // Kecepatan saat menghapus
const delayBetween = 2000; // Jeda waktu pas teks selesai penuh sebelum dihapus

function loopTypeWriterLogo() {
    const logoElement = document.getElementById("logo-text");
    if (!logoElement) return;

    if (!isDeletingLogo) {
        // Proses Mengetik Maju
        logoElement.innerHTML = textLogo.substring(0, iLogo + 1);
        iLogo++;
        if (iLogo === textLogo.length) {
            // Kalau sudah penuh, tunggu 2 detik lalu mulai hapus
            setTimeout(() => { isDeletingLogo = true; }, delayBetween);
        }
    } else {
        // Proses Menghapus Mundur
        logoElement.innerHTML = textLogo.substring(0, iLogo - 1);
        iLogo--;
        if (iLogo === 0) {
            // Kalau sudah habis terhapus, mulai ketik lagi dari awal
            isDeletingLogo = false;
        }
    }

    const currentSpeed = isDeletingLogo ? speedDeleting : speedTyping;
    setTimeout(loopTypeWriterLogo, currentSpeed);
}

// Jalankan animasi saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
    loopTypeWriterLogo();
});