const b=document.querySelector('.burger'),m=document.querySelector('.menu');b&&b.addEventListener('click',()=>m.classList.toggle('open'));
const pg=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===pg)a.classList.add('on')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function copiar(btn,txt,lbl){const ok=()=>{btn.textContent='✅ Copiado!';setTimeout(()=>btn.textContent=lbl,2500)};
if(navigator.clipboard)navigator.clipboard.writeText(txt).then(ok,()=>fb());else fb();
function fb(){const t=document.createElement('textarea');t.value=txt;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove();ok()}}
(function(){const M=document.getElementById('mdl');if(!M)return;let cur;const $=i=>document.getElementById(i);
document.querySelectorAll('[data-svc]').forEach(b=>b.addEventListener('click',()=>{cur=b.dataset.svc;const s=SV[cur];$('mN').textContent=s.n;$('mP').textContent=s.p;
$('mH').textContent=s.h?('Valor da entrada: '+s.h+' (já preenchido no código).'):'Valor sob consulta: combine o valor no WhatsApp e digite a entrada no seu app do banco.';
$('mQ').src=s.qr;$('mC').textContent=s.pix;M.hidden=false;document.body.style.overflow='hidden'}));
const close=()=>{M.hidden=true;document.body.style.overflow=''};M.querySelector('.x').onclick=close;M.addEventListener('click',e=>{if(e.target===M)close()});
$('cp').onclick=()=>copiar($('cp'),SV[cur].pix,'📋 Copiar código Pix');
$('fm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target),s=SV[cur];
const t=`Olá! Quero contratar pelo site da IA Connect:\n\n*Serviço:* ${s.n}\n*Valor:* ${s.p}\n*Nome:* ${f.get('nome')}\n*Empresa:* ${f.get('empresa')}\n*Cidade:* ${f.get('cidade')}\n*WhatsApp:* ${f.get('whats')}\n*O que desejo:* ${f.get('desc')}`;
window.open('https://wa.me/5573981024409?text='+encodeURIComponent(t),'_blank')})})();
