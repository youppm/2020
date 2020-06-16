window.onload = function () {
  //name
  let myy;

  myy = 10;

  console.log(myy * 2);
  console.log(myy % 3);
  console.log(Math.floor(myy / 3));
  
  let lyn;
  lyn = "20";

  console.log(myy + lyn);

  if (myy === lyn) {
    console.log(true);
  }else {
    console.log(false);
  };

  zl = 11;
  console.log(myy > zl ? myy : zl );
  

  let score = 65;
  switch (Math.floor(score/10)) {
    case 10:
    case 9:
    case 8:console.log("优秀");break;
    case 7:
    case 6:console.log("及格");break;
    default: console.log("不及格");break;
    
    
  };

  nd = [ ];

  


  nd[0] = 0;
  nd[1] = 1;
  nd[2] = 2;
  nd[3] = 3;
  nd[4] = ["e", "f", "g"];
  nd[5] = 5;
  nd[6] = "string";
  nd[7] = ["a", "b", "c"];
  
  console.log(nd[6]);

  for (let rd = 0; rd < nd.length; rd++) {
    console.log("arr[" + rd + "] = " + nd[rd] + "");
  };




  console.log("------------------------------");

  
  

  // 遍历nd的数组 开始是0  ，结束8
  for (let count = 0; count < nd.length; count++) {
    if(typeof nd[count] === "object") {
      // 遍历 nd[7] 开始0 
      for( let i = 0; i < nd[7].length; i++) {
        //console.log(count);
        //console.log(i);
        console.log(nd[count][i]);
      }
    }
  };


  console.log("------------------------------");

  function jia(x,y) {
    return x + y ;
  };

  console.log(jia(1, 2));
  console.log(jia(485, 682));
  console.log(jia(138, 972));
  
  


  function bida(x,y) {
    return x > y ? x : y ;
  };
  console.log(bida(10, 20));
  console.log(bida(5, 29));
  console.log(jia(bida(10, 20), bida(5, 29)));

  console.log("-----------------------------");
  
  // function pingj(a, b, c) {
  //   return (a+b+c)/3;
  // };
  // console.log(pingj(1,2,3));

  // function pingjj(a, b, c ,d, e) {
  //   return (a+b+c+d+e)/5;
  // };
  // console.log(pingjj(1,2,3,4,5));

  // function pingjjj(a, b, c ,d, e, f, g) {
  //   return (a+b+c+d+e+f+g)/7;
  // };
  // console.log(pingjjj(1,2,3,4,5,6,7));

  let anumber = [10, 20, 4, 67, 5];

  function bnumber(mber) {
    console.log(mber);
    let sum = 0;
    for(let count = 0; count < mber.length; count++) {
      sum = sum + mber[ count ];
    }
    return sum;
  };

  function avg(mber) {
    let sum = bnumber(mber);
    return sum / mber.length;
  };

  console.log(bnumber(anumber));



  console.log("-----------2020.5.18-----------");
  


















  


}










