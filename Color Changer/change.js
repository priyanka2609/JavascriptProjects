var colorBtn = document.querySelector('.color-change');
var bodyBcg = document.querySelector('body');

var colors = ['#E70812', '#0A6612' , '#EE4210', '#1B0D6D', '#980BAD', '#250017', '#F58FCF', '#30DE30'];

colorBtn.addEventListener('click' , changeColor);

function changeColor () {
	let random = Math.floor(Math.random()*colors.length)
	bodyBcg.style.background = colors[random];
}