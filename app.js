 // POP UP CLOSE
 const closeX = document.querySelector('.close-pop-up');
 const acceptCookie = document.querySelector('.cookie-button');

 const closeCookie = function({target}) {
   var parent = target.parentNode.parentNode.parentNode;
   parent.classList.add('end-pop-up');
   parent.addEventListener('animationend', function() {
     parent.style.display = 'none';
     parent.parentNode.removeChild(parent);
   })
 }

 closeX.addEventListener('click', closeCookie);
 acceptCookie.addEventListener('click', closeCookie);


// //ON SCROLL EVENT NAV
// const nav = document.getElementById('nav-top');
// const nav2 = document.getElementById('nav-inside');
// const test = document.getElementById('more-posts');
// let changed = true;
// const changeNav = function() {
//
//   if (document.documentElement.scrollTop - test.offsetTop > 0) {
//     nav2.style.display = 'fixed';
//     nav.style.display = 'none';
//   }
// }
//
// window.addEventListener('scroll', changeNav);

// SKIP SUBSCRIPTION
const hiddenContent = "";
const skipper = document.getElementById('skipper');
const subContent = function({target}) {
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  paidPart.style.display = 'grid';
  // hiddenContent.style.display = 'block';
}

skipper.addEventListener('click', subContent);
const paidPart = document.querySelector('.article-paid-part');
// SMALL SETUP
window.onload = function() {
  paidPart.style.display = 'none';
}
