//Navbar Fixed
window.onscroll = function(){
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;

	if(window.pageYOffset > fixedNav){
		header.classList.add('navbar-fixed');
	}else{
		header.classList.remove('navbar-fixed');
	}
}

//Hamburger
const navManu = document.querySelector('#nav-menu')
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function(){
	hamburger.classList.toggle('hamburger-active'); 
	navManu.classList.toggle('hidden'); 
});