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
   return `${c.groups.length>1?`<div class="group-title"><h4>${g.name}</h4>${g.label?`<span>${g.label}</span>`:''}</div>`:''}<div class="item-grid">${items.map(i=>`<article class="menu-item"><div class="item-copy"><h5>${i.nombre}</h5>${i.descripcion?`<p>${i.descripcion}</p>`:''}</div><span class="item-price">S/ ${formatPrice(i.precio)}</span></article>`).join('')}</div>`;
  }).join('');count+=categoryCount;
  return categoryCount?`<section class="category-section"><div class="category-title"><h3>${c.name}</h3><span>${categoryCount} ${categoryCount===1?'opción':'opciones'}</span></div><p class="category-intro">${c.intro}</p>${groups}</section>`:'';
 }).join('');
 $('#empty').hidden=count>0;$('#results-note').textContent=query?`${count} ${count===1?'opción encontrada':'opciones encontradas'}`:'';
}
function revealCategory(){const active=$('#categories .active');if(active)active.scrollIntoView({behavior:'instant',block:'nearest',inline:'nearest'});}
function scrollToCategoryStart(){
 const section=$('#menu .category-section')||$('#empty');
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
$('#show-rounds').addEventListener('click',()=>{selectedCategory='rondas';$('#search').value='';renderCategories();renderMenu();revealCategory();scrollToCategoryStart();});
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
