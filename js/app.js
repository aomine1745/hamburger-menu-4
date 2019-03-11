var toggle = document.querySelector('.toggle');
toggle.addEventListener('click', active);
function active(){
	this.classList.toggle('active');
}