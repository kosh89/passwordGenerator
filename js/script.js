let passLength = document.querySelector('#passLength'),
	lengthControl = document.querySelector('#lengthControl'),
	lowercase = document.querySelector('#lowercase'),
	uppercase = document.querySelector('#uppercase'),
	numbers = document.querySelector('#numbers'),
	symbols = document.querySelector('#symbols'),
	btnGenerate = document.querySelector('#btnGenerate'),
	params = document.querySelectorAll('.params'),
	chars = document.querySelectorAll('.chars'),
	outBlock = document.querySelector('.out-block'),
	lowArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
	upArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	symbArr = ['~', '%', '*', '!', '^', '&', '?', '@', '#', '$', ')', '('],
	finalArr = [];

passLength.innerHTML = lengthControl.value;

lengthControl.addEventListener('input', lengthSet);

function lengthSet() {
	passLength.innerHTML = lengthControl.value;
}

for (let i = 0; i < params.length; i++) {
	params[i].addEventListener('change', changeColor);	
}

function changeColor() {
	let attr = this.dataset.attr;
	for (let i = 0; i < chars.length; i++) {
		if (chars[i].dataset.attr == attr) {
			chars[i].classList.toggle('active');
		}
	}	
}

btnGenerate.addEventListener('click', generatePassword);

function generatePassword() {
	finalArrSet();	
	let min = 0;
	let max = finalArr.length;
	if (max != 0) {
		outBlock.innerHTML = '';
		for (let k = 1; k <= 4; k++) {
			let result = '';
			for (let i = 0; i < lengthControl.value; i++) {
				result += finalArr[getRandomInt(min, max)];
			}
			outBlock.innerHTML += '<p class="out">' + result + '</p>';
		}
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function finalArrSet() {
	finalArr = [];
	if (lowercase.checked) finalArr = finalArr.concat(lowArr);
	if (uppercase.checked) finalArr = finalArr.concat(upArr);
	if (numbers.checked) finalArr = finalArr.concat(numArr);
	if (symbols.checked) finalArr = finalArr.concat(symbArr);	
}