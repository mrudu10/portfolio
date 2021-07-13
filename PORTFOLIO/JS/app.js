const themeBtn1 = document.querySelector('#themeBtn1');
const themeBtn2 = document.querySelector('#themeBtn2');

themeBtn1.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})
themeBtn2.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

const tl = gsap.timeline({ defaults: { ease: 'back' } })

tl.from('.illus', {
    opacity: 0,
    duration: 1
}).to('#y-2', {
    x: '100px',
    repeat: -1,
    yoyo: true,
    duration: .5
}, '-=5').to('#y-3', {
    x: '50px',
    repeat: -1,
    yoyo: true,
    duration: .9
}, '-=5').to('#r-1', {
    x: '200px',
    repeat: -1,
    yoyo: true,
    duration: .7
})


const tl2 = gsap.timeline({ defaults: { ease: 'power4' } })

tl2.from('.hero  img', {
    opacity: 0,
    y: '-20%',
    duration: 2,
    delay: 1
}).from('.hero .heroTitle', {
    opacity: 0,
    y: '150%',
    duration: 1
}, '-=2')


const tl3 = gsap.timeline({ defaults: { ease: 'bounce' } })
tl3.from('.hero .heroBtn #btn', {
    opacity: 0,
    delay: 2,
    stagger: .4
}).from('.navbar', {
    opacity: 0,
    duration: 3,
    delay: 1,
}, '-=2')

const scrollAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        // markers: true,
        start: '300px bottom',
        end: 'top top',
        // scrub: true
    }
})

scrollAbout.from('.about .title h2',{
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.about .aboutContent',{
    y: '50%',
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
}).from('.about .abtBtn',{
    y: '100%',
    opacity: 0,
    duration: 0.2,
})

const scrollSkills = gsap.timeline({
    scrollTrigger: {
        trigger: '.skills',
        // markers: true,
        start: '300px bottom',
        end: '-top top',
        // scrub: true
    }
})

scrollSkills.from('.skills .title',{
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.skills .cardRow .card',{
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    sragger: 0.1
},'-=0.6')

const scrollProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        // markers: true,
        start: '300px bottom',
        end: '-top top',
        // scrub: true
    }
})

scrollProjects.from('.projects .title',{
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.projects .cardRow .card',{
    x: '-100%',
    opacity: 0,
    duration: 0.7,
    sragger: 0.1
},'-=0.6')

const scrollContact = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        // markers: true,
        start: 'top bottom',
        end: 'top center',
        // scrub: true
    }
})

scrollContact.from('.contact .title',{
    x: '-100%',
    opacity: 0,
    duration: 0.7
}).from('.contact .iconRow .icon',{
    x: '-100%',
    opacity: 0,
    duration: 0.5,
    sragger: .1
},'-=0.6')