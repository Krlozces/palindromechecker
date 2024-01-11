const inputElement = document.getElementById('text-input');
const buttonElement = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

const regexPattern = /[a-zA-Z0-9]/g;

const showResult = () => {
    const resultsArray = [];
    if(inputElement.value === ''){
        alert("Please input a value");
    }else{
        // regexPattern.test(inputElement.value)
        if(inputElement.value.match(regexPattern)){
            const inputProcessed = inputElement.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');   
            for(let i = 0; i < inputElement.value.length/2; i++){
                let isAPalindrome = false;
                console.log(`${inputElement.value[i]} === ${inputElement.value[inputElement.value.length - 1 - i]}`);
                if(inputProcessed[i] !== inputProcessed[inputProcessed.length - 1 - i]){
                    resultsArray.push(isAPalindrome);
                }else{
                    isAPalindrome = true;
                    resultsArray.push(isAPalindrome); 
                }
            }
            console.log(resultsArray);
            if(resultsArray.includes(false)){
                resultElement.textContent = `${inputElement.value} is not a palindrome.`;
            }else{
                resultElement.textContent = `${inputElement.value} is a palindrome.`;
            }       
        }else{
            resultElement.textContent = `${inputElement.value} is not a palindrome.`;
        }
    }
}

buttonElement.addEventListener("click", showResult);