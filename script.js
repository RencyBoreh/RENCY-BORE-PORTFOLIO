document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("falling-lights");

  function createLight() {
      const light = document.createElement("div");
      light.classList.add("light");
      light.style.left = Math.random() * window.innerWidth + "px";
      light.style.animationDuration = Math.random() * 3 + 2 + "s";
      
      container.appendChild(light);
      setTimeout(() => {
          light.remove();
      }, 5000);
  }

  setInterval(createLight, 300);
});
document.querySelector(".glow-circle").addEventListener("mouseover", function() {
  this.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.9)";
});

document.querySelector(".glow-circle").addEventListener("mouseleave", function() {
  this.style.boxShadow = "none";
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    fetch(this.action, {
        method: "POST",
        body: new FormData(this),
        headers: { "Accept": "application/json" }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMessage").style.display = "block";
            this.reset();
        } else {
            alert("Oops! Something went wrong. Try again.");
        }
    }).catch(error => alert("Error: " + error));
});




