'use strict';

export function closeMenuOnResize() {
  if (window.innerWidth >= 1200) {
    window.location.hash = '';
  }
}

window.addEventListener('resize', closeMenuOnResize);
