document.addEventListener('DOMContentLoaded', () => {
    let sliders = [
        { prev: '.slider1-prev', next: '.slider1-next', slider: '.slider1' },
        { prev: '.slider2-prev', next: '.slider2-next', slider: '.slider2' },
        { prev: '.slider3-prev', next: '.slider3-next', slider: '.slider3' },
        { prev: '.slider4-prev', next: '.slider4-next', slider: '.slider4' },
        { prev: '.slider5-prev', next: '.slider5-next', slider: '.slider5' },
        { prev: '.slider6-prev', next: '.slider6-next', slider: '.slider6' },
        { prev: '.slider7-prev', next: '.slider7-next', slider: '.slider7' },
        { prev: '.slider8-prev', next: '.slider8-next', slider: '.slider8' },
        { prev: '.slider9-prev', next: '.slider9-next', slider: '.slider9' },
        { prev: '.slider10-prev', next: '.slider10-next', slider: '.slider10' },
        { prev: '.slider11-prev', next: '.slider11-next', slider: '.slider11' },
        { prev: '.slider12-prev', next: '.slider12-next', slider: '.slider12' },
        { prev: '.slider13-prev', next: '.slider13-next', slider: '.slider13' },
        { prev: '.slider14-prev', next: '.slider14-next', slider: '.slider14' },
        { prev: '.slider15-prev', next: '.slider15-next', slider: '.slider15' },
    ];

    sliders.forEach(({ prev, next, slider }) => {
        let prevButton = document.querySelector(prev);
        let nextButton = document.querySelector(next);
        let cardSlider = document.querySelector(slider);
        let scrollAmount = 0;

        let slide = (direction) => {
            let sliderWidth = cardSlider.scrollWidth;
            let cardWidth = document.querySelector('.card').offsetWidth;
            let visibleWidth = cardSlider.clientWidth;
            let maxScroll = sliderWidth - visibleWidth;
            let scrollBy = cardWidth * 1.17;

            if (direction === 'next') {
                scrollAmount = Math.min(scrollAmount + scrollBy, maxScroll);
            } else {
                scrollAmount = Math.max(scrollAmount - scrollBy, 0);
            }

            cardSlider.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        };

        nextButton.addEventListener('click', () => slide('next'));
        prevButton.addEventListener('click', () => slide('prev'));
    });
});

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




document.getElementById("heart-icon").addEventListener("click", function() {
    this.classList.toggle("bi-heart-fill");
    this.classList.toggle("bi-heart");
  
    if (this.classList.contains("bi-heart-fill")) {
      this.classList.add("red");
    } else {
      this.classList.remove("red");
    }
  });


  let minRange = document.getElementById('minRange');
  let maxRange = document.getElementById('maxRange');
  let minGap = 10; 
  
  minRange.addEventListener('input', function() {
      if (parseInt(minRange.value) > parseInt(maxRange.value) - minGap) {
          minRange.value = maxRange.value - minGap;
      }
  });
  
  maxRange.addEventListener('input', function() {
      if (parseInt(maxRange.value) < parseInt(minRange.value) + minGap) {
          maxRange.value = parseInt(minRange.value) + minGap;
      }
  });
  
  
 