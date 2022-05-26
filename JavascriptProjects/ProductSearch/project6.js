let search = function () {
  let searchBox = document.querySelector("#search-box").value.toLowerCase();
  let product = document.querySelectorAll(".product");
  let productName = document.getElementsByTagName("h2");

  for (let i = 0; i < productName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      {
        if (textValue.toLowerCase().indexOf(searchBox) > -1) {
          product[i].style.display = "contents";
        } else {
          product[i].style.display = "none";
        }
      }
    }
  }
};
