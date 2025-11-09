document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => document.body.classList.add('page-loaded'));

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const projects = [
    {
      id: 'elm-resources',
      title: 'ELM Resources',
      image: 'assets/ELM_resources.png',
      imageAlt: 'Screens from the ELM Resources website',
      description:
        'A collection of resources for teachers and parents using the ELM software in the Learning Toolkit+.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Implemented a new responsive layout and refreshed outdated documents with updated versions across the site.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/resources/elm/teacher/en/',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1H8Totjon46mXEIb00_alj-2MAyyPxaQl?usp=sharing',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'abra-resources',
      title: 'ABRA Resources',
      image: 'assets/ABRA_resources.png',
      imageAlt: 'ABRA Resources website preview',
      description:
        'A companion site for ABRA software that curates downloadable resources for teachers and parents.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Used JSON to manage document metadata, updated outdated resources, and added a new section based on requests.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/resources/abra/teacher/en/',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1D2smxg5gQTD7mskq3hoN4zvAH--qcqpk?usp=sharing',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'ltk-reads',
      title: 'LTK READS',
      image: 'assets/LTK_READS.jpg',
      imageAlt: 'LTK READS interface preview',
      description:
        'A multilingual story catalogue with filters for theme, reading level, language, and country of origin.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Implemented a new About page accessible from the footer, maintained consistent UI/UX standards, and fixed reported bugs.',
      ],
      tags: ['HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Live Website',
          url: 'https://literacy.concordia.ca/reads/index.html#en',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1RIy8eFUWc_hQwjTIE1bXngXIWsucl-Zm?usp=drive_link',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'learning-toolkit',
      title: 'Learning Toolkit+',
      image: 'assets/LTK+.png',
      imageAlt: 'Learning Toolkit+ dashboard preview',
      description:
        'A suite of tools designed to nurture literacy, numeracy, information literacy, and self-regulated learning.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Resolved reported bugs and PHP/MySQL deprecations to add support for the latest PHP and MySQL versions.',
      ],
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      links: [
        {
          label: 'Project Overview',
          url: 'https://drive.google.com/drive/folders/11tOAIjJadtTOJu9FQgITZCaOoJnCZ9G-?usp=drive_link',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
    {
      id: 'readsmanage',
      title: 'Readsmanage',
      image: 'assets/Readsmanage.png',
      imageAlt: 'Readsmanage application preview',
      description:
        'A secure platform for creating and managing books with authentication and content management tools.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Migrated the project from Vue 2 to Vue 3, converted components to the Composition API, and upgraded from Laravel 8 to Laravel 9.',
      ],
      tags: ['PHP', 'MySQL', 'Laravel', 'Vue.js'],
      links: [
        {
          label: 'Project Overview',
          url: 'https://drive.google.com/drive/folders/1Gvb6V1lDsI5mDPbVU2-JKe15tRVRN0oX?usp=drive_link',
          variant: 'primary',
        },
        {
          label: 'View Code Sample',
          url: 'https://drive.google.com/drive/folders/1Xlyua4XQ4nXRNMRS8FoyWU9cGNrCo8ll?usp=drive_link',
          variant: 'outline',
        },
      ],
    },
    {
      id: 'abra',
      title: 'ABRA',
      image: 'assets/ABRA.jpg',
      imageAlt: 'ABRA learning application preview',
      description:
        'An evidence-based literacy tool supporting early readers, struggling readers, and ESL learners.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Fixed reported bugs in collaboration with cross-functional teams, including senior web designers and QA testers.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      links: [
        {
          label: 'Live Website',
          url: 'https://abralite.concordia.ca',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
    {
      id: 'elm',
      title: 'ELM',
      image: 'assets/ELM.jpg',
      imageAlt: 'ELM learning game preview',
      description:
        'A JavaScript-based tool that builds number sense and reduces math anxiety for young learners.',
      highlights: [
        '<strong>Work project at CSLP, Concordia University</strong>',
        '<strong>My Contributions:</strong> Fixed reported bugs in collaboration with cross-functional teams, including senior web designers and QA testers.',
      ],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      links: [
        {
          label: 'Live Demo',
          url: 'https://elm-demo.infinityfree.me/elm/',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      image: 'assets/personal_portfolio.jpg',
      imageAlt: 'Personal portfolio website preview',
      description:
        'Personal portfolio built with WordPress and Elementor, customized on the Astra theme.',
      highlights: [
        'Personal project',
        'Designed and developed a WordPress portfolio using Elementor, tailored with the Astra theme.',
      ],
      tags: ['wordpress', 'elementor', 'wpforms', 'canva'],
      links: [
        {
          label: 'Visit Site',
          url: 'https://wordpressportfolio.great-site.net/',
          variant: 'primary',
        },
        {
          label: 'Code Sample Soon',
          variant: 'outline',
          disabled: true,
        },
      ],
    },
  ];

  initProjectsCarousel(projects);
  initScrollReveal();
});

function initProjectsCarousel(projects) {
  const carousel = document.querySelector('.project-carousel');
  const track = document.getElementById('carousel-track');
  const prevBtn = carousel?.querySelector('.carousel-control.prev');
  const nextBtn = carousel?.querySelector('.carousel-control.next');

  if (!carousel || !track || !projects.length) return;

  const featuredImage = document.getElementById('featured-image');
  const featuredTitle = document.getElementById('featured-title');
  const featuredDescription = document.getElementById('featured-description');
  const featuredHighlights = document.getElementById('featured-highlights');
  const featuredTags = document.getElementById('featured-tags');
  const featuredActions = document.getElementById('featured-actions');
  const listPanel = document.getElementById('project-list-panel');

  if (
    !featuredImage ||
    !featuredTitle ||
    !featuredDescription ||
    !featuredHighlights ||
    !featuredTags ||
    !featuredActions
  ) {
    return;
  }

  const controlsContainer = carousel.querySelector('.carousel-controls');
  const viewport = carousel.querySelector('.carousel-viewport');

  const staticQuery = window.matchMedia('(max-width: 720px)');
  const handleModeSwitch = () => window.location.reload();
  if (typeof staticQuery.addEventListener === 'function') {
    staticQuery.addEventListener('change', handleModeSwitch);
  } else if (typeof staticQuery.addListener === 'function') {
    staticQuery.addListener(handleModeSwitch);
  }
  if (staticQuery.matches) {
    carousel.classList.add('carousel-static');
    renderStaticList({
      container: listPanel || track,
      projects,
      controlsContainer,
    });
    return;
  }

  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const cardButton = document.createElement('button');
    cardButton.type = 'button';
    cardButton.className = 'carousel-card';
    cardButton.dataset.projectId = project.id;
    cardButton.setAttribute('aria-label', `${project.title} project`);
    cardButton.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.imageAlt;
    cardButton.appendChild(img);

    const srLabel = document.createElement('span');
    srLabel.className = 'sr-only';
    srLabel.textContent = project.title;
    cardButton.appendChild(srLabel);

    fragment.appendChild(cardButton);
  });

  track.appendChild(fragment);

  const cardButtons = Array.from(track.querySelectorAll('.carousel-card'));

  const getCardsPerView = () => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      return Math.min(1, projects.length);
    }

    return Math.min(3, projects.length);
  };

  const getGapSize = () => {
    const styles = getComputedStyle(track);
    const gapValue = styles.rowGap || styles.gap || '0';
    const parsed = parseFloat(gapValue);
    return Number.isNaN(parsed) ? 0 : parsed;
  };

  const getCardHeight = () => {
    const firstCard = cardButtons[0];
    if (!firstCard) return 0;
    const measured = firstCard.offsetHeight;
    if (measured > 0) {
      return measured;
    }
    const fallback = parseFloat(getComputedStyle(carousel).getPropertyValue('--carousel-card-height'));
    return Number.isNaN(fallback) ? 0 : fallback;
  };

  let cardsPerView = getCardsPerView();
  let groupCount = Math.max(0, cardButtons.length - cardsPerView);
  let activeIndex = 0;
  let currentGroup = 0;

  if (viewport) {
    viewport.style.setProperty('--carousel-visible', String(cardsPerView));
  }
  carousel.style.setProperty('--carousel-visible', String(cardsPerView));

  const autoplayDelay = 5000;
  let autoplayId = null;

  const updateTrackTransform = () => {
    const cardHeight = getCardHeight();
    const gap = getGapSize();
    const offset = currentGroup * (cardHeight + gap);
    track.style.transform = `translateY(-${offset}px)`;
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    if (groupCount <= 0) {
      return null;
    }

    return window.setInterval(() => {
      goToGroup(currentGroup + 1);
    }, autoplayDelay);
  };

  const restartAutoplay = () => {
    stopAutoplay();
    autoplayId = startAutoplay();
  };

  const updateControls = () => {
    if (!controlsContainer) return;

    if (groupCount <= 0) {
      controlsContainer.classList.add('controls-hidden');
      prevBtn?.setAttribute('disabled', 'true');
      nextBtn?.setAttribute('disabled', 'true');
      stopAutoplay();
    } else {
      controlsContainer.classList.remove('controls-hidden');
      prevBtn?.removeAttribute('disabled');
      nextBtn?.removeAttribute('disabled');
    }
  };

  const setActiveProject = (index, options = {}) => {
    activeIndex = index;
    const project = projects[activeIndex];
    if (project) {
      renderFeaturedProject({
        project,
        featuredImage,
        featuredTitle,
        featuredDescription,
        featuredHighlights,
        featuredTags,
        featuredActions,
      });
    }

    cardButtons.forEach((card, cardIndex) => {
      const isActive = cardIndex === activeIndex;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (!options.skipScroll) {
      let desiredTop = currentGroup;
      if (activeIndex < currentGroup) {
        desiredTop = activeIndex;
      } else if (activeIndex >= currentGroup + cardsPerView) {
        desiredTop = Math.min(activeIndex - cardsPerView + 1, groupCount);
      }

      desiredTop = Math.max(0, Math.min(desiredTop, groupCount));

      if (desiredTop !== currentGroup) {
        currentGroup = desiredTop;
        updateTrackTransform();
      }
    }
  };

  const goToGroup = (targetGroup) => {
    if (groupCount <= 0) {
      return;
    }

    const maxGroup = groupCount;
    let nextGroup = targetGroup;
    if (nextGroup < 0) {
      nextGroup = maxGroup;
    } else if (nextGroup > maxGroup) {
      nextGroup = 0;
    }

    currentGroup = nextGroup;
    updateTrackTransform();

    const firstIndex = Math.min(currentGroup, projects.length - 1);
    setActiveProject(firstIndex, { skipScroll: true });
  };

  cardButtons.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActiveProject(index);
      restartAutoplay();
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveProject(index);
        restartAutoplay();
      }
    });
  });

  prevBtn?.addEventListener('click', () => {
    if (groupCount <= 0) return;
    goToGroup(currentGroup - 1);
    restartAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    if (groupCount <= 0) return;
    goToGroup(currentGroup + 1);
    restartAutoplay();
  });

  const initialize = () => {
    setActiveProject(0, { skipScroll: true });
    updateControls();
    updateTrackTransform();
    restartAutoplay();
  };

  initialize();

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', restartAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', (event) => {
    const nextFocus = event.relatedTarget;
    if (!nextFocus || !carousel.contains(nextFocus)) {
      restartAutoplay();
    }
  });

  const handleResize = () => {
    const updatedCardsPerView = getCardsPerView();
    if (updatedCardsPerView === cardsPerView) {
      return;
    }

    cardsPerView = updatedCardsPerView;
    groupCount = Math.max(0, cardButtons.length - cardsPerView);
    carousel.style.setProperty('--carousel-visible', String(cardsPerView));
    if (viewport) {
      viewport.style.setProperty('--carousel-visible', String(cardsPerView));
    }

    const targetGroup = Math.min(Math.max(activeIndex - cardsPerView + 1, 0), groupCount);
    currentGroup = targetGroup;
    updateTrackTransform();
    updateControls();
    restartAutoplay();
  };

  window.addEventListener('resize', handleResize);
}

function renderFeaturedProject({
  project,
  featuredImage,
  featuredTitle,
  featuredDescription,
  featuredHighlights,
  featuredTags,
  featuredActions,
}) {
  featuredImage.src = project.image;
  featuredImage.alt = project.imageAlt;
  featuredTitle.textContent = project.title;
  featuredDescription.textContent = project.description;

  featuredHighlights.innerHTML = '';
  if (project.highlights?.length) {
    project.highlights.forEach((highlight) => {
      const item = document.createElement('li');
      item.innerHTML = highlight;
      featuredHighlights.appendChild(item);
    });
    featuredHighlights.style.display = '';
  } else {
    featuredHighlights.style.display = 'none';
  }

  featuredTags.innerHTML = '';
  if (project.tags?.length) {
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';

      const icon = document.createElement('i');
      icon.className = getTechIconClass(tag);
      icon.setAttribute('aria-hidden', 'true');

      const label = document.createElement('span');
      label.className = 'sr-only';
      label.textContent = tag;

      tagElement.append(icon, label);
      featuredTags.appendChild(tagElement);
    });
    featuredTags.style.display = '';
  } else {
    featuredTags.style.display = 'none';
  }

  featuredActions.innerHTML = '';
  if (project.links?.length) {
    project.links.forEach((link) => {
      const elementTag = link.disabled || !link.url ? 'span' : 'a';
      const element = document.createElement(elementTag);

      const baseClass =
        link.variant === 'primary'
          ? 'btn btn-primary'
          : link.variant === 'text'
          ? 'btn btn-text'
          : 'btn btn-outline';

      element.className = baseClass;
      if (link.disabled || !link.url) {
        element.classList.add('is-disabled');
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('tabindex', '-1');
      } else {
        element.href = link.url;
        element.target = '_blank';
        element.rel = 'noopener noreferrer';
      }

      element.textContent = link.label;
      featuredActions.appendChild(element);
    });
    featuredActions.style.display = '';
  } else {
  featuredActions.style.display = 'none';
  }
}

function renderStaticList({ container, projects, controlsContainer }) {
  if (!container) return;

  controlsContainer?.classList.add('controls-hidden');
  container.innerHTML = '';
  container.classList.add('project-list-panel--active');

  const list = document.createElement('ul');
  list.className = 'project-list';

  let activeEntry = null;

  projects.forEach((project, index) => {
    const item = document.createElement('li');
    item.className = 'project-list-item';

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-list-toggle';
    button.textContent = project.title;

    const body = buildProjectAccordionBody(project);
    const contentId = `project-accordion-${project.id}`;
    body.id = contentId;

    const entry = { button, body };

    button.setAttribute('aria-controls', contentId);
    button.setAttribute('aria-expanded', 'false');
    body.classList.remove('is-open');

    if (index === 0) {
      button.classList.add('is-active');
      button.setAttribute('aria-expanded', 'true');
      body.classList.add('is-open');
      activeEntry = entry;
    }

    button.addEventListener('click', () => {
      const isOpen = button.classList.contains('is-active');

      if (activeEntry && activeEntry !== entry) {
        activeEntry.body.classList.remove('is-open');
        activeEntry.button.classList.remove('is-active');
        activeEntry.button.setAttribute('aria-expanded', 'false');
      }

      if (isOpen) {
        button.classList.remove('is-active');
        button.setAttribute('aria-expanded', 'false');
        body.classList.remove('is-open');
        activeEntry = null;
      } else {
        button.classList.add('is-active');
        button.setAttribute('aria-expanded', 'true');
        body.classList.add('is-open');
        activeEntry = entry;
      }
    });

    item.append(button, body);
    list.appendChild(item);
  });

  container.appendChild(list);
}

function buildProjectAccordionBody(project) {
  const body = document.createElement('div');
  body.className = 'project-accordion-body';

  const media = document.createElement('div');
  media.className = 'project-accordion-media';

  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.imageAlt;
  media.appendChild(img);

  const content = document.createElement('div');
  content.className = 'project-accordion-content';

  const description = document.createElement('p');
  description.className = 'project-accordion-description';
  description.textContent = project.description;
  content.appendChild(description);

  if (project.highlights?.length) {
    const highlightList = document.createElement('ul');
    highlightList.className = 'project-accordion-highlights';
    project.highlights.forEach((itemHtml) => {
      const li = document.createElement('li');
      li.innerHTML = itemHtml;
      highlightList.appendChild(li);
    });
    content.appendChild(highlightList);
  }

  if (project.tags?.length) {
    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'project-accordion-tags';
    project.tags.forEach((tag) => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag';

      const icon = document.createElement('i');
      icon.className = getTechIconClass(tag);
      icon.setAttribute('aria-hidden', 'true');

      const sr = document.createElement('span');
      sr.className = 'sr-only';
      sr.textContent = tag;

      tagElement.append(icon, sr);
      tagsWrap.appendChild(tagElement);
    });
    content.appendChild(tagsWrap);
  }

  if (project.links?.length) {
    const actionsWrap = document.createElement('div');
    actionsWrap.className = 'project-accordion-actions';

    project.links.forEach((link) => {
      const elTag = link.disabled || !link.url ? 'span' : 'a';
      const action = document.createElement(elTag);
      const baseClass =
        link.variant === 'primary'
          ? 'btn btn-primary'
          : link.variant === 'text'
          ? 'btn btn-text'
          : 'btn btn-outline';

      action.className = baseClass;

      if (link.disabled || !link.url) {
        action.classList.add('is-disabled');
        action.setAttribute('aria-disabled', 'true');
      } else {
        action.href = link.url;
        action.target = '_blank';
        action.rel = 'noopener noreferrer';
      }

      action.textContent = link.label;
      actionsWrap.appendChild(action);
    });

    content.appendChild(actionsWrap);
  }

  body.append(media, content);
  return body;
}

function getTechIconClass(tag) {
  const map = {
    php: 'fab fa-php',
    html: 'fab fa-html5',
    css: 'fab fa-css3-alt',
    javascript: 'fab fa-js-square',
    js: 'fab fa-js-square',
    mysql: 'fas fa-database',
    sql: 'fas fa-database',
    laravel: 'fab fa-laravel',
    vue: 'fab fa-vuejs',
    'vue.js': 'fab fa-vuejs',
    python: 'fab fa-python',
    java: 'fab fa-java',
    typescript: 'fab fa-js-square',
    wordpress: 'fab fa-wordpress',
    elementor: 'fa-brands fa-elementor',
    wpforms: 'fa-brands fa-wpforms',
    canva: 'fa-brands fa-canva',
  };

  const key = tag.toLowerCase();
  return map[key] ?? 'fas fa-code';
}

function initScrollReveal() {
  const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
