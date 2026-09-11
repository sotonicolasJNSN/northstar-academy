const themeButtons = document.querySelectorAll('.theme-card');
const form = document.getElementById('surveyForm');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');
const resultTitle = document.getElementById('resultTitle');
const resultIcon = document.getElementById('resultIcon');
const campusImage = document.getElementById('campusImage');
const imageLabel = document.getElementById('imageLabel');
const imageTitle = document.getElementById('imageTitle');
const carouselDots = document.getElementById('carouselDots');
const previousImage = document.getElementById('previousImage');
const nextImage = document.getElementById('nextImage');

let selectedTheme = 'Tecnología educativa';

const campusImages = [
  {
    source: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Estudiantes conversando en un campus universitario',
    label: 'Vida universitaria',
    title: 'Aprender, crear y crecer'
  },
  {
    source: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    alt: 'Edificio moderno de una institución universitaria',
    label: 'Espacios que inspiran',
    title: 'Un lugar para encontrar tu camino'
  },
  {
    source: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Edificio histórico de una universidad visto desde el campus',
    label: 'Comunidad académica',
    title: 'Tradición con mirada de futuro'
  },
  {
    source: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    alt: 'Castillo antiguo rodeado de montañas y paisaje verde',
    label: 'Patrimonio y paisaje',
    title: 'Historias que siguen inspirando'
  },
  {
    source: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Casa antigua de piedra junto a un paisaje natural',
    label: 'Arquitectura con memoria',
    title: 'Lugares para mirar más lejos'
  },
  {
    source: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Paisaje montañoso con una construcción antigua a la distancia',
    label: 'Horizontes abiertos',
    title: 'El aprendizaje también vive afuera'
  }
];

let currentImage = 0;

function renderCarousel() {
  const image = campusImages[currentImage];
  campusImage.style.opacity = '0.35';
  window.setTimeout(() => {
    campusImage.src = image.source;
    campusImage.alt = image.alt;
    imageLabel.textContent = image.label;
    imageTitle.textContent = image.title;
    campusImage.style.opacity = '1';
  }, 120);

  carouselDots.innerHTML = campusImages.map((_, index) => (
    `<button class="carousel-dot${index === currentImage ? ' active' : ''}" type="button" aria-label="Mostrar imagen ${index + 1}" aria-current="${index === currentImage}"></button>`
  )).join('');

  carouselDots.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentImage = index;
      renderCarousel();
    });
  });
}

previousImage.addEventListener('click', () => {
  currentImage = (currentImage - 1 + campusImages.length) % campusImages.length;
  renderCarousel();
});

nextImage.addEventListener('click', () => {
  currentImage = (currentImage + 1) % campusImages.length;
  renderCarousel();
});

renderCarousel();

function setFieldState(field, isValid) {
  if (!field) return;
  field.setAttribute('aria-invalid', String(!isValid));
  field.style.borderColor = isValid ? 'rgba(34, 77, 183, 0.22)' : 'rgba(201, 73, 73, 0.42)';
  field.style.boxShadow = isValid ? 'none' : '0 0 0 4px rgba(201, 73, 73, 0.08)';
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedTheme = button.dataset.theme;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');
  const goalField = document.getElementById('goal');
  const reasonField = document.getElementById('reason');
  const acceptField = document.getElementById('accept');

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const goal = goalField.value.trim();
  const reason = reasonField.value.trim();
  const age = document.getElementById('age').value.trim();
  const location = document.getElementById('location').value.trim() || 'No especificada';
  const profile = document.getElementById('profile').value;
  const contentType = document.querySelector('input[name="contentType"]:checked').value;
  const accept = acceptField.checked;

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const nameValid = name.length >= 2;
  const goalValid = goal.length >= 10;
  const reasonValid = reason.length >= 10;

  setFieldState(nameField, nameValid);
  setFieldState(emailField, emailValid);
  setFieldState(goalField, goalValid);
  setFieldState(reasonField, reasonValid);

  if (!nameValid || !emailValid || !goalValid || !reasonValid || !accept) {
    result.classList.remove('hidden');
    result.classList.add('error');
    resultTitle.textContent = 'Faltan datos por completar';
    resultIcon.textContent = '!';
    resultText.textContent = 'Revisa los campos obligatorios para continuar. Completa tu nombre, correo, objetivos y acepta la política antes de enviar la solicitud.';
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  const displayName = name;
  const displayEmail = email;
  const displayAge = age || 'No especificada';

  result.classList.remove('error');
  resultTitle.textContent = 'Solicitud enviada correctamente';
  resultIcon.textContent = '✓';
  resultText.textContent = `${displayName} (${displayEmail}) tiene ${displayAge} años y reside en ${location}. Su perfil es ${profile}, eligió ${selectedTheme} y prefirió una experiencia ${contentType.toLowerCase()}. Objetivo: ${goal}. Motivación: ${reason}. La solicitud ha sido registrada correctamente.`;
  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  form.reset();
  selectedTheme = 'Tecnología educativa';
  themeButtons.forEach((btn) => btn.classList.toggle('selected', btn.dataset.theme === selectedTheme));
});
