window.addEventListener('scroll',()=>{
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
   });

   function menuToggle(){
       const menu = document.querySelector('.menuToggle');
       menu.classList.toggle('active');
     const navegation = document.querySelector('.navegation');
     navegation.classList.toggle('active')
    }