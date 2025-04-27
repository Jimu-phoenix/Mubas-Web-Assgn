function show(mylist){
    let x = document.getElementById(mylist);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
let dropButton = document.querySelector('.dropdown')

let lists = document.querySelectorAll('.list')
lists.forEach(list => {
    list.style.display = 'none'
})
})

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('wrapper');

    setTimeout(() => {
      loader.classList.add('fade-out');
      content.style.display = 'block';
    }, 3200); // Wait for the progress bar animation (3s + a tiny bit)
  });
