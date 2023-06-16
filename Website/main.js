console.log("hi");

let score = 0;
let cr1 = 0;
let cr2 = 0;
let cr3 = 0;
let cr4 = 0;
let cr5 = 0;
document.getElementById("finish").addEventListener("click", checkALL);
document.getElementById("q1").addEventListener("click", chk1);
document.getElementById("q2").addEventListener("click", chk2);
document.getElementById("q3").addEventListener("click", chk3);
document.getElementById("q4").addEventListener("click", chk4);
document.getElementById("q5").addEventListener("click", chk5);

function chk1() {
  let liq1 = document.getElementById("a").value.toLowerCase();
  console.log(liq1);
  if ((liq1 == "15") | (liq1 == "fifteen")) {
    if (cr1 != 1) {
      score = score + 1;
      cr1 = 1;
      console.log(cr1);
    }
  } else {
    if (cr1 != 0) {
      score = score - 1;
      cr1 = 0;
    }
  }
}

function chk2() {
  let liq2 = document.getElementById("b").value.toLowerCase();
  console.log(liq2);
  if ((liq2 == "425") | (liq2 == "425 mana orbs")) {
    if (cr2 != 1) {
      score = score + 1;
      cr2 = 1;
    }
  } else {
    if (cr2 != 0) {
      score = score - 1;
      cr2 = 0;
    }
  }
}

function chk3() {
  let liq3 = document.getElementById("c").value.toLowerCase();
  console.log(liq3);
  if ((liq3 == "5") | (liq3 == "five demon keys")) {
    if (cr3 != 1) {
      score = score + 1;
      cr3 = 1;
    }
  } else {
    if (cr3 != 0) {
      score = score - 1;
      cr3 = 0;
    }
  }
}

function chk4() {
  let liq4 = document.getElementById("d").value.toLowerCase();
  console.log(liq4);
  if ((liq4 == "diamonds") | (liq4 == "gems")) {
    if (cr4 != 1) {
      score = score + 1;
      cr4 = 1;
    }
  } else {
    if (cr4 != 0) {
      score = score - 1;
      cr4 = 0;
    }
  }
}

function chk5() {
  let liq5 = document.getElementById("e").value.toLowerCase();
  console.log(liq5);
  if ((liq5 == "spooky") | (liq5 == "sp00ky")) {
    if (cr5 != 1) {
      score = score + 1;
      cr5 = 1;
    }
  } else {
    if (cr5 != 0) {
      score = score - 1;
      cr5 = 0;
    }
  }
}

function checkALL() {
  document.getElementById("5outof5").innerHTML = score;
  let grade = "Calculating...";
  if (score < 3) {
    grade = "Fail";
    document.getElementById("gr").style.color = "#bf0000";
    document.getElementById("secret").innerHTML = ``;
  } else if (score < 5) {
    grade = "Pass";
    document.getElementById("gr").style.color = "#00bf00";
    document.getElementById(
      "secret"
    ).innerHTML = `<br><br><br><br><br><br>-----<a href="index3.html">I'M DONE I'M DONE I'M DONE!</a>-----`;
  } else {
    grade = "Perfect!!!";
    document.getElementById("gr").style.color = "#0000bf";
    document.getElementById(
      "secret"
    ).innerHTML = `<br><br><br><br><br><br>-----<a href="index3.html">I'M DONE I'M DONE I'M DONE!</a>-----`;
  }
  document.getElementById("gr").innerHTML = grade;
  console.log(score);
}

console.log(score);
