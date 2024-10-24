const quien = ["el perro", "mi abuela", "su tortuga", "mi pájaro"];
const que = ["se comió", "mojó", "aplastó", "rompió"];
const cuando = [
  "antes de la clase",
  "justo a tiempo",
  "cuando terminé",
  "durante el almuerzo",
  "mientras rezaba"
];

function generarExcusa() {
  let parteQuien = quien[Math.floor(Math.random() * quien.length)];
  let parteQue = que[Math.floor(Math.random() * que.length)];
  let parteCuando = cuando[Math.floor(Math.random() * cuando.length)];

  return `${parteQuien} ${parteQue} mi tarea ${parteCuando}.`;
}

document.getElementById("generateBtn").addEventListener("click", function() {
  let nuevaExcusa = generarExcusa();
  document.getElementById("excuse").innerHTML = nuevaExcusa;
});

window.onload = function() {
  document.getElementById("excuse").innerHTML = generarExcusa();
};
