$(document).ready(function() {
    // Mobile Navbar Toggle
    $('#nav-toggler').click(function() {
        $('#mobile-sidebar').removeClass('-translate-x-full');
    });
    $('#close-sidebar').click(function() {
        $('#mobile-sidebar').addClass('-translate-x-full');
    });

    // Mobile Search Bar Toggle
    $('#mobile-search-icon').click(function() {
        $('#mobile-search-bar').toggleClass('active');
    });

    // Close mobile search bar when clicking outside
    $(document).click(function(event) {
        const searchBar = $('#mobile-search-bar');
        const searchIcon = $('#mobile-search-icon');
        if (!searchBar.is(event.target) && !searchIcon.is(event.target) && searchBar.has(event.target).length === 0) {
            searchBar.removeClass('active');
        }
    });

    // Hero Slider
    let currentSlide = 0;
    const slides = $('.hero-slide');
    const dots = $('.dot');
    
    // Initially show the first slide
    slides.eq(currentSlide).addClass('active');

    function showSlide(index) {
        slides.eq(currentSlide).removeClass('active');
        dots.eq(currentSlide).removeClass('active');
        currentSlide = index;
        slides.eq(currentSlide).addClass('active');
        dots.eq(currentSlide).addClass('active');
    }

    // Automatic slideshow for hero
    setInterval(function() {
        let nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }, 5000);

    // Discount Popup
    $('#discount-btn').click(function() {
        $('#discount-page').removeClass('-translate-x-full');
    });
    $('#close-discount').click(function() {
        $('#discount-page').addClass('-translate-x-full');
    });
});

// Featured This Month Tabs
function showTab(tabId) {
    const tabs = document.querySelectorAll('#featured-this-month .ftm-tab');
    const contents = document.querySelectorAll('#featured-this-month .ftm-tab-content');
    tabs.forEach(tab => tab.class RainerClass('active'));
    contents.forEach(content => content.classList.remove('active'));
    document.querySelector(`#featured-this-month .ftm-tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.querySelector(`#tab-${tabId}`).classList.add('active');
}

// Review Slider
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevReview');
    const nextBtn = document.getElementById('nextReview');
    const sliderLarge = document.getElementById('reviewSliderLargeInner');
    const sliderSmall = document.getElementById('reviewSliderSmallInner');
    const reviewSection = document.getElementById('zira-customer-reviews');

    if (!prevBtn || !nextBtn || !sliderLarge || !sliderSmall || !reviewSection) {
        console.error('Review slider elements not found:', { prevBtn, nextBtn, sliderLarge, sliderSmall, reviewSection });
        return;
    }

    let currentSlideLarge = 0;
    const totalSlidesLarge = 3;
    let currentSlideSmall = 0;
    const totalSlidesSmall = 6;
    let autoSlideInterval = null;
    let isTransitioning = false;

    function updateSlider() {
        if (isTransitioning) return;
        isTransitioning = true;
        if (window.innerWidth >= 768) {
            sliderLarge.style.transform = `translateX(-${currentSlideLarge * 100}%)`;
            prevBtn.classList.toggle('bg-yellow-600', currentSlideLarge > 0);
            prevBtn.classList.toggle('text-white', currentSlideLarge > 0);
            nextBtn.classList.toggle('bg-yellow-600', currentSlideLarge < totalSlidesLarge - 1);
            nextBtn.classList.toggle('text-white', currentSlideLarge < totalSlidesLarge - 1);
        } else {
            sliderSmall.style.transform = `translateX(-${currentSlideSmall * 100}%)`;
            prevBtn.classList.toggle('bg-yellow-600', currentSlideSmall > 0);
            prevBtn.classList.toggle('text-white', currentSlideSmall > 0);
            nextBtn.classList.toggle('bg-yellow-600', currentSlideSmall < totalSlidesSmall - 1);
            nextBtn.classList.toggle('text-white', currentSlideSmall < totalSlidesSmall - 1);
        }
        setTimeout(() => { isTransitioning = false; }, 700); // Match CSS transition duration
    }

    function startAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            if (isTransitioning) return;
            if (window.innerWidth >= 768) {
                currentSlideLarge = (currentSlideLarge + 1) % totalSlidesLarge;
            } else {
                currentSlideSmall = (currentSlideSmall + 1) % totalSlidesSmall;
            }
            updateSlider();
        }, 5000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    // Remove existing listeners to prevent duplicates
    prevBtn.removeEventListener('click', handlePrevClick);
    nextBtn.removeEventListener('click', handleNextClick);

    function handlePrevClick() {
        if (isTransitioning) return;
        try {
            stopAutoSlide(); // Stop auto-slide before manual update
            if (window.innerWidth >= 768) {
                if (currentSlideLarge > 0) {
                    currentSlideLarge--;
                    updateSlider();
                }
            } else {
                if (currentSlideSmall > 0) {
                    currentSlideSmall--;
                    updateSlider();
                }
            }
            startAutoSlide(); // Restart auto-slide
        } catch (e) {
            console.error('Error in prev button:', e);
        }
    }

    function handleNextClick() {
        if (isTransitioning) return;
        try {
            stopAutoSlide(); // Stop auto-slide before manual update
            if (window.innerWidth >= 768) {
                if (currentSlideLarge < totalSlidesLarge - 1) {
                    currentSlideLarge++;
                    updateSlider();
                }
            } else {
                if (currentSlideSmall < totalSlidesSmall - 1) {
                    currentSlideSmall++;
                    updateSlider();
                }
            }
            startAutoSlide(); // Restart auto-slide
        } catch (e) {
            console.error('Error in next button:', e);
        }
    }

    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            currentSlideLarge = Math.floor(currentSlideSmall / 2);
        } else {
            currentSlideSmall = currentSlideLarge * 2;
        }
        updateSlider();
    });

    reviewSection.addEventListener('mouseenter', stopAutoSlide);
    reviewSection.addEventListener('mouseleave', startAutoSlide);

    updateSlider();
    startAutoSlide();
});