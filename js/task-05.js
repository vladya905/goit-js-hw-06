const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
function updateOutput() {
    const text = input.value;
    if (text === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = text;
    }
}
input.addEventListener('input', updateOutput);