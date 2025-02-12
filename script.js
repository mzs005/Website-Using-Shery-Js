
// Mouse Follower
Shery.mouseFollower();
// Magnet
Shery.makeMagnet('.magnet, .nav img');
// Bg Vedios
Shery.hoverWithMediaCircle('.bg-vedios',{videos: ["1.mp4", "0.mp4", "2.mp4"]});
// Buttons Magnet Effects
Shery.makeMagnet('.btn')
// Make stop div with gsap trigger

gsap.to(".left-texts",{
  scrollTrigger:{
    trigger: "#featured-images",
    pin:  true,
    start: "top top",
    end:  "bottom bottom",
    endTrigger: "#last",
    scrub: 1
  },
  y: "-300%",
  ease: Power1
});
// Scrool image effect
var select = document.querySelectorAll(".left-texts")
Shery.imageEffect(".right-images", {
  style: 1,
  config: {onMouse:{value:1}},
  slideStyle: (setScroll) => {
   select.forEach(function(select, index){
    ScrollTrigger.create({
         trigger: select,
         start:  "top top",
         scrub: 1,
         onUpdate: function(progress){
          setScroll(progress.progress+index)
         }
    })
   })
  }
});