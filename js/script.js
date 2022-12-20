// SCRIPT FINAL 
// codigo final 
// subida a github 
  
  // Responsive menu
  $("#responsive-nav-bar").hide();

  $("#image-button-black").click(function(){
    $("#responsive-nav-bar").slideToggle();
  });

  $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
    $("#responsive-nav-bar").slideToggle(200);
  })

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


