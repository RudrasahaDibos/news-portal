const loadnews = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
     const items = data.data.news_category
     const listContainer = document.getElementById('list-container')
     items.forEach(items => {
        console.log(items)
         const div = document.createElement('div')
         div.innerHTML = `
           <li><a>${items.category_name}</a></li>
         `
         listContainer.appendChild(div)
     });
}

 const loadCatagory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/category/01')
    const data = await res.json()
    const news = data.data
    console.log(new)
 }

loadnews()