/* ==================== Mobile Navigation Toggle ==================== */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Smooth scroll for buttons
    const scrollButtons = document.querySelectorAll('.btn');
    scrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

/* ==================== Intersection Observer for Animations ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.animationDelay = `${index * 0.1}s`;
        observer.observe(category);
    });

    // Observe stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.animationDelay = `${index * 0.1}s`;
        observer.observe(stat);
    });
});

/* ==================== Scroll Spy for Active Navigation ==================== */
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + 100;
    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            if (navLinks[index]) {
                navLinks[index].classList.add('active');
            }
        }
    });
});

/* ==================== Parallax Effect ==================== */
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

/* ==================== Form Submission Handler ==================== */
// Remove automatic interception. Only attach AJAX submit when form has `data-ajax="true"`.

// Contact form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const resultEl = document.getElementById('form-result');
    if (!contactForm) return;

    // Only attach AJAX submission when explicitly requested via `data-ajax="true"`.
    if (contactForm.getAttribute('data-ajax') !== 'true') return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        resultEl.textContent = 'Sending...';
        const data = {
            name: contactForm.name.value.trim(),
            email: contactForm.email.value.trim(),
            phone: contactForm.phone.value.trim(),
            message: contactForm.message.value.trim()
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if (res.ok) {
                resultEl.style.color = 'var(--primary-color)';
                resultEl.textContent = 'Message sent — thank you!';
                contactForm.reset();
            } else {
                resultEl.style.color = '#ff6b6b';
                resultEl.textContent = json.error || 'Failed to send message';
            }
        } catch (err) {
            resultEl.style.color = '#ff6b6b';
            resultEl.textContent = 'Network error — try again later.';
            console.error(err);
        }
        setTimeout(() => { resultEl.textContent = ''; }, 5000);
    });
});

/* ==================== Utility Functions ==================== */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add active class styling
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
        }
    `;
    document.head.appendChild(style);
});
