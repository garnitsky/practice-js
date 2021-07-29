const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    console.log(button);
    //button.style.display = 'none';

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
            console.log(item.value);
            //if (item.value == '') {
            //    button.style.display = 'none';
            //} else {
            //    button.style.display = 'block';
            //}

        });
    });
};

export default checkNumInputs;