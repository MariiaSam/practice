//для того, щоб не ств інформацію, звертаємось до https://jsonplaceholder.typicode.com/ ==== /posts==== 

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  }


async function main (){
    const postsData = await getData();
    //буде масив з об єктами 
    
    let currentPage = 1;  // поточна сторінка, щоб розуміти на якій сторінці ми щз находимось

    let rows = 10;    // скільки постів на одній сторінці виводити


    //відмальовуватиме дані, які нам потрібні
    //rowPerPage - скільки відтворювати даних
    // page - яка сторінка
    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.posts');
        postsEl.innerHTML = ""
        page -=1;

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);

        paginatedData.forEach((el) => {
            const postEl = document.createElement("div");
            postEl.classList.add("post");
            postEl.innerText = `${el.title}`;
            postsEl.appendChild(postEl);
          })

    }
    //відмальовуватиме кнопки
    function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add('pagination__list');
    
        for (let i = 0; i < pagesCount; i++) {
          const liEl = displayPaginationBtn(i + 1);
          ulEl.appendChild(liEl)
        }
        paginationEl.appendChild(ulEl)
      }
    
    function displayPaginationBtn(page) {
        const liEl = document.createElement("li")
        liEl.classList.add("pagination__item")
        liEl.innerText = page

        if (currentPage == page) { 
            liEl.classList.add("pagination__item--active")
            
        }

        liEl.addEventListener("click", ()=>{
            currentPage = page
            displayList(postsData, rows, currentPage)

            let currentItemLi = document.querySelector("li.pagination__item--active")
            currentItemLi.classList.remove("pagination__item--active")

            liEl.classList.add("pagination__item--active")
        } )

        return liEl
    }

    displayList(postsData, rows, currentPage);
    displayPagination(postsData,  rows)
}

main()