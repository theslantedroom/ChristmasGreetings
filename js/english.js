

// main counter
let globalCounter = 1;

setInterval(() => {
  globalCounter += 1
  if (globalCounter == 2){globalCounter = 0};
}, 4000);

let nav1Loop;
let nav2Loop;
let nav3Loop;



const presentOpen = {
  1: false,
  2: false,
  3: false
};

const checkPresents = () => {
  if (presentOpen[1] == true && presentOpen[2] == true && presentOpen[3] == true){
  document.querySelectorAll('nav')[0].style.display = 'none';
  document.querySelectorAll('nav')[1].innerHTML = 'Happy';
  document.querySelectorAll('nav')[2].innerHTML = 'New';
  document.querySelectorAll('nav')[3].innerHTML = 'Year';
  };
};

  
  function createHTML(type, className) {
    const newElement = document.createElement(type);
    newElement.classList.add(className)
    document.getElementById('container').appendChild(newElement); 
  };

(function allBuildHTML(){

    // Banner
    createHTML('div', "banner");
    const banner = document.getElementsByClassName("banner")[0];
    banner.innerHTML = `
    <i class="fas fa-socks"></i>
    <i class="fas fa-holly-berry">
    <span>Ho Ho Ho..</span>
    <i class="fas fa-holly-berry">
    <i class="fas fa-socks"></i>
    </i>`;

setInterval(() => {
  if (globalCounter == 1){
    banner.innerHTML = `
    <i class="fas fa-socks"></i>

    <span>Merry Christmas</span>

    <i class="fas fa-socks"></i>
    </i>`;
  } else {

    banner.innerHTML = `
    <i class="fas fa-socks"></i>

    <span>Happy Holidays</span>

    <i class="fas fa-socks"></i>
    </i>`;
  } ;
}, 2000);
 
    // NAV
    createHTML('nav', "navSingleButton");
    const navSingleButton = document.getElementsByClassName("navSingleButton")[0];

    function createMenuItem(type, className, text, id) {
        const newElement = document.createElement(type);
        newElement.classList.add(className);
        newElement.id = id;
        document.getElementById('container').appendChild(newElement); 
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
      ???  
    </span>`;

    navSingleButton.addEventListener('click', function(){
      
      nav1.classList.remove('openNav1');
      nav2.classList.remove('openNav2');
      nav3.classList.remove('openNav3');

      clearInterval(nav1Loop);
      clearInterval(nav2Loop);
      clearInterval(nav3Loop);
      
        for (i = 0; i < 3; i++) {
          let newNavItem = document.getElementsByClassName("navItem")[i];
          newNavItem.classList.add('navSingleButtonOpen');
          newNavItem.innerHTML = `<i class="fas fa-gift"></i>`;
          }  

          navSingleButton.innerHTML = `<i class="fas fa-gifts"></i>`
          checkPresents();
    });
}());


const navItem = (index) => document.querySelectorAll('nav')[index];
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const focusPresent = (close1, close2) => {
  document.getElementsByClassName("navItem")[close1].classList.remove('navSingleButtonOpen')
  document.getElementsByClassName("navItem")[close2].classList.remove('navSingleButtonOpen')
  document.getElementsByClassName("navSingleButton")[0].innerHTML = `X`
};




// Buttons Presents OPEN

nav1.addEventListener('click', function(){
  focusPresent(1,2);
  presentOpen[1] = true; 
  nav1.classList.add('openNav1');
  nav2.classList.remove('openNav2');
  nav3.classList.remove('openNav3');
  clearInterval(nav1Loop);
  clearInterval(nav2Loop);
  clearInterval(nav3Loop);
  
  document.getElementById("sfx1").play();

  nav2.innerHTML = `<i class="fas fa-gift"></i>`;
  nav3.innerHTML = `<i class="fas fa-gift"></i>`;
  nav1.style.backgroundColor = 'initial';

  let milo=  document.getElementById('milo');
  let kispy=  document.getElementById('kispy');

  milo.classList.add('inview');
  setTimeout(() => {
    milo.classList.remove('inview'); 
  }, 1800);

  kispy.classList.add('inview');
  setTimeout(() => {
  kispy.classList.remove('inview'); 
  }, 1800);

  nav1.innerHTML = `
  <i class="fas fa-candy-cane"></i>
  from Annabel and Steve
  <i class="fas fa-candy-cane"></i>
  `

  let nav1counter = 0;
  nav1Loop = setInterval(() => {
    switch(nav1counter) {
      case 0:
        nav1.innerHTML = `
        <i class="fas fa-candy-cane"></i>
        we wish you a holly jolly Christmas
        <i class="fas fa-candy-cane"></i>
        `
        break;
      case 1:
        nav1.innerHTML = `
        <i class="fas fa-candy-cane"></i>
        we've been ring ting tingle-ing too
        <i class="fas fa-candy-cane"></i>
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
  focusPresent(0,2);
  presentOpen[2] = true; 
  nav1.classList.remove('openNav1');
  nav2.classList.add('openNav2');
  nav3.classList.remove('openNav3');
  clearInterval(nav1Loop);
  clearInterval(nav2Loop);
  clearInterval(nav3Loop);
  
  // document.getElementById("sfx2").play();
  nav1.innerHTML = `<i class="fas fa-gift"></i>`;
  nav3.innerHTML = `<i class="fas fa-gift"></i>`;
  nav2.style.backgroundColor = 'initial';

  let sy=  document.getElementById('sy');
  let ab=  document.getElementById('ab');

  sy.classList.add('inview');
  setTimeout(() => {
  sy.classList.remove('inview'); 
  }, 1500);
  ab.classList.add('inview');
  setTimeout(() => {
  ab.classList.remove('inview'); 
  }, 1500);

  nav2.innerHTML = `
  <i class="fas fa-heart"></i>
  We can't wait to see you next year!
  <i class="fas fa-heart"></i>
  `;

  let nav2counter = 0;
  nav2Loop = setInterval(() => {
    switch(nav2counter) {
      case 0:
        nav2.innerHTML = `
        <i class="fas fa-heart"></i>
        but since we've no place to go
        <i class="fas fa-heart"></i>
        `
        break;
      case 1:
        nav2.innerHTML = `
        <i class="fas fa-heart"></i>
        Let It Snow! Let It Snow! Let It Snow!
        <i class="fas fa-heart"></i>
        `
        break;
      default:
    }
    if(nav2counter == 1){
      nav2counter = 0;
    } else{
      nav2counter += 1;
    }; 
  }, 3000);

});


nav3.addEventListener('click', function(){
  focusPresent(0,1);
  presentOpen[3] = true; 
  nav1.classList.remove('openNav1');
  nav2.classList.remove('openNav2');
  nav3.classList.add('openNav3');
  clearInterval(nav1Loop);
  clearInterval(nav2Loop);
  clearInterval(nav3Loop);
  
  // document.getElementById("sfx3").play();
  nav2.innerHTML = `<i class="fas fa-gift"></i>`;
  nav1.innerHTML = `<i class="fas fa-gift"></i>`;
  document.body.classList.add('bodyState2');
  
  nav3.style.backgroundColor = 'initial';
  nav3.innerHTML = `
  <i class="fas fa-glass-cheers"></i>
  Much Love
  <i class="fas fa-glass-cheers"></i>`;
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
  }, 1700);

  kispy.classList.add('inview');
  setTimeout(() => {
  kispy.classList.remove('inview'); 
  }, 1500);


  let nav3counter = 0;
  nav3Loop = setInterval(() => {
    switch(nav3counter) {
      case 0:
        nav3.innerHTML = `Don we now our gay apparel`;
        break;
      case 1:
        nav3.innerHTML = `Feliz Navidad`;
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


  nav3.classList.add ('gift3open');
})


