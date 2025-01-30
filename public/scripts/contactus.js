const popUpWindow = document.querySelector('.pop-up-window')
const sendButton = document.querySelector('.send')
const closeButton = document.querySelector('.close-button')
const userNameInput = document.getElementById("name")
const userEmailInput = document.getElementById("email")
const userNumberInput = document.getElementById("telephone")


function openPopup(){
  popUpWindow.style.display = 'block';
}
function closePopup(){
  popUpWindow.style.display = 'none';
}
function nameChecker (userName,thankyouHTML){
  if(userName.trim() === ""){
    thankyouHTML.push(`<p class="pop-up-text">Please enter a valid name.</p>`)
  } 
};
function emailChecker(userEmail,thankyouHTML){
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(userEmail)=== false){
    thankyouHTML.push( `<p class="pop-up-text">Please enter an valid email.</p>`)
  } 
};
function numberChecker(userNumber,thankyouHTML){
  const validNumber = /^\d{10}$/
  if (!validNumber.test(userNumber)){
    thankyouHTML.push(`<p class="pop-up-text">Please enter a valid telephone number.</p>`)
  } 
};
function messageChecker (userMessage,thankyouHTML){
  if(userMessage.trim() === ""){thankyouHTML.push(`<p class="pop-up-text">Please enter your message, so we can deliver a customized service option.</p>`)}
};


async function sendData(){
  const data = {
    number: userNumberInput.value,
    name: userNameInput.value,
    email: userEmailInput.value,
    message: document.getElementById("message").value
  }
  const url = '/api/contactinfo';
  
  try {
    // Send the data with a POST request using fetch
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set content type to JSON
      },
      body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
    });

    if (!response.ok) {
      // If the response status is not OK (e.g., 404 or 500)
      throw new Error('Failed to send data to the server');
    }

    // Parse the response if needed (for example, if the server sends a success message)
    const responseData = await response.json();
    console.log('Data sent successfully:', responseData);

    // Optionally, handle success (e.g., show a success message to the user)
  } catch (error) {
    console.error('Error sending contact info:', error);
    // Optionally, handle error (e.g., show an error message to the user)
  }
}


async function infoChecker (){
  const userNumber = userNumberInput.value
  const userMessage = document.getElementById("message").value
  const userEmail = userEmailInput.value
  const userName = userNameInput.value

  let thankyouHTML =[];

  nameChecker(userName,thankyouHTML);
  emailChecker(userEmail, thankyouHTML);
  numberChecker(userNumber, thankyouHTML);
  messageChecker(userMessage, thankyouHTML);

  if (thankyouHTML.length === 0){
    thankyouHTML.push(`<p class="pop-up-text">Thank you ${userName} for contacting with blitz. One of our agent will contact you soon.If you want a faster reply, please contact us through whatsapp.</p>`);
    await sendData();
  } else {thankyouHTML.push(`<p class="pop-up-text">Or else you can contact us through whatsapp.</p>`)}

  document.querySelector('.pop-up-text-box').innerHTML= thankyouHTML.join("")
}






sendButton.addEventListener('click', async ()=>{
  await infoChecker();
  openPopup();
  })


  
closeButton.addEventListener('click',()=>{
  closePopup();
})
