const burger = document.querySelector('div.burger');
const nav = document.querySelector('nav');
const navUl = document.querySelector('nav ul');
const iconBurger = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-circle-xmark');

const btnBio = document.querySelector('.btn_bio');
const bio = document.querySelector('div.bio');
const btnBioX = document.querySelector('div.bio i');
const body = document.querySelector('body');

const btnNav = document.querySelectorAll('nav ul li'); // Pobiera wszystkie li z nav
let navHaight = document.querySelector('nav').offsetHeight; // wysokońć NAV

// od jakiej wysokości zaczyna sie element ... //
let aboutMe = document.querySelector('.aboutMe').offsetTop;
let cooperationMe = document.querySelector('.cooperationMe').offsetTop;
let you = document.querySelector('.you').offsetTop;
let recruitment = document.querySelector('.recruitment').offsetTop;
let talkMe = document.querySelector('.talkMe').offsetTop;
let blog = document.querySelector('.blog').offsetTop;

// Włączenie wyłączenie nav
burger.addEventListener('click', function () {
  navUl.classList.toggle('activeBurger');
});

// włączenie Bio
btnBio.addEventListener('click', function () {
  bio.classList.add('activeBio');
  body.style.overflow = 'hidden'; // blokowanie przewijania strony
});
// wyłączenie Bio
btnBioX.addEventListener('click', function () {
  bio.classList.remove('activeBio');
  body.style.overflow = '';
});

// Kliknięcie na element nawigacji

btnNav.forEach((li) => {
  li.addEventListener('click', (e) => {
    clickNav = e.target.classList; // który elemetn został kliknięty w nav => zmienić a na 'kliknięty'

    // POBIERANIE KAZDORAZOWO WARTOŚCI BY BYŁO RESPONSYWNE
    navHaight = document.querySelector('nav').offsetHeight;
    aboutMe = document.querySelector('.aboutMe').offsetTop;
    cooperationMe = document.querySelector('.cooperationMe').offsetTop;
    you = document.querySelector('.you').offsetTop;
    recruitment = document.querySelector('.recruitment').offsetTop;
    talkMe = document.querySelector('.talkMe').offsetTop;
    blog = document.querySelector('.blog').offsetTop;
    //

    if (clickNav == 'navAboutMe') {
      window.scrollTo(0, 0);
    } else if (clickNav == 'navCooperationMe') {
      window.scrollTo(0, cooperationMe - navHaight);
    } else if (clickNav == 'navYou') {
      window.scrollTo(0, you - navHaight);
    } else if (clickNav == 'navRecruitment') {
      window.scrollTo(0, recruitment - navHaight);
    } else if (clickNav == 'navTalkMe') {
      window.scrollTo(0, talkMe - navHaight);
    } else if (clickNav == 'navBlog') {
      window.scrollTo(0, blog - navHaight);
    }
    navUl.classList.remove('activeBurger');
  });
});
btnNav[0].style.fontFamily = 'bold'; // po wczytaniu strony od razu Bold na 1 elemencie
btnNav[0].style.fontWeight = 'bold';
let circleBold;
const boldScroll = (e) => {
  const topY = scrollY;
  //Tło nav
  nav.style.backgroundColor = `rgb(248, 248, 248)`; // Ciemne
  navUl.style.backgroundColor = `rgb(248, 248, 248)`; // jasny
  btnNav.forEach((circleBold) => (circleBold.style.fontFamily = '')); // Kasowanie Bold w nav po kadym kliknięciu
  btnNav[0].style.fontWeight = '';
  // dodawanie Bold w miejscu którym jesteś
  if (topY >= 0 && topY < cooperationMe - navHaight) {
    btnNav[0].style.fontFamily = 'bold';
    btnNav[0].style.fontWeight = 'bold';
  } else if (topY >= cooperationMe - navHaight && topY < you - navHaight) {
    btnNav[1].style.fontFamily = 'bold';
  } else if (topY >= you - navHaight && topY < recruitment - navHaight) {
    btnNav[2].style.fontFamily = 'bold';
  } else if (topY >= recruitment - navHaight && topY < talkMe - navHaight) {
    btnNav[3].style.fontFamily = 'bold';
  } else if (topY >= talkMe - navHaight && topY < blog - navHaight) {
    btnNav[4].style.fontFamily = 'bold';
  } else if (topY >= blog - navHaight && topY < document.body.offsetHeight) {
    btnNav[5].style.fontFamily = 'bold';
  }
  // Kolor tła Nav

  if (topY > aboutMe - navHaight) {
    nav.style.backgroundColor = `rgb(217, 217, 217)`; //Ciemny
    navUl.style.backgroundColor = `rgb(217, 217, 217)`;
  } else {
    nav.style.backgroundColor = `rgb(248, 248, 248)`; //Jasny
    navUl.style.backgroundColor = `rgb(248, 248, 248)`;
  }
};

/// WYŚWIETLANIE FIRM W MOJE WSPÓŁPRACE

const time = 10; // cas co ile sekunt zmieniać sie ma baner

// Tablica z partnerami
const arrPartners = [
  ['APP', 'S-Plus', 'NTS', 'XS Logistics'],
  ['Lionelo', 'Zeegma', 'Overmax', 'Duka', 'Astat'],
  ['Take & GO', 'Surge Cloud', 'Qodeca', 'Third Kind Games'],
  ['Przychodnia Sucholeska', 'Medicover'],
  ['Pricer', 'Cenatorium', 'Desa Locum'],
  ['Kura Warzyw'],
  ['Qborg'],
  ['HANDS grupa reklamowa'],
  ['sieć siłowni UP'],
];
const span = [...document.querySelectorAll('.brandPartner span')]; // pobrane wszystkie miejsca(z indexem) gdzie ma sie wyświetlac brand

const showPartner = (e) => {
  let active = 0;
  span[e].textContent = arrPartners[e][active]; // Wyświetlenie po załadowaniu strony

  // Funkcja zmieniająca banery
  const show = () => {
    active++;
    if (active === arrPartners[e].length) {
      active = 0;
    }

    span[e].textContent = arrPartners[e][active];
  };
  setInterval(show, time * 1000);
};
//Petla uruchamiająca interwał na każdym elemecie
span.forEach((e, index) => {
  showPartner(index);
});

window.addEventListener('scroll', boldScroll);
