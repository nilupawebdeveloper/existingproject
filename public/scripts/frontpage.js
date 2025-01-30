import { reviews } from "../data/reviews.js";
import { ourservices } from "../data/our-services.js";


document.addEventListener("DOMContentLoaded", function () {
  let reviewHTML = '';
  reviews.forEach((review) => {
    reviewHTML += `
      <div class="review">
        <div class="review-left">
          <div class="review-left-innerbox">
            <div class="review-profile-picture">
              <img class="profile-picture" src="${review.profilepicture}" alt="">
            </div>
            <div class="review-profie-info">
              <p class="profile-name">${review.name}</p>
              <p class="properties">${review.business}</p>
            </div>
          </div>
        </div>
        <div class="review-right">
          <div class="review-right-innerbox">
            <p class="review-text">${review.comment}</p>
          </div>
        </div>
      </div>
    `;
  });

  let ourServicesHTML = '';
  ourservices.forEach((serviceimage) => {
    ourServicesHTML += `
      <img class="services-image" src="${serviceimage.image}" alt="">
      <a href="/aboutus"><div class="learn-more"> Learn More</div></a>
    `;
  });

  document.querySelector('.review-container').innerHTML = reviewHTML;
  document.querySelector('.our-services').innerHTML = ourServicesHTML;
});



async function goToContactUs(){
  try{
    const contactUsLink = document.querySelector('.home-image-box .transform-box a[href ="/contactus"]')

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

async function goToAboutUs(){
  try{
    const aboutUsLink = document.querySelector('.our-services a[href = "/aboutus"]')

    if (!aboutUsLink){
      console.error("about us link not found")
    }

    const aboutusURL = aboutUsLink.href;

    const response = await fetch(aboutusURL)
    const aboutusContent = await response.text()

    const bodyDiv = document.querySelector('body');

    bodyDiv.innerHTML = aboutusContent
  }catch(error) {
    console.error ("error", error)
  }
}


