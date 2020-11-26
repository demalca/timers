function countDown(num) {
  const id = setInterval(function () {
    if (num > 1) {
      num--;
      console.log(num);
    } else {
      clearInterval(id);
      console.log("DONE!");
    }
  }, 1000);
}

function randomGame() {
  let counter = 0;
  const id = setInterval(function () {
    num = Math.random();
    console.log(num);
    counter++;
    if (num >= 0.75) {
      clearInterval(id);
      console.log(counter);
    }
  }, 1000);
}
