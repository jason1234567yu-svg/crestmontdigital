// Slide data
const slides = [
    {
        title: "How We Generate Exclusive Market Appraisals",
        subtitle: "",
        content: "",
        buttonText: "Continue To Next Slide",
        isVideoSlide: true
    },
    {
        title: "We'll Guarantee You <span class='text-red-500'>6</span> Listing Appointments Guaranteed In <span class='text-red-500'>90 Days</span>",
        subtitle: "OR You <span class='text-red-500'>DON'T</span> Pay...",
        content: "Briefly Click Through These Slides So You Can See How Our Offer Works",
        buttonText: "Press The Right Arrow To Continue"
    },
    {
        title: "Our Proven System Gets Results",
        subtitle: "Here's What You Get:",
        content: "• Targeted lead generation campaigns\n• Professional follow-up sequences\n• 24/7 Automated Lead Nurturing\n• Guaranteed listing appointments",
        buttonText: "Continue To See More"
    },
    {
        title: "Real Results From Real Agents",
        subtitle: "Success Stories:",
        content: "\"I went from 2 listings per month to 8 listings per month in just 60 days using this system. The quality of leads is incredible!\" - Sarah M., Top Producer",
        buttonText: "See How It Works"
    },
    {
        title: "Ready To Get Started?",
        subtitle: "Book Your Strategy Call Now",
        content: "We'll analyze your current marketing, identify gaps, and show you exactly how to implement our system in your market.",
        buttonText: "Schedule Below"
    }
];

// Current slide index
let currentSlide = 0;

// DOM elements
const slideTitle = document.getElementById('slide-title');
const slideSubtitle = document.getElementById('slide-subtitle');
const slideContent = document.getElementById('slide-content');
const buttonText = document.getElementById('button-text');
const videoSection = document.getElementById('video-section');
const prevBtn = document.getElementById('prev-btn');
const slideIndicators = document.getElementById('slide-indicators');
const slideNumbers = document.getElementById('slide-numbers');
const slideCounter = document.getElementById('slide-counter');

// Initialize the presentation
function init() {
    createSlideIndicators();
    createSlideNumbers();
    updateSlide();
}

// Create slide indicators
function createSlideIndicators() {
    slideIndicators.innerHTML = '';
    slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `w-3 h-3 rounded-full transition-colors ${
            currentSlide === index ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
        }`;
        indicator.onclick = () => goToSlide(index);
        slideIndicators.appendChild(indicator);
    });
}

// Create slide numbers
function createSlideNumbers() {
    slideNumbers.innerHTML = '';
    
    // Add numbered buttons for each slide
    slides.forEach((_, index) => {
        const numberBtn = document.createElement('button');
        numberBtn.className = `w-8 h-8 rounded text-white text-sm transition-colors ${
            currentSlide === index ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
        }`;
        numberBtn.textContent = index + 1;
        numberBtn.onclick = () => goToSlide(index);
        slideNumbers.appendChild(numberBtn);
    });
    
    // Add next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'w-8 h-8 bg-gray-500 hover:bg-gray-400 rounded text-white text-sm transition-colors';
    nextBtn.textContent = '>';
    nextBtn.onclick = nextSlide;
    slideNumbers.appendChild(nextBtn);
}

// Update slide content
function updateSlide() {
    const slide = slides[currentSlide];
    
    // Update content
    slideTitle.innerHTML = slide.title;
    slideSubtitle.innerHTML = slide.subtitle;
    buttonText.textContent = slide.buttonText;
    
    // Handle content with line breaks
    if (slide.content) {
        const contentLines = slide.content.split('\n');
        slideContent.innerHTML = contentLines.map(line => `<p class="mb-2 whitespace-pre-line">${line}</p>`).join('');
    } else {
        slideContent.innerHTML = '';
    }
    
    // Show/hide video section
    videoSection.style.display = slide.isVideoSlide ? 'block' : 'none';
    
    // Update navigation
    prevBtn.disabled = currentSlide === 0;
    
    // Update indicators
    updateIndicators();
    updateSlideNumbers();
    
    // Update counter
    slideCounter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
}

// Update slide indicators
function updateIndicators() {
    const indicators = slideIndicators.children;
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = `w-3 h-3 rounded-full transition-colors ${
            currentSlide === i ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
        }`;
    }
}

// Update slide numbers
function updateSlideNumbers() {
    const numbers = slideNumbers.children;
    for (let i = 0; i < numbers.length - 1; i++) { // -1 to exclude the ">" button
        numbers[i].className = `w-8 h-8 rounded text-white text-sm transition-colors ${
            currentSlide === i ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'
        }`;
    }
}

// Navigation functions
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

// Handle booking button click
function handleBookingClick() {
    window.open('https://cal.com/jasoniheem-6pfhnd/30min', '_blank');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);