let counter = document.querySelector(".line1-part1 h5");
let grow = 0;
let now = document.querySelector(".now");
let crsr = document.querySelector('.crsr');
let line3 = document.querySelectorAll(".line3 span");
let videoContainer = document.querySelector('.videoContainer');
let videoBtn = document.querySelector('.videoBtn');
let video = document.querySelector('.videoContainer video')
let playicon = document.querySelector('.videoContainer i')
let isPlaying = false
let tl = gsap.timeline();
let projectCircle = document.querySelectorAll(".project-circle");
let create = document.querySelector('.footer-main h1');

document.addEventListener('mousemove',(event)=>{
    gsap.to(".crsr",{
        top: event.pageY,
        left: event.pageX
    })
})

Shery.makeMagnet(".nav-part2 h4", {});

// create.addEventListener('mouseenter',()=>{
//     gsap.from('.footer-main>h1',{
//         onStart: function(){
//             $('.footer-main>h1').textillate({ in: { effect: 'fadeOut' } });
//         }
//     })
// })


function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

function videoPlayer(){

    videoContainer.addEventListener('mousemove',(event)=>{

        const rect = videoContainer.getBoundingClientRect();
        // console.log(rect.top)
        gsap.to('.crsr',{
            opacity:0
        })
        gsap.to(".videoBtn",{
            top: event.pageY -rect.top,
            left: event.pageX - rect.left
        })
    })
    
    videoContainer.addEventListener('mouseleave',(event)=>{
        // console.log(event)
        gsap.to('.crsr',{
            opacity:1
        })
        gsap.to(".videoBtn",{
            top: '-15%',
            left: '60%',
            duration:1 
        })
    })
    
    videoBtn.addEventListener('click',()=>{
        if(!isPlaying){
            playicon.classList.remove('bi-play-fill')
            playicon.classList.add('bi-pause-fill')
            gsap.to('.videoContainer video',{
                opacity: 1
            })
            gsap.to('.videoContainer img',{
                opacity: 0
            })
            video.play();
            isPlaying = true;
            gsap.to('.videoBtn div',{
                scale: 0.6,
                duration: 0.2
            })
        }
    else{
        video.pause();
        isPlaying = false
        playicon.classList.remove('bi-pause-fill')
            playicon.classList.add('bi-play-fill')
        gsap.to('.videoContainer img',{
            opacity: 1
        })
        gsap.to('.videoContainer video',{
            opacity: 0
        })
        gsap.to('.videoBtn div',{
            scale: 1,
            duration: 0.2
        })
    }
        
    })
}

function counterwAnimation(){
    const growInterval = setInterval(() => {
        if (grow <= 100) {
            counter.innerHTML = grow++;
        }
    }, 25)
    tl.to(".line, .wait", {
        opacity: 0,
        duration: 0.5,
        delay:3,
        onComplete: function(){
            stopCounter();
        }
    })
    tl.to('#loader',{
        y:-1200,
        display: "none",
        duration:1,
        ease: "power4.in",
        onStart: function(){
            gsap.from(".mainLine h1, .line3",{
                y: 150,
                duration: 0.6,
                stagger: 0.1,
                delay:0.4
            })
        }
        
    })
    
    function stopCounter(){
        clearInterval(growInterval);
    }
}

function loaderAnimation(){
    gsap.from(".line h1", {
        y: 200,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.2
    })
    gsap.from(".line1-part1 h5, .now, .wait",{
        opacity: 0,
        duration:2,
        onStart: function(){
            counterwAnimation();
        }
    })
}

function projectAnimation(){
    Shery.imageEffect(".card-img",{
        style: 2,
        config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":2},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.35,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7942556592726472},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.32,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey: true
    })
}

function projectCircleAnimation(){
    projectCircle.forEach(elem =>{
    
        elem.addEventListener("mouseenter", (e)=>{
            gsap.to(e.toElement.children[1],{
                scale:1,
                duration:0.3,
                onComplete: function(){
                    gsap.to('.circle-in p',{
                        opacity: 1,
                        scale: 1,
                        duration: 0.3
                    })
                }
            })
        })
    
        elem.addEventListener("mouseleave",(e)=>{
            gsap.to(e.target.children[1],{
                scale: 0,
                duration:0.5,
                onStart: function(){
                    gsap.to('.circle-in p',{
                        opacity: 0,
                        scale: 0,
                    })
                }
            })
        })
    })
}

locomotive();
loaderAnimation();
projectAnimation();
projectCircleAnimation();
videoPlayer();



