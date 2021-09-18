// gsap animation and scrolltrigger
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger); 

//import css file
import "yagos.css";

// mobile nav
const mobileNav = document.querySelector('.mobile-nav');
const openNav = () => {
    if (mobileNav.classList.contains('openNav')) {
        mobileNav.classList.remove('openNav')
        document.querySelector('.hamburger').textContent = 'menu';
    } else {
        mobileNav.classList.add('openNav')
        document.querySelector('.hamburger').textContent = 'close';
    }    
}
document.querySelector('.hamburger').onclick = openNav;

const allLinks = document.querySelectorAll('.links-nav li a');
allLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('openNav')
        document.querySelector('.hamburger').textContent = 'menu';
    })
})

// animations

const headerTl = gsap.timeline();
headerTl
    .from('.nav__list', {
        opacity: 0,
        yPercent: 50,
        stagger: 0.2
    })
    .from('.brand__logo', {
        opacity: 0,
        xPercent: -30
    })
    .from('.burger', {
        opacity: 0,
        ease: 'power2.inOut',
    })
    .from(['.hero-text, .sauce, .discount, header button, .copy'], {
        yPercent: 50,
        opacity: 0,
        onComplete: () => {
            document.querySelector('.burger').classList.add('jump')
        }
    })


// about
const aboutTl = gsap.timeline();
aboutTl
    .from('.about__content', {
        opacity: 0,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about img',
            start: 'top-=50% top',
            end: 'center center',
            scrub: true
        }
    })
    

// dinning
const dinningTl = gsap.timeline();
dinningTl
    .from('.dinning__content', {
        opacity: 0,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
            trigger: '.dinning',
            start: 'top-=80% top',
            end: 'center center',
            scrub: true
        }
    })

