document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.sample02__button');
  
  if (button) {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);
      button.classList.toggle('active');
      
      const textElement = button.querySelector('.text');
      if (textElement) {
        textElement.textContent = isExpanded ? 'MENU' : 'CLOSE';
      }
    });
  }
}); 