// Member data with photos, names, positions, and quotes
const members = [
    {
        name: "Sinduja Jamisetty",
        position: "President",
        photo: "images/Sinduja-Jamisetty-e1746719522852.jpg",
        quote: "Leadership is not about being in charge, it's about taking care of those in your charge."
    },
    {
        name: "Samata Dintakurti",
        position: "Vice President",
        photo: "images/Dintakurti_Samata-e1732212233261.jpg",
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        name: "Aditi Ambatipudi",
        position: "Dean's Council Member",
        photo: "images/Aditi-Ambatipudi-e1746720902174.jpg",
        quote: "Innovation distinguishes between a leader and a follower."
    },
    {
        name: "Ritu Baraddi",
        position: "Dean's Council Member",
        photo: "images/Ritu-Baraddi-e1746721588910.jpg",
        quote: "The only way to do great work is to love what you do."
    },
    {
        name: "Anoushka Bharara",
        position: "Dean's Council Member",
        photo: "images/Anoushka-Bharara-e1746720645836.jpg",
        quote: "Believe you can and you're halfway there."
    },
    {
        name: "Pratisa Chhetry",
        position: "Dean's Council Member",
        photo: "images/Pratisa-Chhetry-e1746721645966.jpg",
        quote: "The future belongs to those who believe in the beauty of their dreams."
    },
    {
        name: "Akshitha Chintalapati",
        position: "Dean's Council Member",
        photo: "images/Chintalapati_Akshitha-e1732212277825.jpg",
        quote: "Excellence is not a skill, it's an attitude."
    },
    {
        name: "Tharini Kalidindi",
        position: "Dean's Council Member",
        photo: "images/Kalidindi_Tharini-e1732212044574.jpg",
        quote: "Don't watch the clock; do what it does. Keep going."
    },
    {
        name: "Sarah Lin",
        position: "Dean's Council Member",
        photo: "images/Lin_Sarah-e1732211997586.jpg",
        quote: "The way to get started is to quit talking and begin doing."
    },
    {
        name: "Nabeela Mariha",
        position: "Dean's Council Member",
        photo: "images/Nabeela-Mariha-e1746721952733.jpg",
        quote: "Success is walking from failure to failure with no loss of enthusiasm."
    },
    {
        name: "Sahiti Maturi",
        position: "Dean's Council Member",
        photo: "images/Maturi_Sahiti-e1732209833558.jpg",
        quote: "Your limitation—it's only your imagination."
    },
    {
        name: "Arousha Moavenzadeh Ghaznavi",
        position: "Dean's Council Member",
        photo: "images/Arousha-Moavenzadeh-Ghaznavi-e1746722293477.jpg",
        quote: "Great things never come from comfort zones."
    },
    {
        name: "Paul Nguyen",
        position: "Dean's Council Member",
        photo: "images/Paul-Nguyen-e1746722172931.jpg",
        quote: "Dream it. Wish it. Do it."
    },
    {
        name: "Sree Nimmalagadda",
        position: "Dean's Council Member",
        photo: "images/Sree-Nimmalagadda-e1746722062959.jpg",
        quote: "Don't be afraid to give up the good to go for the great."
    },
    {
        name: "Jeevana Ramakrishna",
        position: "Dean's Council Member",
        photo: "images/Ramakrishna_Jeevana-e1732209616736.jpg",
        quote: "If you are working on something exciting that you really care about, you don't have to be pushed."
    },
    {
        name: "Tasfia Tabassum Sharif",
        position: "Dean's Council Member",
        photo: "images/Tasfia-Tabassum-Sharif-e1746721745664.jpg",
        quote: "Innovation comes from people who take joy in their work."
    },
    {
        name: "Sid Sridharan",
        position: "Dean's Council Member",
        photo: "images/sid_sridharan.jpg",
        quote: "The harder you work for something, the greater you'll feel when you achieve it."
    },
    {
        name: "Yash Varma",
        position: "Dean's Council Member",
        photo: "images/Yash-Varma-e1746722411973.jpg",
        quote: "Success doesn't just find you. You have to go out and get it."
    },
    {
        name: "Anvitha Ventrapragada",
        position: "Dean's Council Member",
        photo: "images/anvitha_ventrapragada.jpg",
        quote: "Don't stop when you're tired. Stop when you're done."
    }
];

// Smooth auto-looping carousel functionality
class SmoothCarousel {
    constructor() {
        this.carousel = document.getElementById('membersCarousel');
        this.currentPosition = 0;
        this.cardWidth = 330; // Width of each card including margin
        this.speed = 0.5; // Pixels per frame
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        this.renderMembers();
        this.duplicateMembers(); // Create seamless loop
        this.startAnimation();
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.pause());
        this.carousel.addEventListener('mouseleave', () => this.resume());
    }
    
    renderMembers() {
        this.carousel.innerHTML = '';
        
        members.forEach((member, index) => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <img src="${member.photo}" alt="${member.name}" class="member-photo">
                <h4 class="member-name">${member.name}</h4>
                <p class="member-position">${member.position}</p>
                <p class="member-quote">${member.quote}</p>
            `;
            this.carousel.appendChild(memberCard);
        });
    }
    
    duplicateMembers() {
        // Duplicate all members to create seamless loop
        const originalCards = this.carousel.innerHTML;
        this.carousel.innerHTML = originalCards + originalCards;
    }
    
    animate() {
        if (!this.isPaused) {
            this.currentPosition -= this.speed;
            
            // Reset position when we've scrolled through one set of members
            const totalWidth = members.length * this.cardWidth;
            if (Math.abs(this.currentPosition) >= totalWidth) {
                this.currentPosition = 0;
            }
            
            this.carousel.style.transform = `translateX(${this.currentPosition}px)`;
        }
        
        requestAnimationFrame(() => this.animate());
    }
    
    startAnimation() {
        this.animate();
    }
    
    pause() {
        this.isPaused = true;
    }
    
    resume() {
        this.isPaused = false;
    }
}

// Smooth scrolling for navigation links
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Active navigation link highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SmoothCarousel();
    smoothScroll();
    initMobileMenu();
    initHeaderScroll();
    initActiveNavigation();
});

// Add mobile menu styles
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--white);
            flex-direction: column;
            padding: 2rem;
            box-shadow: var(--shadow-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-menu .nav-link {
            padding: 1rem;
            text-align: center;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .nav-menu .nav-link:last-child {
            border-bottom: none;
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);
