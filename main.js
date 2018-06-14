//
// let diceOne = {
//   val: () => Math.floor((Math.random() * 6) + 1),
//   roll: () => {
//     document.querySelector('.d1 div').className = `dice-${diceOne.val()}`
//   }
// }
//
// let diceTow = {
//   val: () => Math.floor((Math.random() * 6) + 1),
//   roll: () => {
//     document.querySelector('.d2 div').className = `dice-${diceTow.val()}`
//   }
// }
//
// document.querySelector('.botton').addEventListener('click', () => {
//   diceOne.roll()
//   diceTow.roll()
// })

function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}let dieOne = {
   value: 10,
   roll: function() {
       this.value = getRandom(1, 6);
       return this.value;
   }
};let dieTwo = {
   value: 1,
   roll: function() {
       this.value = getRandom(1, 6);
       return this.value;
   }
};function printNumber(number1, number2) {    let value1 = document.querySelector('#dice1');
   let value2 = document.querySelector('#dice2');
   // value1.innerText = dieOne.value;
   value1.style['background-image'] = `url(/images/inverted-dice-${number1}.svg)`;
   value2.style['background-image'] = `url(/images/inverted-dice-${number2}.svg)`;
}let button = document.querySelector('button');button.addEventListener('click', function(event) {    event.preventDefault();    let result1 = dieOne.roll();
   let result2 = dieTwo.roll();
   // console.log(dieOne.value);
   printNumber(result1, result2);
});printNumber(dieOne.value, dieTwo.value);
