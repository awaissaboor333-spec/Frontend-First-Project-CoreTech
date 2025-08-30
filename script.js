// Smooth scroll for internal links (Bootstrap already smooth via CSS; this improves keyboard/old browsers)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id.length>1 && document.querySelector(id)){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Contact form (frontend only)
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name=form.querySelector('[name="name"]').value.trim();
    const email=form.querySelector('[name="email"]').value.trim();
    const msg=form.querySelector('[name="message"]').value.trim();
    if(!name || !email || !msg){ alert('Please fill all fields.'); return; }
    if(!/^\S+@\S+\.\S+$/.test(email)){ alert('Please enter a valid email.'); return; }
    alert(`Thanks, ${name}! Your message has been received.`);
    form.reset();
  });
}
