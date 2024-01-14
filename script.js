document.addEventListener('DOMContentLoaded', () => {
  // Select all navigation links and content sections
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const contentSections = document.querySelectorAll('#main-content .content');

  // Add click event listeners to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Hide all content sections
      contentSections.forEach(section => {
        section.style.display = 'none';
      });

      // Remove 'active' class from all navigation links
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Show the content section corresponding to the clicked link
      const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
      document.getElementById(targetId).style.display = 'block';

      // Add 'active' class to the clicked navigation link
      this.classList.add('active');
    });
  });

  // Automatically click the first link to display the first section
  if (navLinks.length > 0) {
    navLinks[0].click();
  }
});

// JavaScript for modal functions
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal if clicked outside the content
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};
