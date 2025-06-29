const amplop = document.getElementById('gambarAmplop');
const link = document.getElementById('link')

    amplop.addEventListener("click", function (e) {
      e.preventDefault();
      amplop.classList.add("animation"); 

      setTimeout(function () {
        window.location.href = link.href;
      }, 1000);
    });

    const teks = "Buka amplopnya keii";
const h1 = document.getElementById("typewriter");
let i = 0;

function ketik() {
  if (i < teks.length) {
    h1.textContent += teks.charAt(i);
    i++;
    setTimeout(ketik, 50);
  }
}

ketik();

