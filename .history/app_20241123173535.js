const loadnews = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
     const items = data.data.news_category
     const listContainer = document.getElementById('list-container')
     items.forEach(items => {
        
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
    const cardContainer = document.getElementById('card-container')
    news.forEach(items =>{
        console.log(items)
       const div = document.createElement('div')
       div.classList =`card lg:card-side bg-base-100 shadow-xl mt-8 mx-auto flex`
        div.innerHTML= `
         <figure>
                  <img
                    src="${items}"
                    alt="Album" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">New album is released!</h2>
                  <p>Click the button to listen on Spotiwhy app.</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                  </div>
                </div>
        
        
        
        `
        cardContainer.appendChild(div)
    })
 }
loadCatagory()
loadnews()