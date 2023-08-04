function clockStart() {
    let clk = new Date();
    let h = clk.getHours();
    let m = clk.getMinutes();
    let s = clk.getSeconds();
    let varHour = document.querySelector(".hours");
    varHour.textContent = h < 10 ? "0" + h : h;
    let varMin = document.querySelector(".mins");
    varMin.textContent = m < 10 ? "0" + m : m;
    let varSec = document.querySelector(".secs");
    varSec.textContent = s < 10 ? "0" + s : s;
}

setInterval(clockStart, 1000);
clockStart();
