const foodItems = [
  {
    foodName: "Burger",
    foodImage: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    price: 9.99,
    description: "Delicious burger with all the fixings."
  },
  {
    foodName: "Pizza",
    foodImage: "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60",
    price: 12.99,
    description: "Cheesy pizza with your favorite toppings."
  },
  {
    foodName: "Sushi",
    foodImage: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VzaGl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60",
    price: 15.99,
    description: "Fresh and flavorful sushi rolls."
  },
  {
    foodName: "Pasta",
    foodImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 10.99,
    description: "Classic pasta dish with your choice of sauce."
  },
  {
    foodName: "Salad",
    foodImage: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbGFkfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    price: 8.99,
    description: "Fresh and healthy salad with a variety of ingredients."
  },
  {
    foodName: "Biryani",
    foodImage: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    price: 20,
    description: "Special Bombay style biryani."
  },
  {
      foodName: "Coffe",
      foodImage: "https://images.unsplash.com/photo-1617713904451-5149701ef1b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmVlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      price: 5,
      description: "Coffe with coco beans"
  },
  {
    foodName: "Tea",
    foodImage: "https://images.unsplash.com/photo-1614221724928-a0ee7470a1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhaXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    price: 5,
    description: "Tea of free milk"
}  ,
{
  foodName: "Soda",
  foodImage: "https://images.unsplash.com/photo-1595177924779-dbe82554cc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvZGF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60",
  price: 5,
  description: "Soda Bottle which Digest Food"
}  
];


var container = document.getElementById('foodItemsContainer')
var cart = document.getElementById('cart')
var fvrt = document.getElementById('fvrt')
var cartItems = []
var fvrtItems = []
var userInfo = []
var imageArray = []
var reviewArray = []
var commentsArray = []



function serachFood(){
  let searchdish = document.getElementById('searchdish').value
  const str2 = searchdish.charAt(0).toUpperCase() + searchdish.slice(1);
    console.log(str2)
  const filterFoodItems = foodItems.filter( (data)=> data.foodName == str2)
  console.log(filterFoodItems)
  container.innerHTML = ' '

  filterFoodItems.forEach( (dish)=>{
    const { foodName, foodImage, price, description } = dish


  const filterCrad = `
  <div class="p-4 md:w-1/3 duration-500 hover:scale-105 " data-aos="fade-right">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-[1.1] transition ease-in-out delay-200" src=${foodImage} alt="blog">
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${foodName}</h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">$ <span> ${price} </span></h1> 
      <p class="leading-relaxed mb-3">${description}</p>
      <div class="flex items-center flex-wrap">
      <button onclick="addToCart(this)" class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 hover:scale-[1.2] transition ease-in-out delay-150">Add to Cart</button>
        <span class="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 hover:scale-[1.2] transition ease-in-out delay-150">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
        </span>
        <span href="#" onclick="comment(this)" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center hover:scale-[1.2] transition ease-in-out delay-150">
                    <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span class="ml-1"></span>
                </span>
      </div>
    </div>
  </div>
</div>`

container.innerHTML += filterCrad

document.getElementById('searchdish').value = ''

} )

  
}




for (var i = 0; i < foodItems.length; i++) {

  var { foodName, foodImage, price, description } = foodItems[i]
  const index = i


  var card = `
  
  <div class="p-4 md:w-1/3 duration-500 hover:scale-105 " data-aos="fade-right">
  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    <img class="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-[1.1] transition ease-in-out delay-200" src=${foodImage} alt="blog">
    <div class="p-6">
      <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">${foodName}</h2>
      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">$ <span> ${price} </span></h1> 
      <p class="leading-relaxed mb-3">${description}</p>
      <div class="flex items-center flex-wrap">
      <button onclick="addToCart(this)" class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 hover:scale-[1.2] transition ease-in-out delay-150">Add to Cart</button>
        <span class="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 hover:scale-[1.2] transition ease-in-out delay-150">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg>
        </span>
        <span href="#" onclick="comment(this, ${index})" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center hover:scale-[1.2] transition ease-in-out delay-150">
                    <svg class="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                        </path>
                    </svg>
                    <span class="ml-1"></span>
                </span>
      </div>
    </div>
  </div>
</div>

  `
  container.innerHTML += card
}



function comment(cmnt, index) {
  const coooment = cmnt
  const ind = index
  location.href = './comment.html'
  var array = []


  var comments = localStorage.getItem(`comments/${index}`)
  if (comment) {
    comments = JSON.parse(comments)
    console.log(comments)
    array = [...comments]
    console.log(array)
    console.log(cmnt)
    console.log(index)
  }

array.forEach((msg)=>{
  console.log(msg)
})

  const message = prompt('write comment')


  console.log(message)
  array.push(message)
  localStorage.setItem(`comments/${index}`, JSON.stringify(array))



}




getCartItemsFromLocalStorage()

function getCartItemsFromLocalStorage() {
  var item = localStorage.getItem('cart-items')
  if (item) {
    item = JSON.parse(item)
    cartItems = [...item]
  }
}



function addToCart(btn) {
  if (userInfo.length) {

    const card = btn.parentNode.parentNode.parentNode.parentNode
    const imageUrl = card.children[0].children[0].src
    const dishName = card.children[0].children[1].children[0].innerHTML
    const price = parseInt(card.children[0].children[1].children[1].children[0].innerHTML)
    const description = card.children[0].children[1].children[2].innerHTML
    const cartItemsObject = {
      imageUrl,
      dishName,
      price,
      description
    }
    Swal.fire({
      position: 'top-30px',
      icon: 'success',
      title: 'Add to cart',
      showConfirmButton: false,
      timer: 1500
    })

    cartItems.push(cartItemsObject)
    console.log(cartItems)

    localStorage.setItem('cart-items', JSON.stringify(cartItems))
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: 'You are not login',
      footer: '<a href="./signup.html">For login Click here?</a>'
    })
  }

}



getUserDetailsFromLocalStorage()

function getUserDetailsFromLocalStorage() {
  let userData = localStorage.getItem('User-Details')
  if (userData) {
    userData = JSON.parse(userData)
    userInfo = [...userData]

  }
}






function signUp() {
  const userName = document.getElementById('signup-name')
  const email = document.getElementById('signup-email')
  const password = document.getElementById('signup-password')
  const userDetails = {
    userName: userName.value,
    email: email.value,
    password: password.value
  }

  userInfo.push(userDetails)
  localStorage.setItem('User-Details', JSON.stringify(userInfo))

  Swal.fire({
    position: 'top-30px',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1000
  })


  location.href = "./index.html"

}


function login() {
  const loginEmail = document.getElementById('login-Email')
  const loginPassword = document.getElementById('login-Password')
  console.log('loginEmail-->', loginEmail.value)
  console.log('loginPassword-->', loginPassword.value)



  for (var i = 0; i < userInfo.length; i++) {
    const { userName, email, password } = userInfo[i]

    if (loginEmail.value == email && parseInt(loginPassword.value) == parseInt(password)) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('user login succesully')

      location.href = "./index.html"
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'You are not login',
        footer: '<a href="../Authentication/signup.html">For login Click here?</a>'
      })
    }
  }

}









getReviewItemsFromLocalStorage()

function getReviewItemsFromLocalStorage() {
  let reviewItems = localStorage.getItem('Testimonial')
  if (reviewItems) {
    reviewItems = JSON.parse(reviewItems)
    reviewArray = [...reviewItems]
  }

}


const reviewBtn = document.getElementById('reviewBtn')
reviewBtn.addEventListener('click', addReview)

function addReview() {

  const name = document.getElementById('name')
  const designation = document.getElementById('Designation')
  const message = document.getElementById('message')

  const reviewObject = {
    userName: name.value,
    designation: designation.value,
    message: message.value

  }

  reviewArray.unshift(reviewObject)

  localStorage.setItem('Testimonial', JSON.stringify(reviewArray))


  document.getElementById('testimonial-section').innerHTML = ''

  renderReview()
}



function renderReview() {

  document.getElementById('testimonial-section').innerHTML = ''



  const reviewObject = JSON.parse(localStorage.getItem('Testimonial'))

  for (let i = 0; i < reviewObject.length; i++) {

    const { userName, designation, message } = reviewObject[i]
    const testimonial = `

    <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <div class="container px-5 mx-auto">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <p class="leading-relaxed text-lg">${message}</p>
        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">${userName}</h2>
        <p class="text-gray-500">${designation}</p>
      </div>
    </div>
</div>


      `
    document.getElementById('testimonial-section').innerHTML += testimonial
  }


}


renderReview()

// getImagesFromLocalStorage()

// function getImagesFromLocalStorage(){
//   var img = localStorage.getItem('images')
//   if(imageArray){
//     img = JSON.parse(img)
//     imageArray = [...img]
//     console.log(imageArray)
//   }

// }




// const input = document.getElementById('photo-dropbox');

// input.addEventListener('change', (event) => {
//     const images = event.target.files;
//     console.log(images)

//     for (const image of images) {
//         const reader = new FileReader();
//         reader.readAsDataURL(image);

//         reader.addEventListener('load', () => {
//             const imagesArray = localStorage.getItem('images');
//             let images = [];

//             if (imagesArray) {
//                 images = [...JSON.parse(imagesArray)];

//                 images.push(reader.result);
//             } else {
//                 images.push(reader.result);
//             }

//             localStorage.setItem('images', JSON.stringify(images));
//         });
//     }
// });


function removeReview() {
  localStorage.removeItem('Testimonial')
  renderReview()
}


function renderProfile() {


  for (var i = 0; i < userInfo.length; i++) {
    const { userName, email, password } = userInfo[i]
    console.log(userInfo[i])


    const profileCrad =
      `  <div class="h-56 w-72 absolute flex justify-center items-center">
  <img
    class="object-cover h-20 w-20 rounded-full"
    src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
    alt=""
  />
</div>

<div
  class="
    h-56
    mx-4
    w-5/6
    bg-blue-400
    rounded-3xl
    shadow-md
    sm:w-80 sm:mx-0
  "
>
  <div class="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
    <h1 class="text-white">Profile</h1>
    <a href="../Cart/cart.html">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        >
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
    </svg>
</a>
  </div>

  <div
    class="
      bg-white
      h-1/2
      w-full
      rounded-3xl
      flex flex-col
      justify-around
      items-center
    "
  >
    <div class="w-full h-1/2 flex justify-between items-center px-3 pt-2">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-gray-500 text-xs">Orders</h1>
        <h1 class="text-gray-600 text-sm">340</h1>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-gray-500 text-xs">Spent</h1>
        <h1 class="text-gray-600 text-sm">$2,004</h1>
      </div>
    </div>
    <div class="w-full h-1/2 flex flex-col justify-center items-center">
      <h1 class="text-gray-700 font-bold">${userName}</h1>
      <h1 class="text-gray-500 text-sm">New York, USA</h1>
    </div>
  </div>
</div>`

    document.getElementById('profile-container').innerHTML += profileCrad

  }

}

// renderProfile()


function logout() {
  localStorage.removeItem('User-Details')
  Swal.fire({
    position: 'top-30px',
    icon: 'success',
    color: 'Black',
    title: 'Logout successfully',
    showConfirmButton: false,
    timer: 1500
  })
}

// Your API key is: 3286632324ae4c2aa101a2babecde0bc



// async function api(){
//   const abc = await fetch ('https://newsapi.org/v2/everything?q=islam&from=2023-08-23&sortBy=publishedAt&apiKey=3286632324ae4c2aa101a2babecde0bc').then(res=>res.json())
//   console.log(abc)
// }

// api()