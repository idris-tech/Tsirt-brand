// Global UI Logic
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header Transition
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
            header.style.padding = '10px 0';
        } else {
            header.classList.remove('sticky');
            header.style.padding = '0';
        }
    });

    // 2. Intersection Observer for Scroll Animations (AOS)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

    // 3. Simple Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-slide');
    if (testimonials.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            testimonials.forEach(s => s.style.display = 'none');
            currentSlide = (currentSlide + 1) % testimonials.length;
            testimonials[currentSlide].style.display = 'block';
        }, 5000);
    }

    // 4. Cart Count Refresh (Global)
    if (typeof cartManager !== 'undefined') {
        cartManager.updateCartCount();
    }

    // --- Elite Pan Menu Injection & Logic ---
    const headerContainer = document.querySelector('header .container');
    if (headerContainer && window.innerWidth <= 768) {
        // 1. Inject Menu Toggle (Burger)
        const toggle = document.createElement('div');
        toggle.className = 'menu-toggle';
        toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        headerContainer.prepend(toggle);

        // 2. Inject Pan Menu & Overlay
        const panMenu = document.createElement('div');
        panMenu.className = 'mobile-pan-menu';
        panMenu.innerHTML = `
            <div class="close-menu"><i class="fa-solid fa-xmark"></i></div>
            <a href="index.html" class="logo" style="margin-bottom: 20px;">ELITE<span>WHOLESALE</span></a>
            <a href="index.html" class="mobile-link">Home</a>
            <a href="shop.html" class="mobile-link">Shop</a>
            <a href="wholesale.html" class="mobile-link">Wholesale</a>
            <a href="about.html" class="mobile-link">About</a>
            <a href="contact.html" class="mobile-link">Contact</a>
        `;
        document.body.appendChild(panMenu);

        const overlay = document.createElement('div');
        overlay.className = 'pan-overlay';
        document.body.appendChild(overlay);

        // 3. Toggle Logic
        const closeBtn = panMenu.querySelector('.close-menu');
        
        const openMenu = () => {
            panMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            panMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        toggle.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);
    }
});
