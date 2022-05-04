const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");
const e = document.querySelector(".e");
const f = document.querySelector(".f");
const g = document.querySelector(".g");
const h = document.querySelector(".h");
const i = document.querySelector(".i");
const btn = document.querySelector(".btn");
const keyboard = document.querySelector(".key");
const buttonKey = document.querySelector(".keybtn");
keyboard.addEventListener("keydown", () => {
  console.log(keyboard.value);
});
buttonKey.addEventListener("click", add);
a.addEventListener("click", aEvent);
b.addEventListener("mouseover", aEvent);
b.addEventListener("mouseout", bEvent);
c.addEventListener("mouseover", move);
d.addEventListener("dblclick", dEvent);
e.addEventListener("onkeydown", eEvent);
f.addEventListener("Mouseup", fEvent);
g.addEventListener("keydown", gEvent);
h.addEventListener("mousewheel", hEvent);
i.addEventListener("mouseover", iEvent);
btn.addEventListener("click", aChange);
function add() {
  const newDiv = document.createElement("div");
  newDiv.innerText = `${keyboard.value}`;
  newDiv.classList.add("shadow");
  document.body.appendChild(newDiv);
}
function aChange(toogle) {
  if (toogle && a.classList.contains("fade-active")) {
    a.innerText = "btn use";
    a.style.background = "green";
    a.style.transition = "all 1s ease";
    a.style.opacity = "1";
    a.classList.remove("fade-active");
  } else {
    a.innerText = "btn use";
    a.style.background = "green";
    a.style.transition = "all 1s ease";
    a.style.opacity = "0";
    a.classList.add("fade-active");
  }
}
function move(toogle) {
  this.innerText = "btn used";
  let a = Math.round(Math.random() * 1000);
  this.style.transform = `translate(${a}px,${a}px)`;
  this.style.background = "grey";
  this.style.transition = "all 1s ease";
}
function aEvent() {
  this.innerText = "abc";
  this.style.background = "yellow";
  this.style.transition = "all 1s ease";
  this.style.opacity = "0.5";
}

function bEvent() {
  this.innerHTML = "xyz";
  this.style.transition = "all 1s ease";
  this.style.background = "green";
}

function cEvent() {
  this.innerHTML = "xyz";
  this.style.background = "green";
}

function dEvent() {
  this.innerHTML = "xyz";
  this.style.background = "green";
}

function eEvent() {
  this.innerHTML = "xyz";
  this.style.background = "green";
}

function fEvent() {
  this.innerHTML = "xyz";
  const newDiv = document.createElement("div");
  newDiv.classList.add("shadow");
  document.body.appendChild(newDiv);
  this.style.background = "green";
  console.log(newDiv);
}

function gEvent() {
  this.innerHTML = "xyz";
  this.style.background = "green";
}

function hEvent() {
  this.innerHTML = "xyz";
  this.style.background = "green";
}

function iEvent() {
  this.innerHTML = "this is box e";
}
