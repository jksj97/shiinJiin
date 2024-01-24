// 스크롤 섹션 애니메이션
const sections = document.querySelectorAll('section');

function checkSectionInView() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop - windowHeight <= 0) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkSectionInView);


const backgroundOverlay = document.getElementById('background-overlay');

function handleScroll() {
  const scrollTop = window.pageYOffset;
  const bannerHeight = document.getElementById('main-banner').offsetHeight;
  const overlayOpacity = scrollTop / bannerHeight;

  backgroundOverlay.style.backgroundColor = `rgba(0, 0, 0, ${overlayOpacity})`;
}

window.addEventListener('scroll', handleScroll);




//   to top, to bottom
// Button to scroll to the top
const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll event listener
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const halfHeight = totalHeight / 2;

  if (scrollPosition > halfHeight) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});




const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

const boxList = document.querySelectorAll('.box');

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach(el => observer.observe(el));



// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.classList.add("show");
  modal.style.display = "block";
  setTimeout(function () {
    modal.getElementsByClassName("modal-content")[0].classList.add("show");
  }, 50);
}

// Function to close the modal
function closeModal() {
  modal.classList.remove("show");
  modal.getElementsByClassName("modal-content")[0].classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 300);
}

// Event listener to open the modal when the button is clicked
btn.addEventListener("click", openModal);

// Event listener to close the modal when the <span> element is clicked
span.addEventListener("click", closeModal);

// Event listener to close the modal when the user clicks anywhere outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});


// Function to update the countdown
function updateCountdown() {
  // Get the current date and time
  var now = new Date();

  // Set the target date and time to tomorrow at 12:00 PM
  var target = new Date();
  target.setDate(target.getDate() + 1);
  target.setHours(12, 0, 0, 0);

  // Calculate the time difference in milliseconds
  var diff = target - now;

  // Calculate the remaining hours, minutes, and seconds
  var hours = Math.floor(diff / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Format the time remaining
  var countdown = hours + "시간 " + minutes + "분 " + seconds + "초";

  // Display the time remaining on the page
  document.getElementById("countdown").innerHTML = countdown;

  // Check if the target time has passed
  if (diff <= 0) {
    // Reset the countdown for the next day
    updateCountdown();
  } else {
    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
  }
}

// Start the countdown
updateCountdown();

// 


    var splide = new Splide( '.splide' );
    var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
    
    // Updates the bar width whenever the carousel moves:
    splide.on( 'mounted move', function () {
      var end  = splide.Components.Controller.getEnd() + 1;
      var rate = Math.min( ( splide.index + 1 ) / end, 1 );
      bar.style.width = String( 100 * rate ) + '%';
    } );
    
    splide.mount();
