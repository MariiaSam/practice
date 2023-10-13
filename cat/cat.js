'use strict';
 
 const btn = document.querySelector(".btn")
 const image = document.querySelector(".img")
 console.log(image)
 const url = 'https://aws.random.cat/meow'// помилка 403

 //функція, яка створює запиит на сервер  Fetch

 async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json()
        image.src = data.file
       console.log(response)
    } catch (error) {
        console.log(error);
    }
}


btn.addEventListener('click', () => {
    let isLoad = image.complete // image.comlete дозволяє перевірити чи повністю завантажилася картинка

    if (isLoad) {
        fetchHandler()
}
}) 

