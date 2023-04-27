$(function(){
    // if(curr > lastScroll){
      // s1.autoplay.pause()
      // $('.swiper.s1').attr('dir','ltr')
      // s1.changeLanguageDirection('ltr')
      // s1.autoplay.start()
      
    // }else{
      // s1.autoplay.pause()
      // $('.swiper.s1').attr('dir','rtl')
      // s1.changeLanguageDirection('rtl')
      // s1.autoplay.start()
      
    // }

    // lastScroll = curr;

  ScrollTrigger.matchMedia({
    // large
    "(min-width: 768px)": function() {
      /**(gsap)sc-headline top video2 커지는 효과*/
      gsap.to('.sc-headline.top .video2 video',{
        scrollTrigger:{
          trigger:".sc-headline.top",
          start:"0% 0%",
          end:"100% 20%",
          // markers:true,
          scrub:1
        },
        xPercent:100,
        yPercent:500,
        scale:6
      })
      gsap.to('.text-slide',{
        scrollTrigger:{
          trigger:".sc-headline.top",
          start:"0% 0%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        xPercent:-50
      })
      /**sc-headline bottom 헤드라인 video 나오는 효과*/
      gsap.set('.sc-headline.bottom .boring',{
        xPercent:-5
      })

      gsap.to('.sc-headline.bottom .boring',{
        scrollTrigger:{
          trigger:".sc-headline.bottom",
          start:"0% 80%",
          end:"100% 100%",
          // markers:true,
          scrub:1
        },
        xPercent:0
      })
      
      gsap.to('.sc-headline.bottom .video3',{
        scrollTrigger:{
          trigger:".sc-headline.bottom .group-flex",
          start:"0% 80%",
          end:"100% 100%",
          // markers:true,
          scrub:1
        },
        width:'20vw',
      })
    },

    // small
    "(max-width: 767px)": function() {
      /**(gsap)sc-headline top video2 커지는 효과*/
      gsap.to('.sc-headline.top .video2 video',{
        scrollTrigger:{
          trigger:".sc-headline.top",
          start:"0% 0%",
          end:"100% 20%",
          // markers:true,
          scrub:1
        },
        xPercent:-90,
        yPercent:400,
        scale:5
      })
    },

    // all
    "all": function() {
      /**글씨 슬라이드 */
      const textSlide = new Swiper('.text-slide',{
        simulateTouch:false,
        direction: 'vertical',
        loop:true,
        speed:1000,
        autoplay:{
            delay:2000,
            disableOnInteraction:false
        }
      })

      /**group-slide 전광판 효과 */
      const s1 = new Swiper('.s1',{
        simulateTouch:false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 7000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
        reverseDirection: true,
      })

      const s2 = new Swiper('.s2',{
        simulateTouch:false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 7000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
      })
      const s3 = new Swiper('.s3',{
        simulateTouch:false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 7000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
      })

      const s4 = new Swiper('.s4',{
        simulateTouch:false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 7000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
      })

      const s5 = new Swiper('.s5',{
        simulateTouch:false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 7000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
      })

      /**text 색 효과 */
      $('.line-mask').each(function(i,element){
        
        gsap.to(element,{
          scrollTrigger:{
            trigger:element,
            start:"0% 100%",
            end:"100% 50%",
            // markers:true,
            scrub:1
          },
          "width":0
        })
      })
      gsap.to('.fix-box .btn-fix svg',10,{
        rotation:360,
        ease:'none',
        repeat:-1
      })
    
      gsap.to('.fix-box .btn-fix .wrap',{
        scrollTrigger:{
          trigger:".wrapper",
          start:"0% 0%",
          end:"100% 100%",
          scrub:1
        },
        ease:'none',
        rotation:-360*3,
      })

      gsap.to('.sc-about .group-what .video-box video',{
        scrollTrigger:{
          trigger:".sc-about .group-what .video-box video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })

      gsap.to('.sc-content .group-content.video .v0 video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.video .v0 video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })

      gsap.to('.sc-content .group-content.text .video-box.gr video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.text .video-box.gr video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })
      gsap.to('.sc-content .group-content.text .video-box.bk video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.text .video-box.bk video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })
      gsap.to('.sc-content .group-content.text .video-box.wh video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.text .video-box.wh video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })
      gsap.to('.sc-content .group-content.text .video-box.v1 video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.text .video-box.v1 video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })
      gsap.to('.sc-content .group-content.text .video-box.v2 video',{
        scrollTrigger:{
          trigger:".sc-content .group-content.text .video-box.v2 video",
          start:"100% 100%",
          end:"100% 0%",
          // markers:true,
          scrub:1
        },
        ease:'none',
        yPercent:15
      })

      /**마우스커서 효과 */
      $(document).mousemove(function(e){
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        gsap.to('.mouse-circle',{
          left: mouseX,
          top : mouseY
        })
      })

      /**btn hover */
      $('.btn-box').hover(function(){
        $(this).children('.btn-app').toggleClass('hover');
      })

      /**btn 스크롤 */
      let lastScroll = 0;

      $(window).scroll(function(){

        let curr = $(this).scrollTop();
        let target = $('#here').offset().top;

        console.log(target);
        
        
        if (curr >= target) {
          $('.header').addClass('hide');
        } else {
          $('.header').removeClass('hide');
        }
        
  
      });





    }

  })
})
