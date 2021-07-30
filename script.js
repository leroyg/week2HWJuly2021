let sliderPosition = 0;

function prevImage() {
  // select by getELementById and stor in var slider
  const slider = document.getElementById('sliderWindow');
  // increment position by 400 px
  if (sliderPosition < 0 ) {
    sliderPosition += 400;
  }
  // translate the slider by width (400px) of the image
  slider.style.transform = `translateX(${sliderPosition}px)`;
}

function nextImage() {
  // select by getElementById and stor in var slider
  const slider = document.getElementById('sliderWindow');
  // decrement the slider by 400px
  if (sliderPosition > -8800 ) {
    sliderPosition += -400;
  }
  // translate the slider by width (-400px) of the image
  slider.style.transform = `translateX(${sliderPosition}px)`;
}


