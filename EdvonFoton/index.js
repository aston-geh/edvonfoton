const elements = document.querySelectorAll('.Sida1, .Sida2');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.6) { // more than half visible
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: [0, 0.5, 1] }
);

elements.forEach(el => observer.observe(el));
