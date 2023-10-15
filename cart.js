let cartsItems = []

getItemsFromLocalStorage()

function getItemsFromLocalStorage() {


  let item = localStorage.getItem('cart-items')
  if (item) {
    item = JSON.parse(item)
    cartsItems = [...item]
    console.log(cartsItems)
  }

}


var totalPrices = []
var initialValue = 0

function renderCartsItems() {

  const cartContainer = document.getElementById('cart-container')
  for (var i = 0; i < cartsItems.length; i++) {
    const { description, dishName, imageUrl, price } = cartsItems[i]
    totalPrices.push(price)

    const index = i

    const carts = `
    <div class="py-5 sm:py-8">
          <div class="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
            <div class="sm:-my-2.5">
              <a href="#" class="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                <img src=${imageUrl} loading="lazy" alt="Photo by Thái An" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
            </div>
  
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <a href="#" class="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">${dishName}</a>
  
                <span class="block text-gray-500">${description}</span>
                <span class="block text-gray-500">Color: White</span>
              </div>
  
              <div>

            <span class="mb-1 block font-bold text-gray-800 md:text-lg">${price} <span>$</span> </span>

                <span class="flex items-center gap-1 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
  
                  In stock
                </span>
              </div>
            </div>
  

              <div class="flex flex-col items-start gap-2">
      <div class="ml-8 pt-3 sm:pt-2 ">
                <span class="block font-bold text-gray-800 md:text-lg">${price} <span>$</span></span>
              </div>
      <button onclick="deleteCart(this  , ${index})" class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 hover:scale-[1.2] transition ease-in-out delay-150">Delete</button>

              </div>
  
              
            </div>
          </div>
        </div>
    `

    cartContainer.innerHTML += carts

  }
}

console.log(totalPrices)


renderCartsItems()


function deleteCart(btn, index) {

  const cart = btn.parentNode.parentNode.parentNode.parentNode
  const ind = index
  console.log(cartsItems[ind])

  console.log(ind)
  cartsItems.splice(ind, 1);
  localStorage.setItem('cart-items', JSON.stringify(cartsItems));
  const cartContainer = document.getElementById('cart-container')
  cartContainer.innerHTML = ''
  renderCartsItems()

}

function totalCost() {
  for (var i = 0; i < totalPrices.length; i++) {
    initialValue = initialValue + totalPrices[i]
  }
  console.log(initialValue)
  document.getElementById('cost').innerText = initialValue + ' $'
  document.getElementById('total').innerText = initialValue + 5 + ' $'

}

totalCost()


function bookOrder(){
  Swal.fire('Your Order Has Been Booked')

}



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