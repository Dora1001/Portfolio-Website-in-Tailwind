const sun = document.querySelector('.sunIco');
const moon = document.querySelector('.moonIco');

const iconToogle = () => {
  moon.classList.toggle('display-none');
  sun.classList.toggle('display-none');
}


const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    iconToogle();
    return;
  }

  document.documentElement.classList.add('dark');
  iconToogle();
}

sun.addEventListener('click', () => {
  themeSwitch();
});

moon.addEventListener('click', () => {
  themeSwitch();
});



const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_list');


burger.addEventListener ('click', () => {

nav.classList.toggle('hidden')

})

}


navSlide ();





