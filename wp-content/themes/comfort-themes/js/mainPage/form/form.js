import Inputmask from "inputmask";
export const form = () => {
    const rangeInput = document.getElementsByClassName('form__volumeContent__wrapper__range')[0];
    const numberInput = document.getElementsByClassName('form__volumeContent__wrapper__number')[0];
    const costOutput = document.getElementsByClassName('costContainer__cost')[0];
    const radioInput = document.querySelectorAll("[name=radio-input]")

    const input = document.getElementsByClassName('form__phone')[0];
    Inputmask({
        mask: "+7 (999) 999-99-99",
        placeholder: "_"
    }).mask(input);

    function handleInputChange(e) {
        let radioValue = 25
        let target = e.target;
        if (target === rangeInput) {
            numberInput.value = rangeInput.value;
        } else if (target === numberInput) {
            rangeInput.value = numberInput.value;
        }

        const min = rangeInput.min;
        const max = rangeInput.max;
        const val = rangeInput.value;
        const percentage = (val - min) * 100 / (max - min);

        rangeInput.style.backgroundSize = percentage + '% 100%';

        for (const radio of radioInput) {
            if (radio.checked) {
                switch (radio.value) {
                    case "Дизайнерский":
                        radioValue = 25
                        break
                    case "Капитальный":
                        radioValue = 20
                        break
                    case "Косметический":
                        radioValue = 12
                        break
                    case "Черновой":
                        radioValue = 7
                        break
                }
            }
        }

        costOutput.textContent = Math.round(val*radioValue);
    }

    radioInput.forEach(radio => {
        radio.addEventListener('change', (event) => {
            handleInputChange(event)
        });
    });

    rangeInput.addEventListener("input", (e) => {
        handleInputChange(e)
    })
    numberInput.addEventListener("input", (e) => {
        handleInputChange(e)
    })
    handleInputChange({ target: rangeInput });
}