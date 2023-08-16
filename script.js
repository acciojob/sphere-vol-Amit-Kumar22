function volume_sphere() {
    //Write your code here
    var vol;
	let r=document.getElementById("radius").value;
  r = Math.abs(r);
  vol = (4/3) * Math.PI * Math.pow(r, 3);
  vol = vol.toFixed(4);
  document.getElementById('volume').value = vol;
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere();