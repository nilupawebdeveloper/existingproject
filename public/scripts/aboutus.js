import { servicedetails } from "../data/services-aboutus.js";

let serviceDetailHTML =''
servicedetails.forEach((serviceDetail)=>{
  serviceDetailHTML+=`
        <div class="service-detail">
        <img  class="serice-detail-image" src="${serviceDetail.backgroundimage}" alt="">

        <div class="service-detail-info">

          <div class="heading-div">
            <p class="service-detail-heading">${serviceDetail.heading}</p>
          </div>

          <div class="details-div">
            <p class="service-detail-text">${serviceDetail.detail}</p>
          </div >
          
          <div class="buttons-div">
            <a style="text-decoration: none;" href="/contactus">
              <div class="service-detail-lets-begin">lets begin
              </div>
            </a>
            <a style="text-decoration: none;" href="portfolio">
              <div class="service-detail-see-our-work">See our work</div>
            </a>
          </div>

        </div>
      </div>
  `
})

document.querySelector('.services-details-grid').innerHTML = serviceDetailHTML


async function goToContactUs(){
  try{
    const contactUsLink = document.querySelector('buttons-div a[href /contactus]')

    if (!contactUsLink){
      console.error("home page link not found")
    }

    const contactUsURL = contactUsLink.href;

    const response = await fetch(contactUsURL)
    const contactUsContent = await response.text()

    const bodyDiv = document.querySelector('body');

    bodyDiv.innerHTML = contactUsContent
  }catch(error) {
    console.error ("error", error)
  }
}

async function goToPortfolio(){
  try{
    const portfolioLink = document.querySelector('buttons-div a[href /contactus]')

    if (!portfolioLink){
      console.error("home page link not found")
    }

    const portfolioURL = portfolioLink.href;

    const response = await fetch(portfolioURL)
    const portfolioContent = await response.text()

    const bodyDiv = document.querySelector('body');

    bodyDiv.innerHTML = portfolioContent
  }catch(error) {
    console.error ("error", error)
  }
}