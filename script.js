document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations for hidden elements
  const hiddenObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, { threshold: 0.1 });
  document.querySelectorAll('.hidden').forEach((el) => hiddenObserver.observe(el));

  // Rotating text animation
  const sentences = [
      "Solving real-world problems with Python, Pandas, and machine learning.",
      "Building predictive models to uncover hidden patterns in data.",
      "Transforming raw data into actionable insights for impactful solutions."
  ];
  let currentSentence = 0;
  const dynamicText = document.getElementById("dynamic-text");
  function rotateSentences() {
      dynamicText.style.opacity = 0;
      setTimeout(() => {
          dynamicText.textContent = sentences[currentSentence];
          dynamicText.style.opacity = 1;
          currentSentence = (currentSentence + 1) % sentences.length;
      }, 500);
  }
  setInterval(rotateSentences, 3000);

  // Nav link active state
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight/3) {
              current = section.getAttribute('id');
          }
      });
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });

  // Progress bars animation (combined for both .progress and .progress-bar)
  const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const bar = entry.target;
              const width = bar.getAttribute('data-width') || bar.style.width;
              bar.style.width = width;
              progressObserver.unobserve(bar);
          }
      });
  }, { threshold: 0.5 });

  // Initialize all progress bars
  document.querySelectorAll('.progress, .progress-bar').forEach(bar => {
      const width = bar.style.width;
      if (width) {
          bar.setAttribute('data-width', width);
          bar.style.width = '0';
          progressObserver.observe(bar);
      }
  });

// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      try {
        // Send form data to FormSubmit
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Show success message
          successMessage.style.display = 'block';
          form.reset();
          
          // Hide message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('Error sending message. Please try again later.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }
    });
  }
});

  // Header scroll effect
  window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
          header.style.boxShadow = 'none';
      }
  });
});