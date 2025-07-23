let btn = document.querySelector("button");

btn.addEventListener("click",setback);
function setback(){
    let divv= document.querySelector(".box");
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    divv.style.backgroundColor = `rgb(${r},${g},${b})`;

    let head = document.querySelector("h3");
    head.innerText=`rgb(${r},${g},${b})`;

}

