const hamburger = document.querySelector('nav .nav-hamburger input');
    const nav = document.querySelector('nav ul');

    hamburger.addEventListener('click', function(){
      nav.classList.toggle('slide');
    });