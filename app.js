const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotImages = document.querySelectorAll('.dot-image');
let currentSlide = 0;
let slideInterval; // Declare slideInterval using let


function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${10 * (index - slideIndex)}%)`;
    });
}



// Update your setActiveDot function
function setActiveDot(dotIndex) {
    dotImages.forEach((dot, index) => {
        if (index === dotIndex) {
            dot.src = 'public/1.svg'; // Active dot image 
            dot.classList.add('active-dot');
        } else {
            dot.src = 'public/2.svg'; // Inactive dot image
            dot.classList.remove('active-dot');
        }
    });
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    setActiveDot(currentSlide);
}

// Auto-slide every 3 seconds
slideInterval = setInterval(nextSlide, 3000); // Use let for reassignment

// Pause auto-slide when hovering over the slider
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume auto-slide when mouse leaves the slider
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000); // Reassign slideInterval
});

// Manual navigation using dots
dotImages.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        setActiveDot(currentSlide);
    });
});

// Initial setup
showSlide(currentSlide);
setActiveDot(currentSlide);

function openfylehq(){
    window.open('https://www.fylehq.com', '_blank');
}

function changeImage(index) {
    // Hide all images
    document.querySelectorAll('.img-thumbnail').forEach(img => {
      img.classList.remove('active-img');
    });

    // Show the selected image
    document.getElementById('image' + index).classList.add('active-img');

    // Remove active class from all boxes
    document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('active-box');
    });

    // Add active class to the selected box
    document.getElementById('box' + index).classList.add('active-box');
  }