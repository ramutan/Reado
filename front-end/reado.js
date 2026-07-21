document.addEventListener('DOMContentLoaded', () => {
  
  // Navigation section switcher
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      // Highlight active nav tab
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Display target section
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // "Get Reado" main action button logic
  const getReadoBtn = document.getElementById('getReadoBtn');
  const downloadModal = document.getElementById('downloadModal');

  if (getReadoBtn) {
    getReadoBtn.addEventListener('click', () => {
      downloadModal.classList.remove('hidden');
      getReadoBtn.innerText = 'Redirecting...';
      getReadoBtn.disabled = true;

      setTimeout(() => {
        getReadoBtn.innerText = 'Get Reado';
        getReadoBtn.disabled = false;
        downloadModal.classList.add('hidden');
      }, 3000);
    });
  }

  // Contact form handler logic
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactSuccess.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        contactSuccess.classList.add('hidden');
      }, 4000);
    });
  }

});