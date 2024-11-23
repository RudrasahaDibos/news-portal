const loadnews = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await res.json()
     const items = data.data.news_category
     const listContainer = document.getElementById('list-container')
     items.forEach(items => {
        
         const div = document.createElement('div')
         div.innerHTML = `
          <button  onclick="getID(catid)" class="btn btn-success flex gap-2">${items.category_name}</button>
         `
         listContainer.appendChild(div)
     });
}
 
function getID(catid){
  console.log("catid")
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
                    src="${items.image_url}"
                    alt="Album" />
                </figure>
                <div class="card-body">
                 <h2 class="card-title">${items.title}</h2>
                  <p>${items.details.slice(0,200)}</p>
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