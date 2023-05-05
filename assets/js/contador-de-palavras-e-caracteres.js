let input = document.querySelector('#input-area');
let areaCharacters = document.querySelector('#result-characters');
let areaWords = document.querySelector('#result-words');
let btnClear = document.querySelector('#btn-clear');

input.addEventListener('input', () => {
    const numberCharacters = input.value.length;
    areaCharacters.textContent = numberCharacters;

    let words = input.value.trim().split(/\s+/);
    const numberWords = input.value.trim() === "" ? 0 : words.length;
    areaWords.textContent = numberWords;

    btnClear.style.display = 'block'
});

btnClear.addEventListener('click', () => {
    input.value = "";
    areaWords.textContent = "0";
    areaCharacters.textContent = "0";
    btnClear.style.display = 'none'
})