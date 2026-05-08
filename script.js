const bootImage = document.getElementById('bootImage');
const dots = document.querySelectorAll('.dot');

const bootImages = [
  'images/boot1.png',
  'images/boot2.png',
  'images/boot3.png',
  'images/boot4.png', 
];

dots.forEach(dot => {
  dot.addEventListener('click', function() {
    const index = this.getAttribute('data-index');
    
    dots.forEach(d => d.classList.remove('active'));
    this.classList.add('active');
    
    // Drop down animation
    bootImage.style.animation = 'none';
    bootImage.offsetHeight; // trigger reflow

    bootImage.src = bootImages[index];

    bootImage.onload = function() {
      bootImage.style.animation = 'dropDown 0.8s ease-out';
    };
  });
});