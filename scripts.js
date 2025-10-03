document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.card-overlay');
  const mainContent = document.querySelector('.main-content');

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (mainContent) {
    requestAnimationFrame(function () {
      mainContent.classList.add('is-visible');
    });
  }

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(function (card) {
    const liveLink = card.dataset.live;
    const codeLink = card.dataset.code;
    const titleEl = card.querySelector('.card-front h3');
    const liveButton = card.querySelector('.card-live');
    const codeButton = card.querySelector('.card-code');
    const backTitle = card.querySelector('.card-back-title');

    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    if (backTitle && titleEl) {
      backTitle.textContent = titleEl.textContent;
    }

    if (liveButton) {
      if (liveLink) {
        liveButton.setAttribute('href', liveLink);
      } else {
        liveButton.setAttribute('aria-disabled', 'true');
        liveButton.textContent = 'Live Link Unavailable';
      }
    }

    if (codeButton) {
      if (codeLink && codeLink !== '#') {
        codeButton.setAttribute('href', codeLink);
      } else {
        codeButton.setAttribute('aria-disabled', 'true');
        codeButton.textContent = 'Code Sample Coming Soon';
      }
    }
  });

  function setOverlayState(active) {
    if (!overlay) {
      return;
    }

    overlay.classList.toggle('active', active);
    document.body.classList.toggle('overlay-active', active);
  }

  function closeAllCards() {
    projectCards.forEach(function (card) {
      card.classList.remove('flipped');
    });
    setOverlayState(false);
  }

  projectCards.forEach(function (card) {
    card.addEventListener('click', function (event) {
      if (event.target.closest('.card-back-actions')) {
        return;
      }

      const shouldFlip = !card.classList.contains('flipped');

      projectCards.forEach(function (otherCard) {
        if (otherCard !== card) {
          otherCard.classList.remove('flipped');
        }
      });

      if (shouldFlip) {
        card.classList.add('flipped');
        card.focus();
      } else {
        card.classList.remove('flipped');
      }

      const hasOpenCard = document.querySelector('.project-card.flipped');

      setOverlayState(Boolean(hasOpenCard));
    });

    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        closeAllCards();
      }
    });
  });

  document.querySelectorAll('.card-back-actions .card-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.stopPropagation();

      if (button.getAttribute('aria-disabled') === 'true') {
        event.preventDefault();
        return;
      }

      requestAnimationFrame(function () {
        button.blur();
      });
    });
  });

  if (overlay) {
    overlay.addEventListener('click', closeAllCards);
  }

  document.addEventListener('keyup', function (event) {
    if (event.key === 'Escape') {
      closeAllCards();
    }
  });

  document.querySelectorAll('.btn-resume').forEach(function (button) {
    button.addEventListener('click', function () {
      requestAnimationFrame(function () {
        button.blur();
      });
    });
  });
});
