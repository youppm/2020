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
      view.displayPikaSay('噗嗤！噗嗤！噗嗤！');
      this.water--;
    }
  },

  sayName: function () {

    if (this.isLiving()) {
      this.food--;
      this.water--;
      return this.name;
    }
  },

  showStatus: function() {
    return '属性' + '&nbsp;&nbsp;' + 
    '血量: ' + this.health +
    '  清洁度: ' + this.clear +
    '  饥饿度: ' + this.food + 
    '  饥渴度: ' + this.water;
  },


  isTired: function() {
    if (this.food >= 20 && this.water >= 20) {
      return false;
    }
    return true;
  },


  riskEat: function () {
    let salf = this;
    this.riskeatInterval = setInterval(function(){
      salf.health = salf.health > 100 ? 100 : salf.health;
    },0);
  },
  eat: function () {
    if (this.isLiving()) {
      if (this.health < 100) {
        this.health = this.health + 10;
        view.displayPikaSay('杰尼龟补了10滴血');
        document.blood.src = "../image1/riskpikaq加血";
      }else{
        view.displayPikaSay('杰尼龟的血量还用不着补充');
      };
    };
  },

  
  checkStatus: function () {
    this.water = this.water <= 0 ? 0 : this.water;
    this.food = this.food <= 0 ? 0 : this.food;

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


  isLiving: function () {
    if (this.isLive) {
      return true;
    }

    view.displayPikaSay(this.name + '已经去了战死了，愿天堂没有你');
    return false;
    
  },

  bigtu: function() {
    view.displayPikaSay('在大地图使用不了该技能');
  },

  
  escapeGo: function() {
    view.displayPikaSay('杰尼龟想家了');
  }

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
  btn1 : this.document.getElementById('esdBtn'),
  btn2 : this.document.getElementById('atdBtn'),
  btn3 : this.document.getElementById('dedBtn'),
  btn4 : this.document.getElementById('fedBtn'),
};
btnall.btn1.onclick = function(){pika.escapeGo()};
btnall.btn2.onclick = function(){pika.bigtu()};
btnall.btn3.onclick = function(){pika.bigtu()};
btnall.btn4.onclick = function(){pika.bigtu()};












view.displayPikaStatus();
pika.riskEat();




}