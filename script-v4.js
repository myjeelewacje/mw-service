
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

document.addEventListener('DOMContentLoaded', function () {
  function trackEvent(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      trackEvent('phone_click', {
        event_category: 'contact',
        event_label: link.getAttribute('href')
      });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      trackEvent('email_click', {
        event_category: 'contact',
        event_label: link.getAttribute('href')
      });
    });
  });

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      trackEvent('form_submit', {
        event_category: 'contact',
        event_label: 'contact_form'
      });
    });
  }
});
