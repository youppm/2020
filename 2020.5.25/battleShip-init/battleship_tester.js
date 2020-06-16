// To use this tester file, you'll need to leave the view, model, controller
// objects in place, but comment out all the testing code except the parts
// you're using.  Remember you can use 
/* 
   code here 
*/
// to comment out large chunks of code.


// testing the view

// 网页中，网格的编号是A1,B2,E4,但代码里的编码似乎不是这样的
// 1 代码里是如何显示 A1,B2,E4这样的网格编号的？
// 2 具体的代码在哪里？
// 3 解释下代码

// 1 战舰的位置是随机生成的，那么随机生成的代码在哪里？
// 我来解释下这些代码的工作方式
// 2 代码中有两个细节
//   2.1 如何保障随机生成的战舰不跑到格子外面去
//   2.2 随机生成的战舰可以水平排列，也可以垂直排列，为什么？

//  战舰生成以后，
// 1 又是如何判定是否被用户击中的呢？
// 2 如何判定击沉的呢？

// 先来解释下，帮各位热热身，战舰位置是如何存储的？

var view = {
  // displayMessage("You sank my battleship!")
  // 在html页面左上角的一个div，通过修改其innerHTML的方式，来给用户提示
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

  // 通过修改对应<td>元素的class，为其修改显示的图片
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

  // 通过修改对应<td>元素的class，为其修改显示的图片
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
}; 

view.displayMiss("00");
view.displayHit("34");
view.displayHit("44");
view.displayHit("54");
view.displayMiss("55");
view.displayHit("12");
view.displayHit("13");
view.displayHit("14");
view.displayMiss("25");
view.displayHit("26");
view.displayHit("16");
view.displayHit("36");

view.displayMessage("Tap tap, is this thing on?");

// testing the model

// 数据模型
var model = {
  // 对象定义是，首先就定义了好几个属性
  // 棋盘的尺寸 （ 7 * 7 ）
  boardSize: 7,
  // 战舰的数量，3
  numShips: 3,
  // 战舰长度 3
  shipLength: 3,
  // 战舰击沉
	shipsSunk: 0,
  

  // 战舰的位置
  // 这显然是，随机生成战舰后，把随机生成的战舰位置存储起来的地方
  // 存放战舰位置的代码，是用数组来表示的
	ships: [
    // locations数组位置，记录战舰的真实位置，通过随机的方法取得
    // hits，击中
    { locations: ["", "", ""], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "hit", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],

  // ships[0] =>
  // 现在显示的代码，才是正式运行时候的代码
  // ["06", "16", "26"]，这种形式的代码，如果你看过书的话，应该能明白，这是举了一个例子而已。
  { 
    locations: ["", "", ""],  // 位置
    hits: ["", "", ""] // 击中
  }
  //              "02"
	fire: function(guess) {
    // 循环3次，每次循环可以猜到，是在判断其中的一个舰队
		for (var i = 0; i < this.numShips; i++) {
      // 以第一次循环发生的事情为例
      // 获取战舰，ships[0],    
      var ship = this.ships[i];

      // ship = { locations: ["06", "16", "26"], hits: ["", "", ""] },
      //  ship.locations
      // ( 参数 )，根据括号里的参数，到数组里面去查找，有没有对应的内容，有的话，返回对应数据在数组中位置，没有的话返回-1
      var index = ship.locations.indexOf(guess);  // "34"  1
      // 如果用户猜测是16，那么就能搜索到对应数据（击中了），返回的index 是  1
      // 如果index算下来 -1 ，也就是没有击中任何东西，接下来发生了什么？
			if (index >= 0) {
        // 有的，是处理击中后的情况
        // ["", "", ""]
        // ["", "hit", ""]
        // ship.hits[1] = "hit";
        // 根据击中的位置，给[hit]数组赋值
        ship.hits[index] = "hit";

				view.displayHit(guess); // 显示被击中的船
				view.displayMessage("HIT!"); // 显示被击中的信息

        // true
				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!");
					this.shipsSunk++;
				}
				return true;
			}
    }
    // 在用户猜测的位置 "02"，执行view.displayMiss方法
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	},

  // 这是的方法，预期返回的内容只有两个情况： 被击沉 true，没有被击沉 false。
  // 如果目前，战舰被击中的状态，hits: ["hit", "hit", "hit"]，那么for循环结束
  // 一定会运行到最后的  return true；
	isSunk: function(ship) {
    // 如果循环能顺利跑完，而没有运行到 if内的 return false代码的话
    // 就代表 hits数组里所有的项，都已经是"hit"
		for (var i = 0; i < this.shipLength; i++)  {
			if (ship.hits[i] !== "hit") {
				return false;  // 没有被击沉 false
			}
		}
    return true;
    
    // 方法（函数）是由返回值的
  },

	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
        // 这边就是这个方法的调用
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
		console.log("Ships array: ");
		console.log(this.ships);
	},

  // 显然是generateShip的实现
  // 其实是生成一艘战舰的代码
	generateShip: function() {
    // 定义direction 方向（垂着，水平）
    // 使用Mathdom来生成一个0~1的随机数，在将结果乘以2，得到一个0~2(不包括2)的随机数
    var direction = Math.floor(Math.random() * 2); // 这句代码的运行结果是什么？
    //  0 - 1
    //  行   列
		var row, col;

    if (direction === 1) { // horizontal 水平方向
      // 看到this关键字，代表什么？代表引用了这个对象的某个属性。
      row = Math.floor(Math.random() * this.boardSize); // 随机生成一个 0 - 7 之间（不包括7）的数字
      // 明明是7*7的棋盘，为什么在列上，只生成到4(7 - 战舰的长度 + 1)
      // 生成的仅仅是大战舰中，首个小战舰（占一格）的位置
      // 随机生成0-5，其实就是保证了，首艘战舰位置+2以后，尾艘战舰也在数字6之内，所以就不会超出棋盘
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1)); // 随机生成一个 0 - 5 之间（不包括5）的数字
		} else { // vertical 垂直方向
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1)); // 随机生成一个 0 - 5 之间（不包括5）的数字
			col = Math.floor(Math.random() * this.boardSize); // 随机生成一个 0 - 7 之间（不包括7）的数字
		}

    // 定义了一个空数组
		var newShipLocations = [];  // 往数组的末位，加入一个新的“项”
		for (var i = 0; i < this.shipLength; i++) { //  0 1 2
			if (direction === 1) {
        // 而大战舰的另外两艘小战舰是靠  首艘的位置+1 再+1 ，计算出来的
				newShipLocations.push(row + "" + (col + i)); // 14 15 16
			} else {
				newShipLocations.push((row + i) + "" + col); // 34 44 54  
			}
    }
    
    // newShipLocations = [ "11", "12", "13"]
		return newShipLocations;
	}

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
	
}; 

/*
model.fire("53"); // miss

model.fire("06"); // hit
model.fire("16"); // hit
model.fire("26"); // hit

model.fire("34"); // hit
model.fire("24"); // hit
model.fire("44"); // hit

model.fire("12"); // hit
model.fire("11"); // hit
model.fire("10"); // hit
*/


// testing parseGuess
function parseGuess(guess) {
  // 定义了一个数组，这段代码就创造了一个，互相转化的模型。
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  // alphabet[0]  => “A”
  // alphabet[1]  => “B”
  // alphabet[2]  => “C”

  // 这段代码呢？
	if (guess === null || guess.length !== 2) {
    // 真，输入的不合法
    // 输入字母和数字。这个位置的代码，哪怕你看不懂，也能猜到
    // 肯定是判断输入的东西准不准确，合不合法
		alert("Oops, please enter a letter and a number on the board.");
	} else {
    // 假，输入的合法

    // 在numArr数组中，寻找第一个数值是1的项，并返回该项的下标
    // numArr = [102, 10, 88, 1, 33, 21, 320, 9, 122, 323, 45];
    // console.log(numArr.indexOf(1)); // 3

    // 在_alphabet_数组中，寻找第一个_"E"_的项，并返回该项的下标4
    // guess字符串 “E4“ 中 charAt(0)
		var row = alphabet.indexOf(guess.charAt(0)); // 行就确定了是4
		var column = guess.charAt(1); // 直接把第二位数字拿出来，列就确定了也是4
		
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		} else {
      return row + column; // "02"
		}
	}
	return null;
}

/*
console.log("Testing parseGuess");
console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0")); // invalid
console.log(parseGuess("A7")); // invalid
*/

// testing the controller

var controller = {
	guesses: 0,

	processGuess: function(guess) {
    var location = parseGuess(guess); // "02"
    // 只要不是 0 false null undefinded 通通都是真
		if (location) { // 如果得到了返回的位置
			this.guesses++;
			var hit = model.fire(lcation);
			if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
			}
		}
	}
}


// You should see three ships on the board, one miss, and the message
// "You sank all my battleships in 10 guesses"
/*
controller.processGuess("A0"); // miss

controller.processGuess("A6"); // hit
controller.processGuess("B6"); // hit
controller.processGuess("C6"); // hit

controller.processGuess("C4"); // hit
controller.processGuess("D4"); // hit
controller.processGuess("E4"); // hit

controller.processGuess("B0"); // hit
controller.processGuess("B1"); // hit
controller.processGuess("B2"); // hit
*/

// 期末考试任务：在当前的战舰游戏上，开发一些书中没有提到的新功能