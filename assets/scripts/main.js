document.querySelector('#app').innerHTML = [
  renderAbout(),
  renderPublications(),
  renderExperience(),
  renderHonors(),
].join('');

document.querySelector('#current-year').textContent = new Date().getFullYear();

const themeToggle = document.querySelector('.theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme;

try {
  savedTheme = window.localStorage.getItem('theme');
} catch {
  savedTheme = null;
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const label = `Switch to ${nextTheme} theme`;
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
}

setTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  try {
    window.localStorage.setItem('theme', nextTheme);
  } catch {
    // Theme switching still works when storage is unavailable.
  }
});

const sections = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
sections.forEach((section) => revealObserver.observe(section));

const typewriter = document.querySelector('#typewriter');
const greeting = 'Exploring controllable and trustworthy generative AI.';
let characterIndex = 0;

function typeGreeting() {
  if (characterIndex <= greeting.length) {
    typewriter.textContent = greeting.slice(0, characterIndex);
    characterIndex += 1;
    window.setTimeout(typeGreeting, 38);
  }
}

typeGreeting();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

const cursorGlow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
}, { passive: true });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas = document.querySelector('#particle-canvas');
const context = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(42, Math.ceil(window.innerWidth / 32)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.16,
    vy: (Math.random() - 0.5) * 0.16,
    radius: Math.random() * 1.25 + 0.45,
  }));
}

function drawParticles() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = 'rgba(40, 100, 165, 0.22)';
    context.fill();

    particles.slice(index + 1).forEach((other) => {
      const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
      if (distance < 115) {
        context.beginPath();
        context.moveTo(particle.x, particle.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(40, 100, 165, ${0.055 * (1 - distance / 115)})`;
        context.stroke();
      }
    });
  });

  if (!reduceMotion) window.requestAnimationFrame(drawParticles);
}

resizeCanvas();
drawParticles();
window.addEventListener('resize', resizeCanvas, { passive: true });

const starElements = document.querySelectorAll('[data-star-repo]');
const repositories = [...new Set([...starElements].map((element) => element.dataset.starRepo))];

repositories.forEach(async (repository) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}`);
    if (!response.ok) return;
    const data = await response.json();
    document.querySelectorAll(`[data-star-repo="${repository}"]`).forEach((element) => {
      element.textContent = data.stargazers_count;
    });
  } catch {
    // Keep the embedded fallback count when GitHub is unavailable.
  }
});
