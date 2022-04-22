/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 4
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/

if (Modernizr.touch === true && window.innerWidth <= 767) {
  //alert('Touch Screen');
} else {

}

(function () {
  'use strict'

  /* ==================================================
  # Get scroll bar width
  ===================================================*/
  function getBarwidth() {
    // Create the measurement node
    let scrollDiv = document.createElement('div')
    scrollDiv.className = 'scrollbar-measure'
    document.body.appendChild(scrollDiv)

    // Get the scrollbar width
    let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    //console.warn(scrollbarWidth); // Mac:  15

    // Delete the DIV
    document.body.removeChild(scrollDiv)
    // console.log(scrollbarWidth);
    return scrollbarWidth
  }

  function section2Slick() {
    $('.hot-slick-js').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

  function section3Slick() {
    $('.hot-slick-js-3').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 8000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  function imgSlick() {
    $('.img-slick-js').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  function countDownProduct() {
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      // const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        // days,
        hours,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endTime) {
      if (document.getElementById(id)) {
        const clock = document.getElementById(id);
        // const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.minutes');
        const secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
          const t = getTimeRemaining(endTime);

          // daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }

        updateClock();
        const timeInterval = setInterval(updateClock, 1000);
      }
    }

    const deadline1 = 'April 30 2022 21:00:00 UTC+7';
    const deadline2 = 'April 30 2022 22:00:00 UTC+7';
    const deadline3 = 'April 30 2022 23:00:00 UTC+7';

    initializeClock('countDown1', deadline1);
    initializeClock('countDown2', deadline2);
    initializeClock('countDown3', deadline3);
  }


  function init() {
    getBarwidth()
    section2Slick()
    section3Slick()
    imgSlick()
    countDownProduct()
  }

  init()

})()
