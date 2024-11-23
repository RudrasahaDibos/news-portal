const loadnews = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
     const items = data.data.news_category
     const listContainer = document.getElementById('list-container')
     items.forEach(items => {
        con
         const div = document.createElement('div')
         div.innerHTML = `
           <li><a>Item 1</a></li>
         `
         listContainer.appendChild(div)
     });
}


loadnews()