const audio = document.getElementById('song');


const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

window.onload=function(){
    var r = confirm("AutoPlay?");
    if(r == true){
        audio.play();
    }
}


tl.to('.text', {y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 7});
tl.to('.intro', {y:'-100%', duration: 1}, "-=1");
tl.fromTo('.big-text', {opacity:0}, {opacity:1, duration: 1});
tl.fromTo('.sub-text', {opacity:0}, {opacity:1, duration: 1}, "+=0.5");
tl.to('.big-text', {opacity: 0, delay: 1.5});
tl.to('.sub-text', {opacity: 0, delay: 1}, "-=1");



const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.video',
})
.on('enter', function(){
    
    audio.pause();

})
.on('leave', function(){
    audio.play();
})
.addTo(controller);