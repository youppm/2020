window.onload = function() {

let pika = {
  name: '皮卡丘',
  age: 18,
  varieties: 'pikachu',
  isMale: false,
  isLive: true,
  
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
    return '属性' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + 
           '血量: ' + '&nbsp;&nbsp;&nbsp;--------------------&nbsp;&nbsp;&nbsp;' 
           + this.health;
  },


  riskEat: function () {
    let salf = this;
    this.riskeatInterval = setInterval(function(){
      salf.health = salf.health > 100 ? 100 : salf.health;
      salf.health = salf.health < 0 ? 0: salf.health;
    },0);
  },
  eat: function () {
    if (this.isLiving()) {
      if (this.health < 100) {
        this.health = this.health + 10;
        view.displayPikaSay('杰尼龟补了10滴血');
        document.blood.src = "../image1/riskpikaq加血.png";
      }else{
        view.displayPikaSay('杰尼龟现在是满血状态');
      };
    };
  },

  checkStatus: function () {
    this.health = this.health <= 0 ? 0: this.health;

    if(this.health <= 40) {
      view.displayPikaSay('杰尼龟要没血了！');
      document.blood.src = "../image1/riskpikaq减血.png";
    }
    if(this.health <= 0) {
      view.displayPikaSay('他打败了你！');
    }

    if (this.health === 0) {
      this.dead();
    }
  },
  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displayPikaSay('杰尼龟战死了');
  },


  isLiving: function () {
    if (this.isLive) {
      return true;
    }

    view.displayPikaSay(this.name + '已经战死了，愿天堂没有你');
    return false;
    
  },

  bigtu: function() {
    view.displayPikaSay('在大地图使用不了该技能');
  },

  attack: function() {
    if(this.health > 0) {
      enemy.health = enemy.health - 10;
      view.displayPikaSay( '杰尼龟对红蛋发动了攻击');
      this.isLiving();
    }else{
      view.displayPikaSay('杰尼龟死了！');
      setTimeout(function(){
        location.href='./pikaqRisk.html';
      }, 2000);
    }
    enemy.aida();
    
 },

 progress: function() {
  let bar = document.getElementById("bar");
  bar.style.width = this.health + "%";
 },

 defense: function() {
   if(enemy.aida()){
     this.health = this.health + 15;
     view.displayPikaSay('杰尼龟试图抵挡攻击！');
   }else{
     view.displayPikaSay('白毛还没有攻击杰尼龟');
   }
 }
};



let btnall = {
  btn1 : this.document.getElementById('feedBtn'),
  btn2 : this.document.getElementById('attackBtn'),
  btn3 : this.document.getElementById('defenseBtn'),
  btn4 : this.document.getElementById('escapeBtn'),
};
btnall.btn1.onclick = function(){pika.eat()};
btnall.btn2.onclick = function(){pika.attack()};
btnall.btn3.onclick = function(){pika.defense()};
btnall.btn4.onclick = function(){pika.escape()};



let enemy = {
  name: '红蛋',
  age: 18,
  varieties: '炸弹',
  isMale: true,
  isLive: true,
  
  nature: '恶',
  health: 100,

  liveInterval: null,



  
  bark: function () {
    if (this.isLiving()) {
      view.displayPikaSay('一只野生的' + this.varieties + '出现了');
      this.water--;
    }
  },

  riskEat: function () {
    let salf = this;
    this.riskeatInterval = setInterval(function(){
      salf.health = salf.health < 0 ? 0 : salf.health;
    },0);
  },

  
  checkStatus: function () {
    if (this.health === 0) {
      this.dead();
    }
  },
  
  whileStatus: function() {
    return '性格：' + this.nature + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
         + '血量: ' + this.health;
  },

  checkStatus: function () {
    this.health = this.health <= 0 ? 0: this.health;

    if(this.health <= 40) {
      view.displayPikaSay('快！他要没血了！');
    }
    if(this.health <= 0) {
      view.displayPikaSay('他被你打败了！');
    }

    if (this.health === 0) {
      this.dead();
    }
  },
  dead: function () {
    clearInterval(this.liveInterval);
    this.isLive = false;
    view.displayPikaSay('红蛋：我去你....');

  },


  isLiving: function () {
    if (this.isLive) {
      return true;
    }else{
      view.displayPikaSay('已经成功击杀红蛋！');
      return false;
    }
    
  },

  aida: function() {
    if(this.health > 0){
      let time = this;
      let times = pika;
      this.liveInterval = setInterval(function(){
        if(time.isLiving) {
          times.health = times.health - 15;
          view.displayPikaSay('红蛋暴怒地袭击了杰尼龟');
          times.progress();
          time.checkStatus();
        };
      }, 4000);
    }else{
      view.displayPikaSay('恭喜你成功击败了红蛋！');
      setTimeout(function(){
        location.href='./pikaqRisk.html';
      }, 2000);
    };
  },

 
  

};



let view = {
  displayPikaStatus: function () {
    let statusBoard = document.getElementById('pikaStatus');
    setInterval( function () {
      statusBoard.innerHTML = pika.showStatus();
     }, 100);
     
    let statusBoard1 = document.getElementById('enemyStatus');
    setInterval( function () {
      statusBoard1.innerHTML = enemy.whileStatus();
    },100);
  },

  displayPikaSay: function (str) {
    let sayTxt = document.getElementById('pikaSay');
    sayTxt.innerHTML = str;
  }
};










enemy.bark();
view.displayPikaStatus();
pika.riskEat();
enemy.riskEat();
pika.checkStatus();
pika.isLiving();
enemy.isLiving();
pika.progress();







}