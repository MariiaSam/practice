const items = document.querySelectorAll(".countdown-item > h4")
console.log(items)

const countDownEl = document.querySelector(".countdown")


let countDownDate = new Date (2024, 7, 10, 0, 0).getTime()// відлік часу
console.log(countDownDate);

function getCountTime(){
const now = new Date().getTime();// отримати поточний час

//знайти різницю часу
const dist = countDownDate - now

 // 1c = 1000мс
  // 1м = 60с
  // 1г = 60хв
  // 1д = 24г
    // створюємо змінні в мілісекундах

const oneDay =  24 * 60 * 60 * 1000
const oneHour = 60 * 60 * 1000
const oneMinute = 60 * 1000

//підрахунок для днів, годин, хв, сек
let days = Math.floor(dist/oneDay) 
let hours = Math.floor((dist % oneDay) / oneHour) 
let minutes = Math.floor((dist % oneHour) /oneMinute)
let seconds =  Math.floor((dist % oneMinute) /1000)

const values = [days, hours, minutes , seconds]
console.log(values);

//додаємо значення на сторінку
items.forEach(function(item, index){
item.textContent = (values[index]) 
console.log(items);})

if (dist < 0){
clearInterval(countDown)
countDown.innerHtml = `<h4 class="expired">КРАСУНЯ, ВІТАЮ ТЕБЕ З ПЕРШИМ ТВОЇМ ДНЕМ</h4>`
 }
}

let countDown = setInterval(getCountTime, 1000)

//ініціалізація поточного часу
getCountTime()

 