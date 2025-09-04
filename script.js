const photoDisplay = document.getElementById('photoDisplay');
const takePhoto = document.getElementById('takePhoto');
const testimonialList = document.getElementById('testimonialList');
const cameraSelect = document.getElementById('camera');
const filterSelect = document.getElementById('filter');
const flashOverlay = document.getElementById('flashOverlay');

const donkeys = [
  'images/donkey1.jpg',
  'images/donkey2.jpg',
  'images/donkey3.jpg'
];

const testimonials = [
  "Wow, this turned out better than my wedding photos! Truly magical. – Alex P.",
  "The lighting really captured my essence… even the donkey seems impressed. – Morgan L.",
  "I’ve never felt more professional taking a photo. 10/10 would frame it. – Jamie S.",
  "Finally, a filter that truly brings out my inner… donkey. – Casey R.",
  "This studio made me feel like a celebrity photographer. – Taylor R.",
  "Absolutely breathtaking. The donkey adds a sophisticated charm. – Jordan M.",
  "My friends can’t stop laughing — but in a good way! – Riley K."
];

takePhoto.addEventListener('click', () => {
  // Random donkey
  const donkey = donkeys[Math.floor(Math.random() * donkeys.length)];
  photoDisplay.src = donkey;

  // Apply filter
  const filter = filterSelect.value;
  switch(filter) {
    case 'Sepia':
      photoDisplay.style.filter = 'sepia(1) contrast(1.2)';
      break;
    case 'Black & White':
      photoDisplay.style.filter = 'grayscale(1) contrast(1.2)';
      break;
    case 'Vibrant':
      photoDisplay.style.filter = 'saturate(2) brightness(1.1)';
      break;
    default:
      photoDisplay.style.filter = 'none';
  }

  // Apply camera style
  const camera = cameraSelect.value;
  switch(camera) {
    case 'DSLR':
      photoDisplay.style.border = '5px solid #222';
      photoDisplay.style.borderRadius = '10px';
      photoDisplay.style.boxShadow = '0 10px 20px rgba(0,0,0,0.5)';
      break;
    case 'Polaroid':
      photoDisplay.style.border = '15px solid #fff';
      photoDisplay.style.borderBottom = '50px solid #fff';
      photoDisplay.style.borderRadius = '0';
      photoDisplay.style.boxShadow = '0 8px 15px rgba(0,0,0,0.3)';
      break;
    case 'Vintage':
      photoDisplay.style.border = '10px double #8B4513';
      photoDisplay.style.borderRadius = '15px';
      photoDisplay.style.boxShadow = '0 5px 10px rgba(0,0,0,0.4)';
      break;
    default:
      photoDisplay.style.border = 'none';
      photoDisplay.style.boxShadow = 'none';
  }

  // Trigger shake animation
  photoDisplay.classList.remove('shake');
  void photoDisplay.offsetWidth;
  photoDisplay.classList.add('shake');

  // Trigger flash animation
  flashOverlay.classList.remove('flash');
  void flashOverlay.offsetWidth;
  flashOverlay.classList.add('flash');

  // Random testimonial
  const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
  const li = document.createElement('li');
  li.textContent = testimonial;
  testimonialList.prepend(li);
});
