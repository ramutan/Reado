document.addEventListener('DOMContentLoaded', () => {
  
  // Navigation section switcher
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // "Get Reado" button logic
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

  // Email format validation helper function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Contact form handler with strict email check
  const contactForm = document.getElementById('contactForm');
  const userEmail = document.getElementById('userEmail');
  const emailError = document.getElementById('emailError');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    
    // Clear error style as user types
    userEmail.addEventListener('input', () => {
      userEmail.classList.remove('invalid-field');
      emailError.classList.add('hidden');
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const emailValue = userEmail.value.trim();

      // Check if email follows standard format (user@domain.extension)
      if (!isValidEmail(emailValue)) {
        userEmail.classList.add('invalid-field');
        emailError.classList.remove('hidden');
        return; // Prevent submission
      }

      // Successful submission
      userEmail.classList.remove('invalid-field');
      emailError.classList.add('hidden');
      contactSuccess.classList.remove('hidden');
      contactForm.reset();

      setTimeout(() => {
        contactSuccess.classList.add('hidden');
      }, 4000);
    });
  }

});