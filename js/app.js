//menu responsive

addEventListener('DOMContentLoaded', ()=>{
    const btn__menu = document.querySelector('.btn__menu');
    if (btn__menu) {
        btn__menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu__items');
            menu_items.classList.toggle('show');
        });
    }
});

addEventListener('DOMContentLoaded', ()=>{
    const responsive = document.querySelectorAll('.responsive');
    console.log(responsive);
    if (responsive) {
        
        responsive.forEach((v,i) =>{
            console.log(responsive);
            responsive[i].addEventListener('click', () =>{
                const menu_items = document.querySelector('.menu__items');
                menu_items.classList.toggle('show');
            });
        })
    }
});

//scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () =>{
    let current = '';
    
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3.5) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
});

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);


$(document).ready(function() {
    var ir_a = $(".desplazar");

    ir_a.click(function(event){ 
        event.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 700

        );
    })
})