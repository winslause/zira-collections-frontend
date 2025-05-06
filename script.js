
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
        });
    

        
        function showTab(tabId) {
            const tabs = document.querySelectorAll('#featured-this-month .ftm-tab');
            const contents = document.querySelectorAll('#featured-this-month .ftm-tab-content');

            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            document.querySelector(`#featured-this-month .ftm-tab[onclick="showTab('${tabId}')"]`).classList.add('active');
            document.querySelector(`#tab-${tabId}`).classList.add('active');
        }
   
         //<!-- Slider Script -->
        
         const prevBtn = document.getElementById('prevReview');
         const nextBtn = document.getElementById('nextReview');
 
         // Large screen slider (2 cards per slide, 3 slides)
         const sliderLarge = document.getElementById('reviewSliderLargeInner');
         let currentSlideLarge = 0;
         const totalSlidesLarge = 3;
 
         // Small screen slider (1 card per slide, 6 slides)
         const sliderSmall = document.getElementById('reviewSliderSmallInner');
         let currentSlideSmall = 0;
         const totalSlidesSmall = 6;
 
         function updateSlider() {
             // Update large screen slider
             if (window.innerWidth >= 768) {
                 sliderLarge.style.transform = `translateX(-${currentSlideLarge * 100}%)`;
                 prevBtn.classList.remove('bg-yellow-600', 'text-white');
                 nextBtn.classList.remove('bg-yellow-600', 'text-white');
                 setTimeout(() => {
                     if (currentSlideLarge > 0) prevBtn.classList.add('bg-yellow-600', 'text-white');
                     if (currentSlideLarge < totalSlidesLarge - 1) nextBtn.classList.add('bg-yellow-600', 'text-white');
                 }, 50);
             }
             // Update small screen slider
             else {
                 sliderSmall.style.transform = `translateX(-${currentSlideSmall * 100}%)`;
                 prevBtn.classList.remove('bg-yellow-600', 'text-white');
                 nextBtn.classList.remove('bg-yellow-600', 'text-white');
                 setTimeout(() => {
                     if (currentSlideSmall > 0) prevBtn.classList.add('bg-yellow-600', 'text-white');
                     if (currentSlideSmall < totalSlidesSmall - 1) nextBtn.classList.add('bg-yellow-600', 'text-white');
                 }, 50);
             }
         }
 
         prevBtn.addEventListener('click', () => {
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
         });
 
         nextBtn.addEventListener('click', () => {
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
         });
 
         // Handle window resize to sync sliders
         window.addEventListener('resize', () => {
             // Sync the slide position when switching between breakpoints
             if (window.innerWidth >= 768) {
                 currentSlideLarge = Math.floor(currentSlideSmall / 2);
             } else {
                 currentSlideSmall = currentSlideLarge * 2;
             }
             updateSlider();
         });
 
         updateSlider();


         
   
    $(document).ready(function() {
        // Mobile Navbar Toggle
        $('#nav-toggler').click(function() {
            $('#mobile-sidebar').removeClass('-translate-x-full');
        });
        $('#close-sidebar').click(function() {
            $('#mobile-sidebar').addClass('-translate-x-full');
        });

        // Hero Slider
        let currentSlide = 0;
        const slides = $('.hero-slide');
        const dots = $('.dot');
        
        // Initially show the first slide
        slides.eq(currentSlide).addClass('active');

        function showSlide(index) {
            // Remove active class from current slide and dot
            slides.eq(currentSlide).removeClass('active');
            dots.eq(currentSlide).removeClass('active');

            // Update current slide index
            currentSlide = index;

            // Add active class to the new slide and dot
            slides.eq(currentSlide).addClass('active');
            dots.eq(currentSlide).addClass('active');
        }

        // Automatic slideshow
        setInterval(function() {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000); // Interval matches the animation duration

        // Discount Popup
        $('#discount-btn').click(function() {
            $('#discount-page').removeClass('-translate-x-full');
        });
        $('#close-discount').click(function() {
            $('#discount-page').addClass('-translate-x-full');
        });
    });

     