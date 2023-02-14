const btn_toggle = document.querySelector(".toggle");

let theme = 0;

btn_toggle.addEventListener("click", () => {
    ++theme
    if (theme == 1) {
        btn_toggle.classList.remove("theme-1");
        btn_toggle.classList.add("theme-2");
    } else if (theme == 2) {
        btn_toggle.classList.remove("theme-2");
        btn_toggle.classList.add("theme-3");
    } else {
        btn_toggle.classList.remove("theme-3");
        btn_toggle.classList.add("theme-1");
        theme = 0;
    }
});



const btn = document.querySelectorAll(".btn_Number");

const opCurrent = document.querySelector(".output_container-current")

const dataId = [];
let varNumber1;

btn.forEach((e) => {
    e.addEventListener("click", function () {
        setData(this.innerHTML);
    })
});


const setData = (idData) => {
    dataId.push(idData);
    varNumber1 = dataId.slice(0, 13).join("").toString()
    opCurrent.innerHTML = varNumber1; 
    return varNumber1;
}

console.log(varNumber1);