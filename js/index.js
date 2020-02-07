'use strict';

function draw() {
  let blobs = ``;

  for (let i = 0; i < 20; i++) {
    let shape;

    Math.random() >= 0.5 ? shape = `
    <svg
    viewBox="0 0 600 600"
    xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(300,300)">
        <path d="M145.3,-120.2C181.7,-70.3,200.1,-10.2,188.4,43.8C176.7,97.8,135,145.8,82.5,170.8C30.1,195.8,-33.1,197.9,-73.9,171.4C-114.6,144.8,-132.8,89.7,-155.8,25.3C-178.7,-39.1,-206.2,-112.8,-181,-160.2C-155.8,-207.6,-77.9,-228.8,-11.7,-219.5C54.5,-210.1,108.9,-170.2,145.3,-120.2Z" fill="#FFB4BC" />
      </g>
    </svg>` : shape =
      `<svg 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    version="1.1" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 310 350">
      <path
        d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>`;

    const chillOrNot = Math.random() >= 0.5;

    blobs += `
    <div style="position: absolute;
    top: ${Math.floor(Math.random() * (100 - 0)) + 0}vh;
    left: ${Math.floor(Math.random() * ((chillOrNot ? 90 : 40) - 0)) + 0}vw;
    color: white;
    width: ${Math.floor(Math.random() * (7 - 1)) + 1}vmax;
    z-index: -10;
    animation: ${chillOrNot ? `chill` : `move`} ${Math.floor(Math.random() * (100 - 30)) + 30}s ease-in-out infinite;
    transform-origin: 50% 50%;">
    ${shape} 
    </div>`
  }

  $('.js-add-blobs').append(blobs);
}

function initReveal() {
  window.sr = new ScrollReveal()
  sr.reveal('.bio, .reel, .faq, .cam-picture', { duration: 3000 })
}

function initTilt() {
  const url = 'https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js';
  if ($(window).width() >= 1000) {
    $.getScript(url);
  }
}

function handleContactButton() {
  $('.js-hero-button').click(e => {
    $('html, body').animate({
      scrollTop: ($('.contact-section').first().offset().top)
    }, 5000);
  });
}

function lazySVG() {
  $(document).on('lazybeforeunveil', (e) => {
    if (e.target.tagName == 'svg') {
      const imageEl = $(e.target).find('image');
      if (imageEl) {
        imageEl.attr('xlink:href', $(e.target).data('image-url'))
      }
    }
  });
}

function main() {
  draw();
  initReveal();
  initTilt();
  handleContactButton();
  lazySVG();
}

$(main);