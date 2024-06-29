var helloelems=document.querySelectorAll("#hello");
var hielems=document.querySelectorAll("#hi");
var cursor=document.querySelector("#cursor");
var main=document.querySelector("#main");

main.addEventListener("mousemove",function(dets){
    console.log(dets)
    // cursor.offset.left=dets.offsetX+"px"
    // cursor.style.top=dets.offsetY+"px"
    cursor.offsetX=dets.clientX+"px";
    cursor.offsetY=dets.clientY+"px";
})


// hello.addEventListener("click",function(){
//     if(flag){
//         hi.style.opacity=1;
//         hi.style.maxHeight=hi.scrollHeight + "px";
//         flag=0;
//     } 
//     else{

//         hi.style.opacity=0;
//         hi.style.maxHeight=0;
//         flag=1;
//     }
// })






helloelems.forEach((hello,index) => {
    let hi=hielems[index]
    let flag=1
    let toggleSign = hello.querySelector(".toggle-sign");
   

    hello.addEventListener("mouseover",function(){
        // hello.style.backgroundColor=""
        hello.style.color="white"
    })

    hello.addEventListener("mouseout",function(){
        hello.style.backgroundColor=" rgba(128, 128, 128, 0.637)"
        hello.style.color="white"
    })

    hello.addEventListener("click",function(){
        if(flag){
            hi.style.opacity=1;
            hi.style.maxHeight=hi.scrollHeight + "px";
            toggleSign.textContent="x";
            flag=0;
        }

        else{
        
            hi.style.opacity=0;
            hi.style.maxHeight=0;
            toggleSign.textContent="+";
            flag=1;
        }
    })
     
            
});