
const slides=[...document.querySelectorAll('.hero-bg')];
const dots=[...document.querySelectorAll('.hero-dots button')];
let active=0;
function setSlide(i){active=i;slides.forEach((s,idx)=>s.classList.toggle('active',idx===active));dots.forEach((d,idx)=>d.classList.toggle('active',idx===active));}
if(slides.length){setInterval(()=>setSlide((active+1)%slides.length),4500);dots.forEach((d,i)=>d.addEventListener('click',()=>setSlide(i)));}

document.querySelectorAll('.ba').forEach((box)=>{
  const layer=box.querySelector('.ba-before-layer');
  const line=box.querySelector('.ba-line');
  const input=box.querySelector('.ba-input');
  function update(){layer.style.width=input.value+'%';line.style.left=input.value+'%';}
  input.addEventListener('input',update);update();
});
