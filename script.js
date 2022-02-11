const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="animal"]');
const output = document.querySelector('#output');

btn.addEventListener("click", () => {
	let selected;
		for(const radioButton of radioButtons){
			if(radioButton.checked){
				selected = radioButton.value;
				break;
			}
		}

		if (selected == 'dog'){
			output.innerText = `You have selected dog, woof woof!`;
		}
		else if (selected == 'cat'){
			output.innerText = `You have selected cat, meeooowww! puurrr!`;
		}
		else if (selected == 'none'){
			output.innerText = `You animal hater lol`;
		}
		else {
			alert('Please choose an animal!');
		}
});
