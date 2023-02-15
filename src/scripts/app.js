const btn_toggle = document.querySelector(".toggle");
const btn_result = document.querySelector(".btn_default-result");
const btn_default = document.getElementsByClassName("btn_default");
const btn_Del = document.getElementsByClassName("btnDel");
const bg_keypad = document.getElementsByClassName("bg_keypad");
const output = document.querySelector(".output_container");
const body_theme = document.querySelector(".body");
console.log(bg_keypad);
let theme = 0;


btn_toggle.addEventListener("click", () => {
    ++theme
    if (theme == 1) {

        body_theme.classList.remove("body_theme1");
        body_theme.classList.add("body_theme2");

        btn_toggle.classList.remove("theme-1");
        btn_toggle.classList.add("theme-2");

        output.classList.remove("output_theme1");
        output.classList.add("output_theme2");

        for (let index = 0; index < bg_keypad.length; index++) {
            bg_keypad[index].classList.remove("bg_toggle_keypad-theme1");
            bg_keypad[index].classList.add("bg_toggle_keypad-theme2");
        }

        for (let index = 0; index < btn_default.length; index++) {
            btn_default[index].classList.remove("btn_default-theme1");
            btn_default[index].classList.add("btn_default-theme2");
        }

        for (let index = 0; index < btn_Del.length; index++) {
            btn_Del[index].classList.remove("btn_del-theme1");
            btn_Del[index].classList.add("btn_del-theme2");
        }

        btn_result.classList.remove("btn_result-theme1");
        btn_result.classList.add("btn_result-theme2");

    } else if (theme == 2) {
        body_theme.classList.remove("body_theme2");
        body_theme.classList.add("body_theme3");

        btn_toggle.classList.remove("theme-2");
        btn_toggle.classList.add("theme-3");

        output.classList.remove("output_theme2");
        output.classList.add("output_theme3");

        for (let index = 0; index < bg_keypad.length; index++) {
            bg_keypad[index].classList.remove("bg_toggle_keypad-theme2");
            bg_keypad[index].classList.add("bg_toggle_keypad-theme3");
        }

        for (let index = 0; index < btn_default.length; index++) {
            btn_default[index].classList.remove("btn_default-theme2");
            btn_default[index].classList.add("btn_default-theme3");
        }

        for (let index = 0; index < btn_Del.length; index++) {
            btn_Del[index].classList.remove("btn_del-theme2");
            btn_Del[index].classList.add("btn_del-theme3");
        }

        btn_result.classList.remove("btn_result-theme2");
        btn_result.classList.add("btn_result-theme3");

    } else {
        body_theme.classList.remove("body_theme3");
        body_theme.classList.add("body_theme1");

        btn_toggle.classList.remove("theme-3");
        btn_toggle.classList.add("theme-1");

        output.classList.remove("output_theme3");
        output.classList.add("output_theme1");


        for (let index = 0; index < bg_keypad.length; index++) {
            bg_keypad[index].classList.remove("bg_toggle_keypad-theme3");
            bg_keypad[index].classList.add("bg_toggle_keypad-theme1");
        }

        for (let index = 0; index < btn_default.length; index++) {
            btn_default[index].classList.remove("btn_default-theme3");
            btn_default[index].classList.add("btn_default-theme1");
        }

        for (let index = 0; index < btn_Del.length; index++) {
            btn_Del[index].classList.remove("btn_del-theme3");
            btn_Del[index].classList.add("btn_del-theme1");
        }

        btn_result.classList.remove("btn_result-theme3");
        btn_result.classList.add("btn_result-theme1");

        theme = 0;
        console.log(theme);
    }
});






