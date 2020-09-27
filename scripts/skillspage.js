class parallaxTiltEffect {
    constructor({element, tiltEffect}) {
      this.element = element;
      this.container = this.element.querySelector(".about-skills-container");
      this.size = [300, 360];
      [this.w, this.h] = this.size;
      
      this.tiltEffect = tiltEffect;
      this.mouseOnComponent = false;
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.defaultStates = this.defaultStates.bind(this);
      this.setProperty = this.setProperty.bind(this);
      this.init = this.init.bind(this);
      this.init();
    }
    handleMouseMove(event) {
      const {offsetX, offsetY} = event;
      let X;
      let Y;
      
      if(this.tiltEffect == "reverse") {
        X = ((offsetX - (this.w/2)) / 3) /3;
        Y = (-(offsetY - (this.h/2)) / 3) /3;
      }
      else if(this.tiltEffect == "normal") {
        X = (-(offsetX - (this.w/2)) / 3) /3;
        Y = ((offsetY - (this.h/2)) / 3) /3;
      }
      
      this.setProperty('--rY', X.toFixed(2));
      this.setProperty('--rX', Y.toFixed(2));
      
      this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
      this.setProperty('--bX', (80 - (Y/4).toFixed(2)) + '%');
    }
    handleMouseEnter() {
      this.mouseOnComponent = true;
      this.container.classList.add("about-skills-container--active");
    }
    handleMouseLeave() {
      this.mouseOnComponent = false;
      this.defaultStates();
    }
    defaultStates() {
      this.container.classList.remove("about-skills-container--active");
      this.setProperty('--rY', 0);
      this.setProperty('--rX', 0);
      this.setProperty('--bY', '80%');
      this.setProperty('--bX', '50%');
    }
    
    setProperty(p, v) {
      return this.container.style.setProperty(p, v);
    }
    
    init() {
      this.element.addEventListener('mousemove', this.handleMouseMove);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
  }
  // const $ = e => document.querySelector(e);
  
  const wrap1 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--1"),
    tiltEffect: 'reverse'
  })
  const wrap2 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--2"),
    tiltEffect: 'normal'
  })
  const wrap3 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--3"),
    tiltEffect: 'reverse'
  })
  const wrap4 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--4"),
    tiltEffect: 'normal'
  })
  const wrap5 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--5"),
    tiltEffect: 'reverse'
  })
  const wrap6 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--6"),
    tiltEffect: 'normal'
  })

  const wrap7 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--7"),
    tiltEffect: 'reverse'
  })

  const wrap8 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--8"),
    tiltEffect: 'normal'
  })

  const wrap9 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--9"),
    tiltEffect: 'reverse'
  })

  const wrap10 = new parallaxTiltEffect({
    element: document.querySelector(".about-skills-wrap--10"),
    tiltEffect: 'normal'
  })







class skillsClass {
    constructor({element, percentage}) {
   
        this.element = element;
        this.percentage = percentage;

        this.init();
    }

    init(){
    
      
        var al = 0;
            var start = 4.72;
            var cw = this.element.canvas.width;
            var ch = this.element.canvas.height; 
            var diff;
            function progressSim(testing,number){
               
              diff = ((al / 100) * Math.PI*2*10).toFixed(2);
              testing.clearRect(0, 0, cw, ch);
              testing.lineWidth = 10;
              testing.fillStyle = 'white';
              testing.strokeStyle = "white";
              testing.textAlign = "center";
              testing.font="18px monospace";
              testing.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
              testing.beginPath();
              testing.arc(75.5, 75.5, 40, start, diff/10+start, false);
              testing.stroke();
              if(al >= number){
                  clearTimeout(sim);
         
              }
              al++;
            }
  
            var sim = setInterval(progressSim, 50,this.element,this.percentage);
                 
    }


}


function skillsLoading(){
              
    skillsLoading = function(){};


const skill1 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-javascript').getContext('2d'),
    percentage: 85
})

const skill2 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-python').getContext('2d'),
    percentage: 75
})

const skill3 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-cpp').getContext('2d'),
    percentage: 85
})


const skill4 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-php').getContext('2d'),
    percentage: 75
})


const skill5 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-sql').getContext('2d'),
    percentage: 75
})

const skill6 = new skillsClass({
    element: document.getElementById('about-skill-circularLoader-react').getContext('2d'),
    percentage: 75
})

const skill7 = new skillsClass({
  element: document.getElementById('about-skill-circularLoader-node').getContext('2d'),
  percentage: 85
})

const skill8 = new skillsClass({
  element: document.getElementById('about-skill-circularLoader-express').getContext('2d'),
  percentage: 85
})

const skill9 = new skillsClass({
  element: document.getElementById('about-skill-circularLoader-mongodb').getContext('2d'),
  percentage: 85
})

const skill10 = new skillsClass({
  element: document.getElementById('about-skill-circularLoader-restful').getContext('2d'),
  percentage: 85
})

            
}   
       