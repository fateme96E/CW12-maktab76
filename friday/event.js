

let acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
         
          let panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            let active = document.querySelectorAll(".accordion");
            for (let j = 0; j < active.length; j++) {
                active[j].nextElementSibling.style.maxHeight = null;
            }

            panel.style.maxHeight = panel.scrollHeight + "px"; 
        }
    });
}
