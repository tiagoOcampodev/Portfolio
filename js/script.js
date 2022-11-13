//OJO
let punto = document.querySelector(".punto");
let ojo = document.querySelector(".ojo");

document.onmousemove = (e) => {
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";

    punto.style.left = x;
    punto.style.top = y;
}
///MODAL========================================
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnAbrirModal2 = document.querySelector("#btn-abrir-modal2");
const btnAbrirModal3 = document.querySelector("#btn-abrir-modal3");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click" , ()=>{
    modal.showModal();
})
btnAbrirModal2.addEventListener("click" , ()=>{
    modal.showModal();
})
btnAbrirModal3.addEventListener("click" , ()=>{
    modal.showModal();
})
btnCerrarModal.addEventListener("click" , ()=>
{
    modal.close();
})


btnAbrirModal2.addEventListener("click" , ()=>{
    modal.classList.toggle("abierto");
})
btnAbrirModal.addEventListener("click" , ()=>{
    modal.classList.toggle("abierto2");
})


/////////////NAV FIXED===================================
window.addEventListener("scroll" , function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

