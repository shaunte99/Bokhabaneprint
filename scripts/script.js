// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animatedItems = document.querySelectorAll('.fade-in');

  const revealOnScroll = () => {
    animatedItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      const triggerBottom = window.innerHeight * 0.85;

      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // initial check
});
