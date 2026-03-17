const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const operator = ['+', '-', '*', '%', '/'];
let lastWasOperator = false;
buttons.forEach((val) => {
    val.addEventListener("click", () => {
        const content = val.innerText;

        if (content === 'C') {
            display.value = '';
            lastWasOperator = false;
        }
        else if (content == 0 && display.value !== "") {
            display.value += content;
            lastWasOperator = false;

        }
        else if (content === 'X') {
            display.value = display.value.slice(0, -1);
            const lastChar = display.value.slice(-1);
            lastWasOperator = operator.includes(lastChar);
        }
        else if (content === '%' && display.value !== '' && !lastWasOperator) {

            display.value = eval(display.value) / 100;
            lastWasOperator = false;
        }

        else if ((content === '=' || content === '0' || content === '00') && (display.value === '')) {
            lastWasOperator = false;

            return;
        }
        else if (content === '=' && display.value !== '') {

            display.value = eval(display.value);
            lastWasOperator = false;
        }
        else if (operator.includes(content) && !lastWasOperator && display.value !== "") {
            display.value += content;
            lastWasOperator = true;
        }
        else if (!operator.includes(content)) {
            display.value += content;
            lastWasOperator = false;
        }
    });
});
