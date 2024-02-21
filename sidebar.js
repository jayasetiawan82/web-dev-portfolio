document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".scroll-link");
  
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // Your existing code for sidebar toggle
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");
  
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("show-sidebar");
    });
  
    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("show-sidebar");
    });
  });
  