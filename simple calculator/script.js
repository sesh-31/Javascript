document.addEventListener("DOMContentLoaded", function() {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll("button");
    let equal = document.querySelector(".btn2");
    let clear = document.querySelector(".btn3");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            console.log("Button clicked: ", value); // Debugging line
            if (value) {
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function(e) {
        console.log("Equal button clicked"); // Debugging line
        if (screen.value === '') {
            screen.value = '0';
        } else {
            try {
                let answer = eval(screen.value);
                screen.value = answer;
            } catch (e) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener("click", function() {
        console.log("Clear button clicked"); // Debugging line
        screen.value = "";
    });
});
