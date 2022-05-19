const adviceNum = document.querySelector('span');
const adviceText = document.querySelector('h1');
const dice = document.querySelector('.dice');

async function getAdvice() {
    let url = 'https://api.adviceslip.com/advice';

    fetch(url)
        .then(response => response.json())
        .then(document => {
            const { id, advice } = document.slip;
            adviceNum.textContent = `${id}`;
            adviceText.textContent = `"${advice}"`;
        })
        .catch(error => console.log(error));

}
getAdvice();

dice.addEventListener('click', getAdvice);