const MAX_SCROLL_TO_TOP_BUTTON_OPACITY = 0.7;

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

window.onscroll = () => {
  // add debouncing
  debounce(scrollFunction, 500)();
};

const scrollFunction = () => {
  const scrollToTopButton = document.getElementById('move-to-top');
  const minHeightToDisplay = screen.height;

  if (
    document.body.scrollTop > minHeightToDisplay ||
    document.documentElement.scrollTop > minHeightToDisplay
  ) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

const moveToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
