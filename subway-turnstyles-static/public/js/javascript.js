console.log('DOM loaded.')
$( function() {
  $("#datepicker").datepicker();
})

const images = [
"http://i.imgur.com/7s2p8Of.gif",
"http://i.imgur.com/WFPgLrH.png",
"http://i.imgur.com/ocKSbZX.gif",
'http://i.imgur.com/ERBzmc7.png',
'http://i.imgur.com/jfYUvG8.gif',
'http://i.imgur.com/XCziOBL.gif',
'http://i.imgur.com/sc3vfZp.png',
'http://i.imgur.com/DJg3opl.png',
'http://i.imgur.com/s5pMxV5.png',
'http://i.imgur.com/WbFsCxN.png',
'http://i.imgur.com/sy9c4PG.png',
'http://i.imgur.com/uAdKgR9.png',
'http://i.imgur.com/w1btAbI.gif',
'http://i.imgur.com/nlxHuVu.gif',
'http://i.imgur.com/9Roy8Qz.gif',
'http://i.imgur.com/ek5eqFG.png',
'http://i.imgur.com/Y1UfAGN.gif',
'http://i.imgur.com/qve1PpS.png',
]

// if light,
//   change div 3 - div 6 background images
// l
// var randomImg = Math.floor((Math.random() * (images.length - 1)));

let assignImages = function() {
  let riderContainer = $('.rider-container')
  counter = 1;
  for (let i = 1; i <= images.length; i++) {
     let img = $('.div' + i);
    img.attr('src', images[Math.floor((Math.random() * (images.length - 1)))]);
    console.log(img)
    counter += 1;
    console.log(counter);
  }
}

// let assignImages = function() {
//   for (let i = 1; i <= images.lengt; i++) {
//     counter = 1;
//     if ($('.div' + i)) {
//       console.log('div' + i);
//       $('.div' + i).attr('src', images[randomImg]);
//       counter =+ 1;
//     }
//   }
// }

assignImages();

// div1.attr('src', randomImg)
