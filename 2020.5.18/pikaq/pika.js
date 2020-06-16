window.onload = function() {

let pika = {
  name: '皮卡丘',
  age: 18,
  varieties: 'pikachu',
  isMale: false,
  isLive: true,
  weight: 6,
  
  health: 100,
  food: 100,
  water: 100,
  clear:0,

  liveInterval: null,

  bark: function () {
    if (this.isLiving()) {
      view.displayPikaSay('皮卡~皮卡~皮卡~');
      this.water = this.water --;
    }
  },

  sayName: function () {

    if (this.isLiving()) {
      this.food--;
      this.water--;
      return this.name;
    }
  },

  run: function() {
    if (this.isLiving()) {
      if ( !this.isTired() ) {
        view.displayPikaSay(' 皮卡丘正在玩耍! ');
        this.food -= 10;
        this.water = this.water - 10;
        this.clear = this.clear + 10;
        let imageS1 = document.getElementById('imageSwitch');
        if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
          imageS1.setAttribute("src", "../image1/run.jpg");
         } else { 
           imageS1.setAttribute("src", "../image1/pikaq.jpg");
          }
      } else {
        view.displayPikaSay('皮卡丘玩累了。');
        let imageS1 = document.getElementById('imageSwitch');
        if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
          imageS1.setAttribute("src", "../image1/pant.jpg");
         } else { 
           imageS1.setAttribute("src", "../image1/pikaq.jpg");
          }
      }
    }
  },

  showStatus: function() {
    return '属性' + '&nbsp;&nbsp;' + 
    '血量: ' + this.health +
    '  肮脏度: ' + this.clear +
    '  饥饿度: ' + this.food + 
    '  饥渴度: ' + this.water;
  },


  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },

  live: function() {

    let self = this;

    this.liveInterval = setInterval(function(){

      self.water = self.water - 10;
      self.food = self.food - 5;
      self.checkStatus();
    }, 2000);
  },

  roombaths: function () {
    let salf = this;
    this.bathsInterval = setInterval(function(){
      salf.clear = salf.clear + 10;

      salf.clear = salf.clear > 100 ? 100 : salf.clear;

      salf.clearoom();
    },2600);
  },

   clearoom: function() {
     if (this.clear === 0) {
       view.displayPikaSay('您宠物十分干净！');
     };
     if (this.clear === 40 ) {
       view.displayPikaSay('您宠物有点脏了。');
     };
     if (this.clear === 100) {
       view.displayPikaSay('您宠物肮脏不堪！');
     };

  },

  baths: function () {
    if (this.isLiving()) {
      this.clear = 0;
      view.displayPikaSay('皮卡丘洗了一个干净的澡！');
    };
    let imageS1 = document.getElementById('imageSwitch');
    if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
      imageS1.setAttribute("src", "../image1/bath.jpg");
     } else { 
       imageS1.setAttribute("src", "../image1/pikaq.jpg");
      };  
  },


  eat: function () {
    if (this.isLiving()) {
      this.water = 100;
      this.food = 100;
      view.displayPikaSay('皮卡丘打了一个饱嗝~');
    }
    let imageS1 = document.getElementById('imageSwitch');
    if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
      imageS1.setAttribute("src", "../image1/eat.jpg");
     } else { 
       imageS1.setAttribute("src", "../image1/pikaq.jpg");
      }
  },

  checkStatus: function () {
      this.food = this.food <= 0 ? 0 : this.food;
      this.water = this.water <= 0? 0: this.water;

      if (this.water >= 50 && this.food >= 50) {
        this.health = this.health >= 100 ? 100 : this.health + 5;
      }

      if ( this.water <= 0 || this.food <= 0){
        this.health = this.health <= 0 ? 0 : this.health - 5;
        this.bark();
      };

      if (this.health === 0) {
        this.dead();
      }
  },

  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displayPikaSay('pikaaaaaaa....');

    let imageS1 = document.getElementById('imageSwitch');
    if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
      imageS1.setAttribute("src", "../image1/pikaq黑白照.jpg");
     }
  },

  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.water = 100;
      this.food = 100;
      this.live();
      
      let imageS1 = document.getElementById('imageSwitch');
      if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
        imageS1.setAttribute("src", "../image1/pikaq.jpg");
      } else {
        imageS1.setAttribute("src", "../image1/pikaq.jpg");
      };

      view.displayPikaSay('爷又来了！');
    } else {
      let imageS1 = document.getElementById('imageSwitch');
      if (imageS1.getAttribute("src") == "../image1/pikaq.jpg") { 
        imageS1.setAttribute("src", "../image1/angry.jpg");
      } else { 
        imageS1.setAttribute("src", "../image1/pikaq.jpg");
      };
      view.displayPikaSay('搞啥呢，爷还活着！');
    }
  },



  isLiving: function () {
    if (this.isLive) {
      return true;
    }

    view.displayPikaSay(this.name + '已经去了天堂，愿天堂没有你');
    return false;
    
  },

  risk: function(){
    if(this.health > 0){
      location.href='../risk 1/pikaqRisk.html';
    };
  },


};


let view = {
  displayPikaStatus: function () {
    let statusBoard = document.getElementById('pikaStatus');
    setInterval( function () {
      statusBoard.innerHTML = pika.showStatus();
     }, 100);
  },

  displayPikaSay: function (str) {
    let sayTxt = document.getElementById('pikaSay');
    sayTxt.innerHTML = str;
  }
};


let btnall = {
  btn1 : this.document.getElementById('runBtn'),
  btn2 : this.document.getElementById('bathBtn'),
  btn3 : this.document.getElementById('reBtn'),
  btn4 : this.document.getElementById('riskBtn'),
  btn5 : this.document.getElementById('feedBtn'),
};
btnall.btn1.onclick = function(){pika.run()};
btnall.btn2.onclick = function(){pika.baths()};
btnall.btn3.onclick = function(){pika.resurrect()};
btnall.btn4.onclick = function(){pika.risk()};
btnall.btn5.onclick = function(){pika.eat()};









view.displayPikaStatus();
pika.roombaths();
pika.live();
pika.run();





}