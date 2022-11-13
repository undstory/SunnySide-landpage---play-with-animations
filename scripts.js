const title = new SplitType('.intro__head');
const creatives = title.words[2].outerText.split('');
console.log(creatives)

const tl = gsap.timeline();

    tl.fromTo('.intro__head', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
    .to('.char', {
        y: 0,
        stagger: 0.05,
        duration: .5,
    })
    .fromTo('.intro__arrow', {y: '-100vh'}, {y: '30%', ease: "bounce.out", duration: 3})



    const arrowTl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    arrowTl.fromTo('.intro__arrow', {opacity: 0}, {opacity: 1, repeat: -1, duration: 1.5, delay: 3})
        .to(".intro__logo", {
        duration: 2,
        rotation: 360,
      });





