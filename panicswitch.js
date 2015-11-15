var counter = 0;
function click() {
  alert('test');

  if (counter < 10) {
    var htmlCount = document.getElementById("para");
    htmlCount.innerHTML = counter;
    document.getElementById("para").innerHTML = counter;
    counter++
  }
  else if (counter == 10) {
    alert('you did it.')
  }

}
function basicClick() {
  alert('test');
  document.getElementById("para").innerHTML = "123";
}
