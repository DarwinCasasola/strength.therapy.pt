document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('sticky-nav');
    } else {
      header.classList.remove('sticky-nav');
    }
  });

  // Contact Form Submission Handler (only on contact page)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out. Cory will get back to you soon!');
      this.reset();
    });
  }

  // Fetch and render testimonials (only on index page)
  const testimonialSection = document.getElementById('testimonial-container');
  if (testimonialSection) {
    fetch('data/testimonials.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        testimonialSection.innerHTML = data.map(person => `
          <div class="mb-4" data-aos="fade-up">
            <blockquote class="blockquote">
              <p>"${person.quote}"</p>
              <footer class="blockquote-footer text-white-50">${person.name}</footer>
            </blockquote>
          </div>
        `).join('');
      })
      .catch(err => {
        console.error("Fetch error:", err);
        testimonialSection.innerHTML = `<p class="text-danger">Could not load testimonials at this time.</p>`;
      });
  }
});
