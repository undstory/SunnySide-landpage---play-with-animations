const title = new SplitType('.intro__head');

gsap.registerPlugin(ScrollTrigger);
const creatives = title.words[2].outerText.split('');



const tl = gsap.timeline();

    tl.fromTo('.intro__head', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
    .to('.char', {
        y: 0,
        stagger: 0.05,
        duration: .5,
    })
    .fromTo('.intro__arrow', {y: '-100vh'}, {y: '30%', ease: "bounce.out", duration: 3})



    const arrowTl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    arrowTl.fromTo('.intro__arrow', {autoAlpha: 0}, {autoAlpha: 1, repeat: -1, duration: 1.5, delay: 3})
        .to(".intro__logo", {
        duration: 2,
        rotation: 360,
      });

    const main = gsap.timeline();

      main.fromTo(".title1", {

        rotation: -360,
        transformOrigin: "center center",
        ease: "Power2.easeInOut"},
        {
            rotation: 0,   scrollTrigger: {
                trigger: ".title1",
                start: "top 75%",
                end: "bottom 35%",
                duration: 2,
                scrub: 1,
                once: true
              }
        }
      );
      main.fromTo(".main__top--right", {autoAlpha: 0}, {autoAlpha: 1, duration: 3, ease: 'power3', stagger: 0.1,
      scrollTrigger: {
        trigger: ".main__top--right",
        start: "top center",
        scrub: 0.8,

      }
    });
      main.fromTo(".main__middle--left", {autoAlpha: 0}, {autoAlpha: 1, duration: 3, ease: 'power3', stagger: 0.1,
      scrollTrigger: {
        trigger: ".main__middle--left",
        start: "top center",
        scrub: 0.8,

      }});

      main.fromTo(".title2", {
        x: '+=150px',
        ease: "Power2.easeInOut"},{
            x:'0',
            scrollTrigger: {
                trigger: ".title2",
                start: "top 75%",
                end: "top 35%",
                duration: 1,
                scrub: 1,
                once: true
              },
        }

      );
      main.fromTo(".title3", {
        scale: 0,
        ease: "Power2.easeInOut"},{
            scale: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".title3",
                start: "top 75%",
                end: "top 95%",
                duration: 1,
                scrub: 1,
                once: true
              },
        }

      );
      main.fromTo(".title4", {
        scale: 0,
        ease: "Power2.easeInOut"},{
            scale: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".title4",
                start: "top 75%",
                end: "top 95%",
                duration: 1,
                scrub: 1,
                once: true
              },
        }

      );




