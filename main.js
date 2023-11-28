let mouse=document.querySelector("#cusor")
let blur=document.querySelector("#cusorblur")

document.addEventListener("mousemove",function (details) { 

    mouse.style.top=details.y +"px";
    mouse.style.left=details.x +"px";

    setTimeout(function(){
    blur.style.left=details.x -150 +"px";
    blur.style.top=details.y -150 +"px";
    },200);

});

let h4all= document.querySelectorAll("#nav h4");

h4all.forEach(function (htag) {
    htag.addEventListener("mouseenter", function(){
        mouse.style.scale=3;
        mouse.style.border="1px solid #fff";
        mouse.style.backgroundColor="transparent";
    });
    htag.addEventListener("mouseleave", function(){
        mouse.style.scale=1;
        mouse.style.border="none";
        mouse.style.backgroundColor="#95C11E";
    });
  });

  let fall= document.querySelectorAll("#f2 h3");
  let f3all= document.querySelectorAll("#f3 h3");
  let f4all= document.querySelectorAll("#f4 h4");

fall.forEach(function (ftag) {
    ftag.addEventListener("mouseenter", function(){
        mouse.style.scale=3;
        mouse.style.border="1px solid #fff";
        mouse.style.backgroundColor="transparent";
    });
    ftag.addEventListener("mouseleave", function(){
        mouse.style.scale=1;
        mouse.style.border="none";
        mouse.style.backgroundColor="#95C11E";
    });
  });

  f3all.forEach(function (ftag) {
    ftag.addEventListener("mouseenter", function(){
        mouse.style.scale=3;
        mouse.style.border="1px solid #fff";
        mouse.style.backgroundColor="transparent";
    });
    ftag.addEventListener("mouseleave", function(){
        mouse.style.scale=1;
        mouse.style.border="none";
        mouse.style.backgroundColor="#95C11E";
    });
  });

  f4all.forEach(function (ftag) {
    ftag.addEventListener("mouseenter", function(){
        mouse.style.scale=3;
        mouse.style.border="1px solid #fff";
        mouse.style.backgroundColor="transparent";
    });
    ftag.addEventListener("mouseleave", function(){
        mouse.style.scale=1;
        mouse.style.border="none";
        mouse.style.backgroundColor="#95C11E";
    });
  });

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
});
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger: 0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2,
    }
    
});gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
})
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});