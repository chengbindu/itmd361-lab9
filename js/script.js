function init(){
  //add your javascrip between these two lines of code

  const btn = document.getElementById('entrybutton');
  btn.addEventListener('click', function(event) {
    const input = document.getElementById('entryinput');
    const output = document.getElementById('textoutput');
    output.innerHTML = input.value;
    alert('Chengbin Du: ' + input.value);
  })
}
window.addEventListener('load', init);