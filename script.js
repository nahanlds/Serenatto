const btn = document.querySelector('#theme');
const body = document.querySelector('body');

btn.addEventListener("click", () =>{
    const mode = btn.checked ? 'dark' : 'light'
    body.setAttribute("data-bs-theme", mode);
})