document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out. Cory will get back to you soon!');
    this.reset();
  });
  