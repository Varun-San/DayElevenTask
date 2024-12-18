let sec2 = document.getElementById("sec2");
// let home = document.getElementById("content");
let temp = "none";
function fun() {
  if (temp == "none") {
    sec2.style.display = "block";
    temp = "block";
  } else {
    sec2.style.display = "none";
    temp = "none";
  }
}
let temp1 = "block";
function fun1() {
  if (temp1 == "block") {
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    sec5.style.display = "none";
    sec6.style.display = "none";
    temp1 = "block";
  }
  //else {
  //     sec2.style.display = "none";
  //     temp = "none";
  //   }
}
let temp2 = "none";
let sec3 = document.getElementById("sec3");
function fun2() {
  if (temp2 == "none") {
    sec3.style.display = "block";
    temp2 = "block";
  } else {
    sec3.style.display = "none";
    temp2 = "none";
  }
}
let temp3 = "none";
let sec4 = document.getElementById("sec4");
function fun3() {
  if (temp2 == "none") {
    sec4.style.display = "block";
    temp2 = "block";
  } else {
    sec4.style.display = "none";
    temp2 = "none";
  }
}
// creating the table
let submit = document.getElementById("submit");
let submit2 = document.getElementById("submit2");
let i = 1;

submit.addEventListener("click", () => {
  let uname = document.getElementById("uname").value;
  let pwd = document.getElementById("pwd").value;
  // let sec5 = document.getElementById("sec5");
  // sec5.style.display = "block";

  let tbody = document.getElementById("logintable");
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.textContent = i++;

  let td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.textContent = uname;

  let td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.textContent = pwd;
  tbody.appendChild(tr);
});
// ====================================
submit2.addEventListener("click", () => {
  let uname = document.getElementById("email").value;
  let pwd = document.getElementById("pwd2").value;
  // let sec6 = document.getElementById("sec6");
  // sec6.style.display = "block";

  let tbody = document.getElementById("signuptable");
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  tr.appendChild(td1);
  td1.textContent = i++;

  let td2 = document.createElement("td");
  tr.appendChild(td2);
  td2.textContent = uname;

  let td3 = document.createElement("td");
  tr.appendChild(td3);
  td3.textContent = pwd;
  tbody.appendChild(tr);
});

let temp4 = "none";
let sec5 = document.getElementById("sec5");
let sec6 = document.getElementById("sec6");
function fun4() {
  if (temp4 == "none") {
    sec5.style.display = "block";
    sec6.style.display = "block";
    temp4 = "block";
  } else {
    sec5.style.display = "none";
    sec6.style.display = "none";
    temp4 = "none";
  }
}
