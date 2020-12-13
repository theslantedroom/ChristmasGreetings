

// main counter
let globalCounter = 1;
console.log('globalCounter', globalCounter);

setInterval(() => {
  globalCounter += 1
  console.log('globalCounter', globalCounter);
  if (globalCounter == 2){globalCounter = 0};
}, 4000);
  
  
  function createHTML(type, className) {
    const newElement = document.createElement(type);
    newElement.classList.add(className)
    document.body.appendChild(newElement); 
  };

  (function allBuildHTML(){

    // Banner
    createHTML('div', "banner");
    const banner = document.getElementsByClassName("banner")[0];
    banner.innerHTML = `
    <i class="fas fa-socks"></i>
    <i class="fas fa-holly-berry">
    <span></span>
    <i class="fas fa-holly-berry">
    <i class="fas fa-socks"></i>
    </i>`;

setInterval(() => {
  if (globalCounter == 1){
    banner.innerHTML = `
    <i class="fas fa-holly-berry">
    <span>Fröhliche Weihnachten</span>
    <i class="fas fa-holly-berry">
    </i>`;
  } else {

    banner.innerHTML = `
    <i class="fas fa-socks"></i>
    <i class="fas fa-holly-berry">
    <span>Merry Christmas</span>
    <i class="fas fa-holly-berry">
    <i class="fas fa-socks"></i>
    </i>`;
  } ;
}, 2000);




    banner.addEventListener('mouseover', function(){
    banner.classList.add('mouseOverBanner');     
    });

    banner.addEventListener('mouseout', function(){
    banner.classList.remove('mouseOverBanner');     
    });
  

    // NAV
    createHTML('nav', "navSingleButton");
    const navSingleButton = document.getElementsByClassName("navSingleButton")[0];

    function createMenuItem(type, className, text, id) {
        const newElement = document.createElement(type);
        newElement.classList.add(className);
        newElement.id = id;
        document.body.appendChild(newElement); 
        newElement.innerText = text;
      };

    createMenuItem('nav', "navItem", '-', 'nav1');
    createMenuItem('nav', "navItem", '-', 'nav2');
    createMenuItem('nav', "navItem", '-', 'nav3');

    createMenuItem('div', "sy", '', 'sy');    
    createMenuItem('div', "ab", '', 'ab');
    createMenuItem('div', "milo", '', 'milo');    
    createMenuItem('div', "kispy", '', 'kispy');

    navSingleButton.innerHTML = `<span>
    <i class="fas fa-candy-cane"></i>
    </span>`;

    navSingleButton.addEventListener('click', function(){
      
        for (i = 0; i < 3; i++) {
          let newNavItem = document.getElementsByClassName("navItem")[i];
          newNavItem.classList.toggle('navSingleButtonOpen');
          newNavItem.innerHTML = `<i class="fas fa-gift"></i>`;
          }  
    });

    
    // popup heads


}());


const navItem = (index) => document.querySelectorAll('nav')[index];
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

nav1.addEventListener('click', function(){
  nav1.classList.toggle('openNav1');
  nav2.classList.remove('openNav2');
  nav3.classList.remove('openNav3');
  nav1.style.backgroundColor = 'white';
  nav1.innerHTML = `
  <i class="fas fa-candy-cane"></i>
  von annabel und steve
  <i class="fas fa-candy-cane"></i>
  `

  let nav1counter = 0;
  setInterval(() => {
    switch(nav1counter) {
      case 0:
        nav1.innerHTML = `
        <i class="fas fa-gifts"></i>
        from Annabel and Steve
        <i class="fas fa-gifts"></i>
        `
        break;
      case 1:
        nav1.innerHTML = `
        <i class="fas fa-gifts"></i>
        von annabel und steve
        <i class="fas fa-gifts"></i>
        `
        break;
      case 2:
        nav1.innerHTML = `<i class="fas fa-glass-cheers"></i>`;
      break;
      default:
    }
    if(nav1counter == 2){
      nav1counter = 0;
    } else{
      nav1counter += 1;
    }; 
  }, 3000);




  
})


nav2.addEventListener('click', function(){
  nav1.classList.remove('openNav1');
  nav2.classList.toggle('openNav2');
  nav3.classList.remove('openNav3');

  nav2.style.backgroundColor = 'white';
  nav2.innerHTML = `
  <i class="fas fa-heart"></i>
  wir werden dich bald sehen
  <i class="fas fa-heart"></i>
  `;


  let nav2counter = 0;
  setInterval(() => {
    switch(nav2counter) {
      case 0:
        nav2.innerHTML = `
        <i class="fas fa-gifts"></i>
        we will see you soon
        <i class="fas fa-gifts"></i>
        `
        break;
      case 1:
        nav2.innerHTML = `
        <i class="fas fa-heart"></i>
        wir werden dich bald sehen
        <i class="fas fa-heart"></i>
        `
        break;
      case 2:
        nav2.innerHTML = `<i class="fas fa-glass-cheers"></i>`;
      break;
      default:
    }
    if(nav2counter == 2){
      nav2counter = 0;
    } else{
      nav2counter += 1;
    }; 
  }, 3000);

});


nav3.addEventListener('click', function(){
  nav1.classList.remove('openNav1');
  nav2.classList.remove('openNav2');
  nav3.classList.toggle('openNav3');

  document.body.classList.add('bodyState2');
  
  nav3.style.backgroundColor = 'white';
  nav3.innerHTML = `<i class="fas fa-glass-cheers"></i>`;
  let sy=  document.getElementById('sy');
  let ab=  document.getElementById('ab');
  let milo=  document.getElementById('milo');
  let kispy=  document.getElementById('kispy');

  sy.classList.add('inview');
  setTimeout(() => {
  sy.classList.remove('inview'); 
  }, 1600);

  ab.classList.add('inview');
  setTimeout(() => {
  ab.classList.remove('inview'); 
  }, 1500);

  milo.classList.add('inview');
  setTimeout(() => {
    milo.classList.remove('inview'); 
  }, 1000);

  kispy.classList.add('inview');
  setTimeout(() => {
  kispy.classList.remove('inview'); 
  }, 1500);

  let nav3counter = 0;
  setInterval(() => {
    switch(nav3counter) {
      case 0:
        nav3.innerHTML = `Best Wishes`;
        break;
      case 1:
        nav3.innerHTML = `Alles Gute`;
        break;
      break;
      default:
    }
    if(nav3counter == 2){
      nav3counter = 0;
    } else{
      nav3counter += 1;
    }; 
  }, 3000);


  setTimeout(() => {
    nav3.innerHTML = `<i class="fas fa-glass-cheers"></i>`
  }, 5000);
  nav3.classList.add ('gift3open');
})


