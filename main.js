const b=document.querySelector('.burger'),m=document.querySelector('.menu');b&&b.addEventListener('click',()=>m.classList.toggle('open'));
const pg=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===pg)a.classList.add('on')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function copiar(btn,txt,lbl){const ok=()=>{btn.textContent='✅ Copiado!';setTimeout(()=>btn.textContent=lbl,2500)};
if(navigator.clipboard)navigator.clipboard.writeText(txt).then(ok,()=>fb());else fb();
function fb(){const t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();ok()}}
