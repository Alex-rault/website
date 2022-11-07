new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true, //to create navigation dots.
    navigationPosition: 'right', //Changing the position of the navigation dots.
    navigationTooltips: ['Home', 'Volcano formation', 'Recent Volano', 'Advantages & disadvantages'],
    showActiveTooltip: true, //making the text of the nav stay according to each section
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    
    onLeave: function(origin, destination, direction) {
        
        if( destination.index == 0 ){
            console.log("home section")
        }
        else if( destination.index == 1 ){
            formationVolcanoSection()
        }
        else if( destination.index == 2 ){
            recentVolcanoSection()
        }
        else if( destination.index == 3 ){
            advdisadvVolcanoSection()
        }
       },

afterRender: function(){
    homepageSection()
}

});   

// home section animations
function homepageSection(){
    //gsap- create timeline
    const tl = new TimelineMax({delay:0.5})

    //animate in
    tl.from('#logo', {y: -150, scale: 0.1, opacity:0, ease: 'elastic', duration: 3})
      .from('.section-home .content', {y: 30, opacity:0, duration: 1}, "-=2")
}


// Formation section animations
function formationVolcanoSection(){
    console.log("formation section!")
}

// Recent volcano section animations
function recentVolcanoSection(){
    console.log("Recent Volcano Section!")
}

// advantage and disadvantage section animations
function advdisadvVolcanoSection(){
    console.log("Adavantages & disadvantages!")
}



// ---------------slide navigation buttons------------------//

//next slide button//
let nextSlideBtn = document.querySelectorAll('.next-slide-btn')
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        fullpage_api.moveSlideRight();
    })
})

//Prev slide button//
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn')
prevSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})


//jump to section 2 btn
let jumptoS2Btns = document.querySelectorAll('.jumpto-s2')
jumptoS2Btns.forEach(btn => { 
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(2);
    }) 
}) 


//light box gallery section
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
   image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
   }) 
})

lightbox.addEventListener('click', e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})



