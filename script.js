// Get the current page's filename (e.g., "about.html")
const currentPage = window.location.pathname.split("/").pop();

// Select all nav links
const navLinks = document.querySelectorAll("nav a");

// Loop through them and add 'active' class to the matching one
navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
