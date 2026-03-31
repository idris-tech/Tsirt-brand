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
});
