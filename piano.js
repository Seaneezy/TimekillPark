function pianoKey(file) {
  var audio = new Audio(file)
  document.getElementById(file).play();
  audio.play();
  file.play();
}
function whiteOut(id) {
  document.getElementById(id).backgroundColor ="grey";
}
