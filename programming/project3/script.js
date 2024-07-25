(function () {
    const buttons = document.querySelectorAll('.counterBtn, .counterBtn2');
    let count = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (button.classList.contains('counterBtn')) {
                count--;
            } else if (button.classList.contains('counterBtn2')) {
                count++;
            }
            const counter = document.querySelector('#counter');
            counter.textContent = count;

            if (count < 0) {
                counter.style.color = 'red';
            } else if (count > 0) {
                counter.style.color = 'green';
            } else {
                counter.style.color = 'black';
            }
        });
    });
})();
