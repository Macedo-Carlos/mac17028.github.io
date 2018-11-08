function modalOnClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    document.getElementById("modal-caption").innerHTML = element.alt;
  }