


// Basic stuff
document.addEventListener("DOMContentLoaded", function () {
const buttons = document.querySelectorAll(".buttons_ a");



// Animations for buttons
buttons.forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, {duration: 0.4, scale: 1.03, ease: "power1.out"});
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, {duration: 0.4, scale: 1, ease: "power1.in"});
  });
});



gsap.fromTo("body", {opacity: 0, scale: 0}, {delay: 1.5, duration: 1, opacity: 1, scale: 1});



// Alert for game folder clickable
document.querySelectorAll('#game-folder').forEach(function(el) {
  el.addEventListener('click', function() {
    Swal.fire({
      width: 650,
      color: '#ffffff',
      background: '#282828',
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      html: `
        <style>
          p {
            color: #ffffff;
          }
          b {
            color: #ffa801;
          }
        </style>

        <div class="sweet-alert-text-container">
        <br>
          <p><b>Game folder for Steam</b><br></br>Open Steam > Go to your Library > Right click Subnautica > Manage > Browse Local Files</p>
          <img src="https://media.discordapp.net/attachments/1012967749045190696/1070312447409401917/image.png" width="400" height="200">
          <br></br>
          <p><b>Game folder for Epic Games</b><br></br>Open Epic > Go to your Library > Click the ••• next to Subnautica > Manage > Click the folder icon</p>
          <img src="https://media.discordapp.net/attachments/1012967749045190696/1070316530065227836/image.png" width="400" height="200">
          <br></br>
        </div>
      `
    });
  });
});
});



// When the page loads, set all images hidden
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach(function (img) {
      img.style.display = "none";
  });



// On clicking the 'Show image' buttons, show the image
const anchors = document.querySelectorAll("a");
  anchors.forEach(anchor => {
    anchor.addEventListener("click", function () {
      
      // Trigger for special
      if (this.id === "special") {
        const img = document.querySelector("#img1");
        const icon = document.querySelector("a").firstChild;
        const display = img.style.display;
        img.style.display = display === "none" ? "block" : "none";
        icon.className = display === "none" ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up";
      } else { 

        // Trigger for usual
        const id = this.getAttribute("id");
        const img = document.querySelector("#img" + id);
        const icon = this.firstChild;
        const display = img.style.display;
        img.style.display = display === "none" ? "block" : "none";
        icon.className = display === "none" ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up";
      }
    });
  });
}); // End of function