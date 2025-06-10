// Carousel Configuration
const carouselImages = [
    {
        src: 'assets/screenshots/screenshot1.jpg',
        alt: 'UHC Gameplay Screenshot',
        caption: 'Epic UHC Battle'
    },
    {
        src: 'assets/screenshots/screenshot2.jpg',
        alt: 'Sword Mode Screenshot',
        caption: 'Sword Mode Duel'
    },
    {
        src: 'assets/screenshots/screenshot3.jpg',
        alt: 'Server Event Screenshot',
        caption: 'Community Event'
    },
    {
        src: 'assets/screenshots/screenshot4.jpg',
        alt: 'Tournament Screenshot',
        caption: 'Tournament Finals'
    }
];

class Carousel {
    constructor(container, images) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.images = images;
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        // Create image elements
        this.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
                <div class="carousel-caption">${image.caption}</div>
            `;
            this.track.appendChild(slide);
        });

        // Add navigation buttons
        const prevButton = this.container.querySelector('.carousel-button.prev');
        const nextButton = this.container.querySelector('.carousel-button.next');

        prevButton.addEventListener('click', () => this.navigate('prev'));
        nextButton.addEventListener('click', () => this.navigate('next'));

        // Add touch support
        this.track.addEventListener('touchstart', (e) => {
            this.touchStartX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate('prev');
            if (e.key === 'ArrowRight') this.navigate('next');
        });

        // Initialize autoplay
        this.startAutoplay();

        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());

        // Initial update
        this.updateSlides();
    }

    navigate(direction) {
        if (direction === 'prev') {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }

        this.updateSlides();
    }

    updateSlides() {
        const slideWidth = this.container.offsetWidth;
        const offset = -this.currentIndex * slideWidth;
        this.track.style.transform = `translateX(${offset}px)`;
    }

    handleSwipe() {
        const swipeDistance = this.touchEndX - this.touchStartX;
        const minSwipeDistance = 50;

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                this.navigate('prev');
            } else {
                this.navigate('next');
            }
        }
    }

    startAutoplay() {
        if (this.autoplayInterval) return;
        this.autoplayInterval = setInterval(() => this.navigate('next'), 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        new Carousel(carouselContainer, carouselImages);
    }
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            const track = carousel.querySelector('.carousel-track');
            const slides = track.querySelectorAll('.carousel-slide');
            const slideWidth = carousel.offsetWidth;

            slides.forEach((slide, index) => {
                slide.style.width = `${slideWidth}px`;
            });

            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
    }, 100);
});