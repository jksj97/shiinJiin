
// Function to handle menu item click
function handleMenuClick(event) {
    event.preventDefault(); // Prevent default link behavior
  
    var targetId = event.target.getAttribute('href'); // Get the target section ID from the clicked link
    var targetSection = document.querySelector(targetId); // Find the target section using the ID
  
    if (targetSection) {
        var targetOffset = targetSection.offsetTop; // Get the offset top position of the target section
        window.scrollTo({ top: targetOffset, behavior: 'smooth' }); // Scroll to the target section with smooth scrolling behavior
  
        // Remove 'active' class from all menu links
        var menuLinks = document.querySelectorAll('.sub-menu a');
        menuLinks.forEach(function(link) {
        link.classList.remove('active');
        });
  
        // Add 'active' class to the clicked menu link
        event.target.classList.add('active');
    }
    }
  
      // Function to handle scroll event
      function handleScroll() {
        var menu = document.querySelector('.sub-menu');
        if (window.pageYOffset > 0) {
          menu.classList.add('visible'); // Show the menu when scrolling starts
        } else {
          menu.classList.remove('visible'); // Hide the menu when scrolling reaches the top
        }
  
        // Get all section elements
        var sections = document.querySelectorAll('.section');
  
        // Loop through each section and check if it's in the viewport
        sections.forEach(function(section) {
          var rect = section.getBoundingClientRect();
          var link = document.querySelector('a[href="#' + section.id + '"]');
          if (rect.top <= 80 && rect.bottom >= 80) {
            link.classList.add('active'); // Add 'active' class to the menu link if section is in the viewport
          } else {
            link.classList.remove('active'); // Remove 'active' class from the menu link if section is not in the viewport
          }
        });
      }
  
      // Get all menu links and add click event listener to each
      var menuLinks = document.querySelectorAll('.sub-menu a');
      menuLinks.forEach(function(link) {
        link.addEventListener('click', handleMenuClick);
      });
  
      // Add scroll event listener to the window
      window.addEventListener('scroll', handleScroll);
  
      // Call the handleScroll() function on page load to activate the menu item for the current section
      handleScroll();






      
