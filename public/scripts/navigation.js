async function goToAboutUs(){
  try{
    const aboutUsLink = document.querySelector('.middle-section a[href= "/aboutus"]')

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


async function goToHomepage(){
  try{
    const homepageLink = document.querySelector('.middle-section .left-section a[href= "/"]')

    if (!homepageLink){
      console.error("home page link not found")
    }

    const homepageURL = homepageLink.href;

    const response = await fetch(homepageURL)
    const homepageContent = await response.text()

    const bodyDiv = document.querySelector('body');

    bodyDiv.innerHTML = homepageContent
  }catch(error) {
    console.error ("error", error)
  }
}



async function goToContactUs(){
  try{
    const contactUsLink = document.querySelector('.middle-section a[href= "/contactus"]')

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
    const portfolioLink = document.querySelector('.middle-section a[href= "/contactus"]')

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