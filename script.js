// console.log("setTimeoutda oldin");

// setTimeout(() => {
//     console.log("3 sekund otdi")
// }, 3000);

// console.log("setTimeoutdan keyin");

// ===========================================

// let cont = 0;

// let interval = setInterval(() => {
//     cont++;
//     console.log(`${cont} sekund otdi`);

//     if (cont === 5) {
//         clearInterval(interval);
//         console.log("Interval toxtadi")
//     }
// }, 1000);

// ===========================================

// let date = new Date();
// console.log(date);

// console.log("Yil:", date.getFullYear());
// console.log("Oy:", date.getMonth());
// console.log("Kun:", date.getDate());
// console.log("Soat:", date.getHours());
// console.log("Minut:", date.getMinutes());
// console.log("Sekund:", date.getSeconds());

function updateClock() {
    const now = new Date();
  
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  

