import { images } from "../data/portfolio-images.js"

let portfolioImages = ''

images.forEach((image)=>{
  portfolioImages+= `
        <div class="portfolio-container">
          <img class="portfolio-image" src ="${image.image}" alt="">
        </div>
      `
})

document.querySelector('.portfolio-grid').
innerHTML= portfolioImages