// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);



function writeCards(arrayOfStrings, event){
    let newArray = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {
        newArray.push(`Thank you, ${arrayOfStrings[i]}, for the wonderful ${event} gift!`);
    }
   return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday")


//let countDown = 11;

  //while (countDown >= 0) {
   // console.log(countDown--);
  //}

  function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
  }


