
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


const contactForm=document.getElementById('contact-form');
if(contactForm){
  const formStatus=document.getElementById('form-status');
  contactForm.addEventListener('submit',async(event)=>{
    event.preventDefault();
    const submitButton=contactForm.querySelector('button[type="submit"]');
    formStatus.textContent='';
    submitButton.disabled=true;
    try{
      const formData=new FormData(contactForm);
      const response=await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          name:formData.get('name'),
          phone:formData.get('phone'),
          email:formData.get('email'),
          service:formData.get('service'),
          message:formData.get('message'),
          page:window.location.href
        })
      });
      if(!response.ok)throw new Error('Contact request failed');
      formStatus.textContent='Bedankt! Je aanvraag is verzonden. We nemen snel contact met je op.';
      formStatus.classList.remove('error');
      formStatus.classList.add('success');
      contactForm.reset();
    }catch(error){
      formStatus.textContent='Er ging iets mis. Probeer opnieuw of bel ons direct.';
      formStatus.classList.remove('success');
      formStatus.classList.add('error');
    }finally{
      submitButton.disabled=false;
    }
  });
}
