"use scrict";

//cria array com todas as janelas
let windows = document.querySelectorAll('.window');

//função para ligar todas as luzes com a classe light
let on = function(){
  windows.forEach((window) => window.classList.add('light'));
}

//função para apagar todas as luzes com a classe light
let off = function(){
  windows.forEach((window) => window.classList.remove('light'));
}

//possibilita acender e apagar as luzes manualmente
windows.forEach((window) =>{
  window.addEventListener('click', function(){
    window.classList.toggle('light');
  });
});

//altera de dia para noite e acende as luzes de todas as janelas
document.getElementById("on").addEventListener("click", () =>{
  document.getElementById('day').style.background = "#101048";
  on();
});

//altera de noite para dia e apaga as luzes de todas as janelas
document.getElementById("off").addEventListener("click", () =>{
  document.getElementById('day').style.background = "#87ceeb";
  off();
});