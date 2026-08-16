(function () {
  var brand = document.querySelector('.hero-brand');

  if (!brand || !CSS.supports('animation-timeline: scroll()')) {
    return;
  }

  function lockWhenShrunk() {
    var threshold = window.innerHeight * 0.8;

    if (window.scrollY >= threshold) {
      brand.classList.add('is-locked-small');
      window.removeEventListener('scroll', lockWhenShrunk);
      window.removeEventListener('resize', lockWhenShrunk);
    }
  }

  window.addEventListener('scroll', lockWhenShrunk, { passive: true });
  window.addEventListener('resize', lockWhenShrunk);
  lockWhenShrunk();
})();
