// js/script.js

/**
 * Toggle mobile menu với animation
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu')
    const btn = document.getElementById('hamburger-btn')
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')
    
    menu.classList.toggle('hidden')
    
    if (!menu.classList.contains('hidden')) {
        line1.style.transform = 'rotate(45deg) translate(5px, 5px)'
        line2.style.opacity = '0'
        line3.style.transform = 'rotate(-45deg) translate(5px, -5px)'
        btn.setAttribute('aria-expanded', 'true')
    } else {
        line1.style.transform = 'none'
        line2.style.opacity = '1'
        line3.style.transform = 'none'
        btn.setAttribute('aria-expanded', 'false')
    }
}

/**
 * Show modal
 */
function toggleModal(show) {
    const modal = document.getElementById('consultationModal');
    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Chặn cuộn trang khi mở modal
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}
window.onclick = function(event) {
    const modal = document.getElementById('consultationModal');
    if (event.target == modal) {
        toggleModal(false);
    }
}

/**
 * Khởi chạy khi DOM sẵn sàng
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu
    const hamburgerBtn = document.getElementById('hamburger-btn')
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMobileMenu)
    }

    // Đóng menu khi nhấn ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const menu = document.getElementById('mobile-menu')
            if (menu && !menu.classList.contains('hidden')) {
                toggleMobileMenu()
            }
        }
    })
})

// Toggle Mobile Dropdown (cấp 1)
function toggleMobileDropdown(button) {
    const submenu = button.parentElement.querySelector('.mobile-submenu');
    const icon = button.querySelector('i[data-lucide]');
    
    submenu.classList.toggle('hidden');
    
    if (icon) {
        icon.style.transform = submenu.classList.contains('hidden') 
            ? 'rotate(0deg)' 
            : 'rotate(180deg)';
    }
}

// Toggle Mobile Sub Dropdown (cấp 2)
function toggleMobileSubDropdown(button) {
    const subsubmenu = button.parentElement.querySelector('.mobile-subsubmenu');
    const chevronContainer = button.querySelector('.chevron-icon');
    
    if (!subsubmenu || !chevronContainer) return;

    // Toggle hiển thị submenu
    subsubmenu.classList.toggle('hidden');

    // Xoay icon SVG
    if (subsubmenu.classList.contains('hidden')) {
        chevronContainer.style.transform = 'rotate(0deg)';
    } else {
        chevronContainer.style.transform = 'rotate(90deg)';
    }
}

function toggleUserDropdown (button) {
    const btn = button.parentElement.querySelector("#userMenuBtn");
    const menu = button.parentElement.querySelector("#dropdownMenu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    // click ra ngoài thì đóng
    button.parentElement.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("hidden");
        }
    });
}

function toggleActive (button) {
    const links = button.parentElement.querySelectorAll(".nav-link");

    links.forEach(link => link.classList.remove('active'));

    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "fade", 
        fadeEffect: {
            crossFade: true
        },

        // Cấu hình dấu chấm phân trang
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        loop: true, 

        speed: 800, 
    });
});