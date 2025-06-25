 export default document.addEventListener('DOMContentLoaded', () => {
      // Initialize the first accordion as open
      const firstContent = document.querySelector('.accordion-content');
      firstContent.style.maxHeight = firstContent.scrollHeight + 'px';

      document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
          const content = button.nextElementSibling;
          const icon = button.querySelector('svg');

          // Close all accordions
          document.querySelectorAll('.accordion-content').forEach(el => {
            if (el !== content) {
              el.style.maxHeight = '0px';
            }
          });

          document.querySelectorAll('.accordion-button svg').forEach(svg => {
            if (svg !== icon) {
              svg.classList.remove('rotate-180');
            }
          });

          // Toggle the clicked accordion
          if (content.style.maxHeight === '0px' || !content.style.maxHeight) {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.add('rotate-180');
          } else {
            content.style.maxHeight = '0px';
            icon.classList.remove('rotate-180');
          }
        });
      });
    });