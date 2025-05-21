const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
};

const sections = document.getElementsByName('main');

const sectBtns = document.getElementById('nav-links');
const sectBtn = document.querySelectorAll('.nav-link');

const allSections = document.querySelectorAll('.main-content');
console.log(sectBtns);

function PageTransitions() {
  // Sections Activator
  sectBtns.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      document.body.dataset.nav = false;
      // Hide other sections
      sections.forEach((section) => {
        section.classList.remove('active', 'animateOnStartUpIn', 'animateOnNavedIn');
      });

      const element = document.getElementById(id);
      element.classList.add('active', 'animateOnNavedIn');
    }
  });
}

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`
  };

  trailer.animate(keyframes, {
    duration: 70,
    fill: "forwards"
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case "rotate":
      return "fa-solid fa-arrows-rotate";
    case "video":
      return "fa-solid fa-play";
    case "button":
      return "fa-solid fa-circle-dot";
    default:
      return "fa-solid fa-up-right-from-square";
  }
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable");
  const interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if (interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
};

PageTransitions();

function Links() {
  const anchors = document.querySelectorAll('a[href]');

  anchors.forEach(anchor => {
    // Only attach if it does NOT have target=_blank
    if (!anchor.getAttribute('target') || anchor.getAttribute('target') === '_self') {
      anchor.addEventListener('click', Anchors, false);
    }
  });
}

function Anchors(event) {
  const anchor = this;

  // Only override behavior for internal/same-tab links
  const target = anchor.getAttribute('target');

  // Let _blank links behave naturally (open in new tab)
  if (target && target === "_blank") {
    // Let browser handle it; do nothing
    return;
  }

  // Otherwise, override the default and navigate manually
  event.preventDefault();
  window.location.href = anchor.href;
}

window.onload = Links;
