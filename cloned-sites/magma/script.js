function loco(){
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
loco()



var clut="";

document.querySelector("#page2 h1").textContent.split(" ").forEach(function(dets){
  clut+=`<span> ${dets} </span>`


  document.querySelector("#page2 h1").innerHTML=clut

})

gsap.to("#page2>h1>span",{
  scrollTrigger:{
    trigger:"#page2>h1>span",
    start: "top bottom",
    end:"bottom top",
    // markers:true,
    scroller:"#main",
    scrub:.5
  },
  stagger:.2,
  color:"white"
})




function canvasimg(){

  const canvas = document.querySelector("#page3 canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data =`
    ./frames00007.png
    ./frames00010.png
    ./frames00013.png
    ./frames00016.png
    ./frames00019.png
    ./frames00022.png
    ./frames00025.png
    ./frames00028.png
    ./frames00031.png
    ./frames00034.png
    ./frames00037.png
    ./frames00040.png
    ./frames00043.png
    ./frames00046.png
    ./frames00049.png
    ./frames00052.png
    ./frames00055.png
    ./frames00058.png
    ./frames00061.png
    ./frames00064.png
    ./frames00067.png
    ./frames00070.png
    ./frames00073.png
    ./frames00076.png
    ./frames00079.png
    ./frames00082.png
    ./frames00085.png
    ./frames00088.png
    ./frames00091.png
    ./frames00094.png
    ./frames00097.png
    ./frames00100.png
    ./frames00103.png
    ./frames00106.png
    ./frames00109.png
    ./frames00112.png
    ./frames00115.png
    ./frames00118.png
    ./frames00121.png
    ./frames00124.png
    ./frames00127.png
    ./frames00130.png
    ./frames00133.png
    ./frames00136.png
    ./frames00139.png
    ./frames00142.png
    ./frames00145.png
    ./frames00148.png
    ./frames00151.png
    ./frames00154.png
    ./frames00157.png
    ./frames00160.png
    ./frames00163.png
    ./frames00166.png
    ./frames00169.png
    ./frames00172.png
    ./frames00175.png
    ./frames00178.png
    ./frames00181.png
    ./frames00184.png
    ./frames00187.png
    ./frames00190.png
    ./frames00193.png
    ./frames00196.png
    ./frames00199.png
    ./frames00202.png
   `;
     
    return data.split("\n")[index];
  }
  
  const frameCount = 67;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

canvasimg();



var clutter="";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
  clutter+=`<span> ${dets} </span>`

  document.querySelector("#page4>h1").innerHTML=clutter
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
    trigger:"#page4>h1>span",
    scroller:"#main",
    start:"top bottom",
    end: "bottom top",
    // markers:true,
    scrub:.5
  },
  stagger:.2,
  color:"white"
})



function canvas(){

  const canvas = document.querySelector("#page5 canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data =`
  ./bridges00004.png
  ./bridges00007.png
  ./bridges00010.png
  ./bridges00013.png
  ./bridges00016.png
  ./bridges00019.png
  ./bridges00022.png
  ./bridges00025.png
  ./bridges00028.png
  ./bridges00031.png
  ./bridges00034.png
  ./bridges00037.png
  ./bridges00040.png
  ./bridges00043.png
  ./bridges00046.png
  ./bridges00049.png
  ./bridges00052.png
  ./bridges00055.png
  ./bridges00058.png
  ./bridges00061.png
  ./bridges00064.png
  ./bridges00067.png
  ./bridges00070.png
  ./bridges00073.png
  ./bridges00076.png
  ./bridges00079.png
  ./bridges00082.png
  ./bridges00085.png
  ./bridges00088.png
  ./bridges00091.png
  ./bridges00094.png
  ./bridges00097.png
  ./bridges00100.png
  ./bridges00103.png
  ./bridges00106.png
  ./bridges00109.png
  ./bridges00112.png
  ./bridges00115.png
  ./bridges00118.png
  ./bridges00121.png
  ./bridges00124.png
  ./bridges00127.png
  ./bridges00130.png
  ./bridges00133.png
  ./bridges00136.png
  ./bridges00139.png
  ./bridges00142.png
  ./bridges00145.png
  ./bridges00148.png
  ./bridges00151.png
  ./bridges00154.png
  ./bridges00157.png
  ./bridges00160.png
  ./bridges00163.png
  ./bridges00166.png
  ./bridges00169.png
  ./bridges00172.png
  ./bridges00175.png
  ./bridges00178.png
  ./bridges00181.png
  ./bridges00184.png
  ./bridges00187.png
  ./bridges00190.png
  ./bridges00193.png
  ./bridges00196.png
  ./bridges00199.png
  ./bridges00202.png
  `;
     
    return data.split("\n")[index];
  }
  
  const frameCount = 55;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

canvas();



var clt=""

document.querySelector("#page6 h1").textContent.split(" ").forEach(function(dets){

  clt+=`<span> ${dets} </span>`


  document.querySelector("#page6 h1").innerHTML=clt

})


gsap.to("#page6 h1 span",{
  scrollTrigger:{
    trigger:"#page6 h1 span",
    scroller:"#main",
    start:"top bottom",
    end:"bottom top",
    // markers:true,
    scrub:.5,
  },
  stagger:.2,
  color:"white"
})




function cim(){


  
const canvas = document.querySelector("#page7 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data =`
  https://thisismagma.com/assets/home/lore/seq/1.webp?2
  https://thisismagma.com/assets/home/lore/seq/2.webp?2
  https://thisismagma.com/assets/home/lore/seq/3.webp?2
  https://thisismagma.com/assets/home/lore/seq/4.webp?2
  https://thisismagma.com/assets/home/lore/seq/5.webp?2
  https://thisismagma.com/assets/home/lore/seq/6.webp?2
  https://thisismagma.com/assets/home/lore/seq/7.webp?2
  https://thisismagma.com/assets/home/lore/seq/8.webp?2
  https://thisismagma.com/assets/home/lore/seq/9.webp?2
  https://thisismagma.com/assets/home/lore/seq/10.webp?2
  https://thisismagma.com/assets/home/lore/seq/11.webp?2
  https://thisismagma.com/assets/home/lore/seq/12.webp?2
  https://thisismagma.com/assets/home/lore/seq/13.webp?2
  https://thisismagma.com/assets/home/lore/seq/14.webp?2
  https://thisismagma.com/assets/home/lore/seq/15.webp?2
  https://thisismagma.com/assets/home/lore/seq/16.webp?2
  https://thisismagma.com/assets/home/lore/seq/17.webp?2
  https://thisismagma.com/assets/home/lore/seq/18.webp?2
  https://thisismagma.com/assets/home/lore/seq/19.webp?2
  https://thisismagma.com/assets/home/lore/seq/20.webp?2
  https://thisismagma.com/assets/home/lore/seq/21.webp?2
  https://thisismagma.com/assets/home/lore/seq/22.webp?2
  https://thisismagma.com/assets/home/lore/seq/23.webp?2
  https://thisismagma.com/assets/home/lore/seq/24.webp?2
  https://thisismagma.com/assets/home/lore/seq/25.webp?2
  https://thisismagma.com/assets/home/lore/seq/26.webp?2
  https://thisismagma.com/assets/home/lore/seq/27.webp?2
  https://thisismagma.com/assets/home/lore/seq/28.webp?2
  https://thisismagma.com/assets/home/lore/seq/29.webp?2
  https://thisismagma.com/assets/home/lore/seq/30.webp?2
  https://thisismagma.com/assets/home/lore/seq/31.webp?2
  https://thisismagma.com/assets/home/lore/seq/32.webp?2
  https://thisismagma.com/assets/home/lore/seq/33.webp?2
  https://thisismagma.com/assets/home/lore/seq/34.webp?2
  https://thisismagma.com/assets/home/lore/seq/35.webp?2
  https://thisismagma.com/assets/home/lore/seq/36.webp?2
  https://thisismagma.com/assets/home/lore/seq/37.webp?2
  https://thisismagma.com/assets/home/lore/seq/38.webp?2
  https://thisismagma.com/assets/home/lore/seq/39.webp?2
  https://thisismagma.com/assets/home/lore/seq/40.webp?2
  https://thisismagma.com/assets/home/lore/seq/41.webp?2
  https://thisismagma.com/assets/home/lore/seq/42.webp?2
  https://thisismagma.com/assets/home/lore/seq/43.webp?2
  https://thisismagma.com/assets/home/lore/seq/44.webp?2
  https://thisismagma.com/assets/home/lore/seq/45.webp?2
  https://thisismagma.com/assets/home/lore/seq/46.webp?2
  https://thisismagma.com/assets/home/lore/seq/47.webp?2
  https://thisismagma.com/assets/home/lore/seq/48.webp?2
  https://thisismagma.com/assets/home/lore/seq/49.webp?2
  https://thisismagma.com/assets/home/lore/seq/50.webp?2
  https://thisismagma.com/assets/home/lore/seq/51.webp?2
  https://thisismagma.com/assets/home/lore/seq/52.webp?2
  https://thisismagma.com/assets/home/lore/seq/53.webp?2
  https://thisismagma.com/assets/home/lore/seq/54.webp?2
  https://thisismagma.com/assets/home/lore/seq/55.webp?2
  https://thisismagma.com/assets/home/lore/seq/56.webp?2
  https://thisismagma.com/assets/home/lore/seq/57.webp?2
  https://thisismagma.com/assets/home/lore/seq/58.webp?2
  https://thisismagma.com/assets/home/lore/seq/59.webp?2
  https://thisismagma.com/assets/home/lore/seq/60.webp?2
  https://thisismagma.com/assets/home/lore/seq/61.webp?2
  https://thisismagma.com/assets/home/lore/seq/62.webp?2
  https://thisismagma.com/assets/home/lore/seq/63.webp?2
  https://thisismagma.com/assets/home/lore/seq/64.webp?2
  https://thisismagma.com/assets/home/lore/seq/65.webp?2
  https://thisismagma.com/assets/home/lore/seq/66.webp?2
  https://thisismagma.com/assets/home/lore/seq/67.webp?2
  https://thisismagma.com/assets/home/lore/seq/68.webp?2
  https://thisismagma.com/assets/home/lore/seq/69.webp?2
  https://thisismagma.com/assets/home/lore/seq/70.webp?2
  https://thisismagma.com/assets/home/lore/seq/71.webp?2
  https://thisismagma.com/assets/home/lore/seq/72.webp?2
  https://thisismagma.com/assets/home/lore/seq/73.webp?2
  https://thisismagma.com/assets/home/lore/seq/74.webp?2
  https://thisismagma.com/assets/home/lore/seq/75.webp?2
  https://thisismagma.com/assets/home/lore/seq/76.webp?2
  https://thisismagma.com/assets/home/lore/seq/77.webp?2
  https://thisismagma.com/assets/home/lore/seq/78.webp?2
  https://thisismagma.com/assets/home/lore/seq/79.webp?2
  https://thisismagma.com/assets/home/lore/seq/80.webp?2
  https://thisismagma.com/assets/home/lore/seq/81.webp?2
  https://thisismagma.com/assets/home/lore/seq/82.webp?2
  https://thisismagma.com/assets/home/lore/seq/83.webp?2
  https://thisismagma.com/assets/home/lore/seq/84.webp?2
  https://thisismagma.com/assets/home/lore/seq/85.webp?2
  https://thisismagma.com/assets/home/lore/seq/86.webp?2
  https://thisismagma.com/assets/home/lore/seq/87.webp?2
  https://thisismagma.com/assets/home/lore/seq/88.webp?2
  https://thisismagma.com/assets/home/lore/seq/89.webp?2
  https://thisismagma.com/assets/home/lore/seq/90.webp?2
  https://thisismagma.com/assets/home/lore/seq/91.webp?2
  https://thisismagma.com/assets/home/lore/seq/92.webp?2
  https://thisismagma.com/assets/home/lore/seq/93.webp?2
  https://thisismagma.com/assets/home/lore/seq/94.webp?2
  https://thisismagma.com/assets/home/lore/seq/95.webp?2
  https://thisismagma.com/assets/home/lore/seq/96.webp?2
  https://thisismagma.com/assets/home/lore/seq/97.webp?2
  https://thisismagma.com/assets/home/lore/seq/98.webp?2
  https://thisismagma.com/assets/home/lore/seq/99.webp?2
  https://thisismagma.com/assets/home/lore/seq/100.webp?2
  https://thisismagma.com/assets/home/lore/seq/101.webp?2
  https://thisismagma.com/assets/home/lore/seq/102.webp?2
  https://thisismagma.com/assets/home/lore/seq/103.webp?2
  https://thisismagma.com/assets/home/lore/seq/104.webp?2
  https://thisismagma.com/assets/home/lore/seq/105.webp?2
  https://thisismagma.com/assets/home/lore/seq/106.webp?2
  https://thisismagma.com/assets/home/lore/seq/107.webp?2
  https://thisismagma.com/assets/home/lore/seq/108.webp?2
  https://thisismagma.com/assets/home/lore/seq/109.webp?2
  https://thisismagma.com/assets/home/lore/seq/110.webp?2
  https://thisismagma.com/assets/home/lore/seq/111.webp?2
  https://thisismagma.com/assets/home/lore/seq/112.webp?2
  https://thisismagma.com/assets/home/lore/seq/113.webp?2
  https://thisismagma.com/assets/home/lore/seq/114.webp?2
  https://thisismagma.com/assets/home/lore/seq/115.webp?2
  https://thisismagma.com/assets/home/lore/seq/116.webp?2
  https://thisismagma.com/assets/home/lore/seq/117.webp?2
  https://thisismagma.com/assets/home/lore/seq/118.webp?2
  https://thisismagma.com/assets/home/lore/seq/119.webp?2
  https://thisismagma.com/assets/home/lore/seq/120.webp?2
  https://thisismagma.com/assets/home/lore/seq/121.webp?2
  https://thisismagma.com/assets/home/lore/seq/122.webp?2
  https://thisismagma.com/assets/home/lore/seq/123.webp?2
  https://thisismagma.com/assets/home/lore/seq/124.webp?2
  https://thisismagma.com/assets/home/lore/seq/125.webp?2
  https://thisismagma.com/assets/home/lore/seq/126.webp?2
  https://thisismagma.com/assets/home/lore/seq/127.webp?2
  https://thisismagma.com/assets/home/lore/seq/128.webp?2
  https://thisismagma.com/assets/home/lore/seq/129.webp?2
  https://thisismagma.com/assets/home/lore/seq/130.webp?2
  https://thisismagma.com/assets/home/lore/seq/131.webp?2
  https://thisismagma.com/assets/home/lore/seq/132.webp?2
  https://thisismagma.com/assets/home/lore/seq/133.webp?2
  https://thisismagma.com/assets/home/lore/seq/134.webp?2
  https://thisismagma.com/assets/home/lore/seq/135.webp?2
  https://thisismagma.com/assets/home/lore/seq/136.webp?2
`;
   
  return data.split("\n")[index];
}

const frameCount = 137;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page7`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page7",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});

}


cim()



gsap.to("#cir1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#cir1",
    start:"top center",
    end:"bottom top",
    // markers:true,
    scrub:.5
  },
  scale:1.2
})


gsap.to("#cir2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#cir2",
    start:"top center",
    end:"bottom top",
    // markers:true,
    scrub:.5
  },
  backgroundColor:"#0a3bce91"
})




function coin(){
  
  const canvas = document.querySelector("#page11 #eleright canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data =`
https://thisismagma.com/assets/home/roadmap/seq/1.webp
https://thisismagma.com/assets/home/roadmap/seq/2.webp
https://thisismagma.com/assets/home/roadmap/seq/3.webp
https://thisismagma.com/assets/home/roadmap/seq/4.webp
https://thisismagma.com/assets/home/roadmap/seq/5.webp
https://thisismagma.com/assets/home/roadmap/seq/6.webp
https://thisismagma.com/assets/home/roadmap/seq/7.webp
https://thisismagma.com/assets/home/roadmap/seq/8.webp
https://thisismagma.com/assets/home/roadmap/seq/9.webp
https://thisismagma.com/assets/home/roadmap/seq/10.webp
https://thisismagma.com/assets/home/roadmap/seq/11.webp
https://thisismagma.com/assets/home/roadmap/seq/12.webp
https://thisismagma.com/assets/home/roadmap/seq/13.webp
https://thisismagma.com/assets/home/roadmap/seq/14.webp
https://thisismagma.com/assets/home/roadmap/seq/15.webp
https://thisismagma.com/assets/home/roadmap/seq/16.webp
https://thisismagma.com/assets/home/roadmap/seq/17.webp
https://thisismagma.com/assets/home/roadmap/seq/18.webp
https://thisismagma.com/assets/home/roadmap/seq/19.webp
https://thisismagma.com/assets/home/roadmap/seq/20.webp
https://thisismagma.com/assets/home/roadmap/seq/21.webp
https://thisismagma.com/assets/home/roadmap/seq/22.webp
https://thisismagma.com/assets/home/roadmap/seq/23.webp
https://thisismagma.com/assets/home/roadmap/seq/24.webp
https://thisismagma.com/assets/home/roadmap/seq/25.webp
https://thisismagma.com/assets/home/roadmap/seq/26.webp
https://thisismagma.com/assets/home/roadmap/seq/27.webp
https://thisismagma.com/assets/home/roadmap/seq/28.webp
https://thisismagma.com/assets/home/roadmap/seq/29.webp
https://thisismagma.com/assets/home/roadmap/seq/30.webp
https://thisismagma.com/assets/home/roadmap/seq/31.webp
https://thisismagma.com/assets/home/roadmap/seq/32.webp
https://thisismagma.com/assets/home/roadmap/seq/33.webp
https://thisismagma.com/assets/home/roadmap/seq/34.webp
https://thisismagma.com/assets/home/roadmap/seq/35.webp
https://thisismagma.com/assets/home/roadmap/seq/36.webp
https://thisismagma.com/assets/home/roadmap/seq/37.webp
https://thisismagma.com/assets/home/roadmap/seq/38.webp
https://thisismagma.com/assets/home/roadmap/seq/39.webp
https://thisismagma.com/assets/home/roadmap/seq/40.webp
https://thisismagma.com/assets/home/roadmap/seq/41.webp
https://thisismagma.com/assets/home/roadmap/seq/42.webp
https://thisismagma.com/assets/home/roadmap/seq/43.webp
https://thisismagma.com/assets/home/roadmap/seq/44.webp
https://thisismagma.com/assets/home/roadmap/seq/45.webp
https://thisismagma.com/assets/home/roadmap/seq/46.webp
https://thisismagma.com/assets/home/roadmap/seq/47.webp
https://thisismagma.com/assets/home/roadmap/seq/48.webp
https://thisismagma.com/assets/home/roadmap/seq/49.webp
https://thisismagma.com/assets/home/roadmap/seq/50.webp
https://thisismagma.com/assets/home/roadmap/seq/51.webp
https://thisismagma.com/assets/home/roadmap/seq/52.webp
https://thisismagma.com/assets/home/roadmap/seq/53.webp
https://thisismagma.com/assets/home/roadmap/seq/54.webp
https://thisismagma.com/assets/home/roadmap/seq/55.webp
https://thisismagma.com/assets/home/roadmap/seq/56.webp
https://thisismagma.com/assets/home/roadmap/seq/57.webp
https://thisismagma.com/assets/home/roadmap/seq/58.webp
https://thisismagma.com/assets/home/roadmap/seq/59.webp
https://thisismagma.com/assets/home/roadmap/seq/60.webp
https://thisismagma.com/assets/home/roadmap/seq/61.webp
https://thisismagma.com/assets/home/roadmap/seq/62.webp
https://thisismagma.com/assets/home/roadmap/seq/63.webp
https://thisismagma.com/assets/home/roadmap/seq/64.webp
https://thisismagma.com/assets/home/roadmap/seq/65.webp
https://thisismagma.com/assets/home/roadmap/seq/66.webp
https://thisismagma.com/assets/home/roadmap/seq/67.webp
https://thisismagma.com/assets/home/roadmap/seq/68.webp
https://thisismagma.com/assets/home/roadmap/seq/69.webp
https://thisismagma.com/assets/home/roadmap/seq/70.webp
https://thisismagma.com/assets/home/roadmap/seq/71.webp
https://thisismagma.com/assets/home/roadmap/seq/72.webp
https://thisismagma.com/assets/home/roadmap/seq/73.webp
https://thisismagma.com/assets/home/roadmap/seq/74.webp
https://thisismagma.com/assets/home/roadmap/seq/75.webp
  `;
     
    return data.split("\n")[index];
  }
  
  const frameCount = 75;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page11`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
  
    trigger: "#page11",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}

coin()






document.querySelectorAll(".lines").forEach(function(dets){

  gsap.to(dets,{
    scrollTrigger:{
      trigger:dets.querySelector("p"),
      start:"top bottom",
      end:"bottom top",
      scroller:"#main",
      // markers:true,
      scrub:.5
    },
    stagger:.2,
    color:"white"
  })

})



// gsap.to(".lines",{
//   scrollTrigger:{
//     trigger:"#head1 p",
//     start:"center bottom",
//     end:"bottom top",
//     scroller:"#main",
//     markers:true,
//     scrub:.5
//   },
//   stagger:.2,
//   color:"white"
// })
