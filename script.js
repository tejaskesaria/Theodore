const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    // spaceBetween: 20,
    autoplay: {
      delay: 2000
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      // hide: true,
    },
    breakpoints : {
      768 :{
        slidesPerView: 3,
      }
    }
  });
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".container"
});
gsap.from(".wrap1", {
  autoAlpha: 0,
  y: 50
});
gsap.to(".wrap1", {
  scrollTrigger: ".wrap", 
  duration: 2, 
  autoAlpha: 1,
  y: 0
});
gsap.from(".wrap2", {
  opacity: 0,
  y: 50
});
gsap.to(".wrap2", {
  scrollTrigger: ".wrap", 
  duration: 2, 
  opacity: 1,
  y: 0
});

// ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 800px)": function() {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
    gsap.to(".scrollmobile",{
      scrollTrigger: '.section1',
      zIndex: 0,
      opacity: 0
    });
  }, 
  
	// mobile
	"(max-width: 768px)": function() {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 
    
    gsap.from(".scrollmobile",{
      scrollTrigger: '.section1',
      zIndex: 100,
      opacity: 1
    });
    gsap.to(".scrollmobile",{
      scrollTrigger: '.section1',
      duration: 5,
      opacity: 0
    });
  }, 
  
	// all 
	"all": function() {
		// ScrollTriggers created here aren't associated with a particular media query,
		// so they persist.
	}
  
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbxwTVBiHxPe6oRiAg1STiK910T0BmpC0D-_yvziplWFuW0fBY6PTfL4sRpR87AFcqCO/exec';
  const form = document.forms['submit-to-google-sheet'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(window.location.href= 'thankyou.html')
      .catch(error => console.error('Error!', error.message))
  });

