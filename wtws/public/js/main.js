function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function filterSports(query) {
  const q = query.toLowerCase().trim();
  const cards = document.querySelectorAll('.sport-card');
  const noResults = document.getElementById('noResults');
  let visible = 0;
  cards.forEach(card => {
    const text = (card.dataset.sport || '') + card.textContent.toLowerCase();
    const match = !q || text.includes(q);
    card.style.display = match ? 'flex' : 'none';
    if (match) visible++;
  });
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
}

document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.menu-toggle');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Highlight active nav link
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});
