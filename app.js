const $ = s => document.querySelector(s);
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let selectedCategory = 'all';
function renderCategories(){
 $('#categories').innerHTML=[{id:'all',name:'Toda la carta'},...MENU].map(c=>`<button type="button" data-category="${c.id}" class="${selectedCategory===c.id?'active':''}" aria-pressed="${selectedCategory===c.id}">${c.name}</button>`).join('');
}
function renderMenu(){
 const query=normalize($('#search').value.trim());let count=0;
 $('#menu').innerHTML=MENU.filter(c=>selectedCategory==='all'||c.id===selectedCategory).map(c=>{
  let categoryCount=0;
  const groups=c.groups.map(g=>{
   const items=g.items.filter(i=>normalize([c.name,g.name,...i.slice(0,2)].join(' ')).includes(query));
   categoryCount+=items.length;if(!items.length)return '';
   return `${c.groups.length>1?`<div class="group-title"><h4>${g.name}</h4>${g.label?`<span>${g.label}</span>`:''}</div>`:''}<div class="item-grid">${items.map(i=>`<article class="menu-item"><div class="item-copy"><h5>${i[0]}</h5>${i[1]?`<p>${i[1]}</p>`:''}</div><span class="item-price">S/ ${i[2]}</span></article>`).join('')}</div>`;
  }).join('');count+=categoryCount;
  return categoryCount?`<section class="category-section"><div class="category-title"><h3>${c.name}</h3><span>${categoryCount} ${categoryCount===1?'plato':'platos'}</span></div><p class="category-intro">${c.intro}</p>${groups}</section>`:'';
 }).join('');
 $('#empty').hidden=count>0;$('#results-note').textContent=query?`${count} ${count===1?'plato encontrado':'platos encontrados'}`:'';
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
$('#categories').addEventListener('click',e=>{const button=e.target.closest('[data-category]');if(!button)return;selectedCategory=button.dataset.category;renderCategories();renderMenu();revealCategory();scrollToCategoryStart();});
$('#search').addEventListener('input',renderMenu);
$('#clear-search').addEventListener('click',()=>{selectedCategory='all';$('#search').value='';renderCategories();renderMenu();$('#search').focus();});
$('#show-rounds').addEventListener('click',()=>{selectedCategory='rondas';$('#search').value='';renderCategories();renderMenu();revealCategory();scrollToCategoryStart();});
renderCategories();renderMenu();
