const loadnews = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
     const items = data.data.news_category
     const List = document.getElementById('list-container')
     items.forEach(items => {
         const div = document.createElement('div')
         div.innerHTML = `
         
         
         `
     });
}


loadnews()