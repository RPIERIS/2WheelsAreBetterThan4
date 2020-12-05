//--------------------
// dynamic navbar
//--------------------

const navBar = document.querySelector('#navBar');
let navSectionList = document.querySelectorAll('.container_new');
console.log(navSectionList);

for (const section of navSectionList) {
  const sectionName = section.id;
  let titleLoc = section.getElementsByTagName('H2');
  let titleName = titleLoc.textContent;
  console.log(titleName);
  // sectionName.replace('-', ' ')
  let navElement = document.createElement('li');
  let newContent = document.createTextNode(sectionName);
  navElement.appendChild(newContent);
  navElement.classList.add('select');
  navElement.classList.add(section.id);
  console.log(navElement);
  navBar.appendChild(navElement);
}


//--------------------
// navbar and sections
//--------------------

const navSelect = document.getElementById('navBar');

navSelect.addEventListener('click',function(e){
  let newName = e.target.className.slice(7) // as the specific name of the bike starts from the 7th character
  let contactNewLoc = document.getElementById(newName);
  contactNewLoc.scrollIntoView();
});

//---------------------
// back to top button
//---------------------

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY >= 44) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  mybutton.style.display = "block";
}

//---------------------
// heighlight navbar
//---------------------

let navigLink = document.querySelectorAll('.select');
let sectionList = document.querySelectorAll('.container_new');

window.addEventListener('scroll', function(){
    for (list of sectionList) {
      let position = list.getBoundingClientRect();

      if (position.top <= 150 && position.bottom >= 150) {
        for (const navig of navigLink) {
          if(navig.classList.contains(list.id)) {
            navig.classList.add('active-nav');
          }
        }
      } else {
        for (const navig of navigLink) {
          if (navig.classList.contains(list.id)){
            navig.classList.remove('active-nav');
          }
        }
      }
    }
});

//---------------------
// nav timeout
//---------------------

myNav = document.getElementById("navBar");

function hideNav(){
  if (window.scrollY >= 44){
    console.log(window.scrollY);
    setTimeout(function(){
      myNav.style.display = 'none';
    }, 1000);
  }
}
