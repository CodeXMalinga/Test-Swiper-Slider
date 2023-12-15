const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    slidesPerView: 3,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const links = document.querySelectorAll('a');

  console.log(links);

  links.forEach((link) => {
    link.addEventListener('mouseover', function () {
      gsap.to(link.children, { x: -250});
    });
  
    link.addEventListener('mouseout', function () {
      gsap.to(link.children, { x: 1});
    });
  });
  