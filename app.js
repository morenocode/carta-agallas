const $ = s => document.querySelector(s);
const formatPrice = n => Number.isInteger(n) ? String(n) : n.toFixed(2);
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let selectedCategory = 'all';
function renderCategories(){
 requestAnimationFrame(updateCategoryHint);
 $('#categories').innerHTML=[{id:'all',name:'Toda la carta'},...MENU].map(c=>`<button type="button" data-category="${c.id}" class="${selectedCategory===c.id?'active':''}" aria-pressed="${selectedCategory===c.id}">${c.name}</button>`).join('');
}
function renderMenu(){
 const query=normalize($('#search').value.trim());let count=0;
 $('#menu').innerHTML=MENU.filter(c=>selectedCategory==='all'||c.id===selectedCategory).map(c=>{
  let categoryCount=0;
  const groups=c.groups.map(g=>{
   const items=g.items.filter(i=>normalize([c.name,g.name,i.nombre,i.descripcion].join(' ')).includes(query));
   categoryCount+=items.length;if(!items.length)return '';
   return `${g.recuadro?'<div class="group-card">':''}${c.groups.length>1?`<div class="group-title"${g.id?` data-group="${g.id}"`:""}><h4>${g.name}</h4>${g.label?`<span>${g.label}</span>`:''}</div>`:''}${g.descripcion?`<p class="group-description">${g.descripcion}</p>`:''}<div class="item-grid">${items.map(i=>`<article class="menu-item"><div class="item-copy"><h5>${i.nombre}</h5>${i.descripcion?`<p>${i.descripcion}</p>`:''}</div><span class="item-price">S/ ${formatPrice(i.precio)}</span></article>`).join('')}</div>${g.recuadro?'</div>':''}`;
  }).join('');count+=categoryCount;
  return categoryCount?`<section class="category-section"><div class="category-title"><h3>${c.name}</h3><span>${categoryCount} ${categoryCount===1?'opción':'opciones'}</span></div><p class="category-intro">${c.intro}</p>${groups}</section>`:'';
 }).join('');
 $('#empty').hidden=count>0;$('#results-note').textContent=query?`${count} ${count===1?'opción encontrada':'opciones encontradas'}`:'';
}
function revealCategory(){const active=$('#categories .active');if(active)active.scrollIntoView({behavior:'instant',block:'nearest',inline:'nearest'});}
function scrollToCategoryStart(target){
 const section=target||$('#menu .category-section')||$('#empty');
 const stickyOffset=Math.max(0,...['.header','.menu-tools'].map(selector=>{
  const element=$(selector);
  if(!element)return 0;
  const style=getComputedStyle(element);
  return style.position==='sticky'||style.position==='fixed'?(parseFloat(style.top)||0)+element.getBoundingClientRect().height:0;
 }));
 window.scrollTo({top:Math.max(0,window.scrollY+section.getBoundingClientRect().top-stickyOffset-16),behavior:'instant'});
}
function selectCategory(id){selectedCategory=id;$('#search').value='';renderCategories();renderMenu();revealCategory();scrollToCategoryStart();}
$('#categories').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(button)selectCategory(button.dataset.category);});
$('#search').addEventListener('input',renderMenu);
$('#clear-search').addEventListener('click',()=>{selectedCategory='all';$('#search').value='';renderCategories();renderMenu();$('#search').focus();});
renderCategories();renderMenu();

const picker=$('#category-picker');
$('#nav-menu').addEventListener('click',()=>selectCategory('all'));
$('#nav-search').addEventListener('click',()=>{$('#search').focus({preventScroll:true});window.scrollTo({top:window.scrollY+$('.menu-tools').getBoundingClientRect().top-$('.header').getBoundingClientRect().height,behavior:'instant'});});
$('#nav-categories').addEventListener('click',()=>{
 $('#picker-options').innerHTML=[{id:'all',name:'Toda la carta',groups:MENU.flatMap(c=>c.groups)},...MENU].map(c=>'<button type="button" data-category="'+c.id+'" aria-pressed="'+(selectedCategory===c.id)+'">'+c.name+'<span>'+c.groups.reduce((n,g)=>n+g.items.length,0)+' opciones</span></button>').join('');
 picker.showModal();
});
$('#close-picker').addEventListener('click',()=>picker.close());
$('#picker-options').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;picker.close();selectCategory(b.dataset.category);});
picker.addEventListener('click',e=>{if(e.target===picker){const r=picker.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)picker.close();}});

function updateCategoryHint(){
 const list=$('#categories');
 $('#category-hint').hidden=list.scrollWidth-list.clientWidth-list.scrollLeft<8;
}
$('#categories').addEventListener('scroll',updateCategoryHint,{passive:true});
$('#category-hint').addEventListener('click',()=>{
 $('#categories').scrollBy({left:Math.max(180,$('#categories').clientWidth*.7),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
});
new ResizeObserver(updateCategoryHint).observe($('#categories'));

// Gallery advances only while visible. Visitors can pause, swipe or choose a photo.
const gallery=$('#galeria');
const slides=[...gallery.querySelectorAll('.gallery-slide')];
const dots=[...gallery.querySelectorAll('[data-slide]')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide=0, galleryTimer, galleryVisible=false, galleryHovered=false, galleryFocusPaused=false;
let galleryPaused=reducedMotion.matches;
function stopGallery(){clearTimeout(galleryTimer);}
function scheduleGallery(){
 stopGallery();
 if(galleryPaused||!galleryVisible||galleryHovered||document.hidden||galleryFocusPaused)return;
 galleryTimer=setTimeout(()=>{showSlide(currentSlide+1);},5000);
}
function showSlide(index){
 currentSlide=(index+slides.length)%slides.length;
 slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===currentSlide);slide.setAttribute('aria-hidden',String(i!==currentSlide));});
 dots.forEach((dot,i)=>dot.setAttribute('aria-pressed',String(i===currentSlide)));
 $('#gallery-count').textContent=(currentSlide+1)+' / '+slides.length;
 scheduleGallery();
}
function updateGalleryPlay(){
 $('#gallery-play').setAttribute('aria-label',galleryPaused?'Reproducir galería automática':'Pausar galería automática');
 $('#gallery-play span').textContent=galleryPaused?'▷':'Ⅱ';
}
$('#gallery-play').addEventListener('click',()=>{galleryPaused=!galleryPaused;galleryFocusPaused=galleryPaused;updateGalleryPlay();scheduleGallery();});
$('#gallery-prev').addEventListener('click',()=>showSlide(currentSlide-1));
$('#gallery-next').addEventListener('click',()=>showSlide(currentSlide+1));
$('.gallery-dots').addEventListener('click',e=>{const dot=e.target.closest('[data-slide]');if(dot)showSlide(Number(dot.dataset.slide));});
gallery.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){galleryHovered=true;stopGallery();}});
gallery.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){galleryHovered=false;scheduleGallery();}});
gallery.addEventListener('focusin',()=>{galleryFocusPaused=true;stopGallery();});
gallery.addEventListener('focusout',e=>{if(!gallery.contains(e.relatedTarget)){galleryFocusPaused=false;scheduleGallery();}});
document.addEventListener('visibilitychange',scheduleGallery);
new IntersectionObserver(entries=>{galleryVisible=entries[0].isIntersecting;scheduleGallery();},{threshold:.3}).observe(gallery);
let swipeStart=null;
$('.gallery-stage').addEventListener('pointerdown',e=>{if(e.pointerType==='touch')swipeStart={x:e.clientX,y:e.clientY};});
$('.gallery-stage').addEventListener('pointerup',e=>{if(!swipeStart)return;const dx=e.clientX-swipeStart.x,dy=e.clientY-swipeStart.y;swipeStart=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))showSlide(currentSlide+(dx<0?1:-1));});
$('.gallery-stage').addEventListener('pointercancel',()=>{swipeStart=null;});
reducedMotion.addEventListener('change',e=>{galleryPaused=e.matches;updateGalleryPlay();scheduleGallery();});
updateGalleryPlay();
