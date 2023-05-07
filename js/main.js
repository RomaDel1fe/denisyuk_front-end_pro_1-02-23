document.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.querySelector('.input');
  const infoElement = document.querySelector('.info');

  inputElement.addEventListener('focus', () => {
    infoElement.style.display = 'block';
    console.log('object');
  });

  inputElement.addEventListener('blur', () => {
    infoElement.style.display = 'none';
  });
});
