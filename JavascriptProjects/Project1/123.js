let input = document.querySelectorAll(".Ipt");
let label = document.querySelectorAll("label");
input.forEach(function (Ipt) {
  Ipt.addEventListener("click", () => {
    Ipt.style.backgroundColor = "blue";
    Ipt.style.color = "white";
  });
});
label.forEach(function (Iptt){
    Iptt.addEventListener('click', () => {
        Iptt.style.color = 'white'
    })
})