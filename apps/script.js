let array = [
  {
    name: 'burger one',
    price: 25,
    cat: 'burgers',
  },

  {
    name: 'burger tow',
    price: 30,
    cat: 'burgers',
  },
  {
    name: 'burger three',
    price: 35,
    cat: 'burgers',
  },
  {
    name: 'burger four',
    price: 40,
    cat: 'burgers',
  },
  {
    name: 'burger five',
    price: 45,
    cat: 'burgers',
  },
  {
    name: 'burger sex',
    price: 50,
    cat: 'burgers',
  },
  {
    name: 'pizaa one',
    price: 25,
    cat: 'pizza',
  },
  {
    name: 'pizaa tow',
    price: 30,
    cat: 'pizza',
  },
  {
    name: 'pizaa three',
    price: 35,
    cat: 'pizza',
  },
  {
    name: 'pizaa four',
    price: 40,
    cat: 'pizza',
  },
  {
    name: 'pizaa five',
    price: 45,
    cat: 'pizza',
  },
  {
    name: 'pizaa sex',
    price: 50,
    cat: 'pizza',
  },
  {
    name: 'drinks one',
    price: 25,
    cat: 'drinks',
  },
  {
    name: 'drinks tow',
    price: 30,
    cat: 'drinks',
  },
  {
    name: 'drinks three',
    price: 35,
    cat: 'drinks',
  },
  {
    name: 'drinks four',
    price: 45,
    cat: 'drinks',
  },
  {
    name: 'drinks five',
    price: 50,
    cat: 'drinks',
  },
  {
    name: 'drinks sex',
    price: 55,
    cat: 'drinks',
  },
]
let workSpace = document.querySelector('#work-place')

let cats = []
let arr = Object.groupBy(array, ({ cat }) => cat)
let fatora = []
let menue = false
let fatoraDiv = document.querySelector('.fatora')
let overlay = document.querySelector('.overlay')
let vechile = document.querySelector('#vechile')
let fatoraArray = {}
let qty = 1
let billdiv = document.querySelector('#bill')

function renderCategory() {
  workSpace.innerHTML = ''
  console.log(arr)
  cats = Object.keys(arr)
  console.log(cats)

  cats.forEach((el, i) => {
    if (cats.length != 0) {
      workSpace.innerHTML += `

   <div class="col-4">
            <div class="card p-4 rounded d-flex gap-2" id='${el}' onclick="RenderProduct('${el}')">
              <img
                src="./assets/img/${i + 1}.jpg"
                alt=""
                srcset=""
              />

              <h1>${el}</h1>
            </div>
          </div>

          `
    }
  })
}
function RenderProduct(cat) {
  let card = document.querySelector('#' + cat)
  card.style.backgroundColor = 'red'
  console.log(card)
  console.log(arr[cat])
  /*   setTimeout(() => {
    products(cat)
  }, 7000)
 */
  loader()
  setTimeout(() => {
    products(cat)
  }, 1000)
}
function loader() {
  workSpace.innerHTML = ``
  workSpace.innerHTML = `<div
    div class="sk-circle" >
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>
`
}
function products(cat) {
  workSpace.innerHTML = ``
  arr[cat].forEach((el, index) => {
    workSpace.innerHTML += `

   <div class="col-4">
            <div class="card p-4 rounded d-flex gap-2" id='${
              el.name
            }' onclick="">
              <img
                src="./assets/img/${cat + (index + 1)}.jpg"
                alt=""
                srcset=""
              />

              <h1>${el.name}</h1>
              <h2>${el.price}</h2>
              <button class="rounded" onclick="addToFatora('${el.name}','${
      el.cat
    }' ,${index + 1})">add it</button>

            </div>
          </div>

         `
  })
}
function addToFatora(product_Name, product_cat, product_img) {
  /*  let fatoraArray = arr.forEach((elem, index) => {}) */
  fatoraArray = arr[product_cat].filter((elem, index) => {
    return elem.name === product_Name && elem.cat === product_cat
  })

  sideMenue(fatoraArray, product_img)
}
function sideMenue(fatoraArray, product_img) {
  qty = 1
  fatoraDiv.innerHTML = ``
  menue = !menue
  if (menue) {
    fatoraArray.forEach((elem, index) => {
      fatoraDiv.innerHTML = `

    <div class="side-menue d-flex flex-row  justify-content-center align-item-center">
    <div class=" d-flex flex-column justify-content-center align-items-center h-100 col-1">
    <div class="line"></div>
    </div>
      <div class="d-flex flex-column justify-content-center align-items-center bg-info p-3 col-11">
      <img class="col-12" src="assets/img/${elem.cat + product_img}.jpg">
      <h1>${elem.name}</h1>
       <div class="d-flex flex-row col-12 d-flex flex-row col-12 justify-content-center align-items-center gap-2">
      <button id="button" class="col-3" onclick="removeqty(${product_img})">-</button> <h2>${qty}</h2> <button id="button" class="col-3" onclick="Addqty(${product_img})">+</button>
      </div>
      <h2>${elem.price}</h2>

      <button  id="button" class="btn btn-warning" onclick="addItTovechile()"> Add it To bill </button>
      </div>
    </div>

    `
    })
    overlay.classList.replace('d-none', 'd-block')
  } else {
    overlay.classList.replace('d-block', 'd-none')
    billdiv.classList.replace('d-block', 'd-none')
  }
}
function addItTovechile() {
  fatoraArray != 0 ? fatora.push(...fatoraArray) : null
  overlay.classList.replace('d-block', 'd-none')
  vechile.classList.replace('d-none', 'd-flex')
  fatoraDiv.innerHTML = ``
  vechile.innerHTML = `
  <i class="fa-solid fa-cart-shopping"><p class="position-absolute top-0 end-50 bg-danger p-1 rounded-circle fs-6 ">${fatora.length}</p></i>
  `
  console.log(fatora)
}
function Addqty(product_img) {
  qty = qty + 1
  fatoraArray[0].originalPrice = fatoraArray[0].price * qty
  fatoraArray[0].qty = qty
  console.log(fatoraArray)
  fatoraArray.forEach((elem, index) => {
    fatoraDiv.innerHTML = `
       <div class="side-menue d-flex flex-row  justify-content-center align-item-center">
    <div class=" d-flex flex-column justify-content-center align-items-center h-100 col-1">
    <div class="line"></div>
    </div>
      <div class="d-flex flex-column justify-content-center align-items-center bg-info p-3 col-11">
      <img class="col-12" src="assets/img/${elem.cat + product_img}.jpg">
      <h1>${elem.name}</h1>
       <div class="d-flex flex-row col-12 justify-content-center align-items-center gap-2">
      <button id="button" class="col-3" onclick="removeqty(${product_img})">-</button>
       <h2>${qty}</h2>
       <button id="button" class="col-3" onclick="Addqty(${product_img})">+</button>
      </div>
      <h2>${elem.price * qty}</h2>

      <button class="btn btn-warning" onclick="addItTovechile()"> Add it To bill </button>
      </div>
    </div>
      `
  })
}
function removeqty(product_img) {
  if (qty < 1) {
  } else {
    qty = qty - 1
    fatoraArray[0].originalPrice = fatoraArray[0].price * qty
    console.log(fatoraArray)
    fatoraArray.forEach((elem, index) => {
      fatoraDiv.innerHTML = `
       <div class="side-menue d-flex flex-row  justify-content-center align-item-center">
    <div class=" d-flex flex-column justify-content-center align-items-center h-100 col-1">
    <div class="line"></div>
    </div>
      <div class="d-flex flex-column justify-content-center align-items-center bg-info p-3 col-11">
      <img class="col-12" src="assets/img/${elem.cat + product_img}.jpg">
      <h1>${elem.name}</h1>
       <div class="d-flex flex-row col-12 justify-content-center align-items-center gap-2">
      <button id="button" class="col-3" onclick="removeqty(${product_img})">-</button>
       <h2>${qty}</h2>
       <button id="button" class="col-3" onclick="Addqty(${product_img})">+</button>
      </div>
      <h2>${elem.price * qty}</h2>

      <button class="btn btn-warning" onclick="addItTovechile()"> Add it To bill </button>
      </div>
    </div>
      `
    })
  }
}
function Bill() {
  console.log(fatoraArray)
  console.log(fatora)
  billdiv.classList.replace('d-none', 'd-block')
  overlay.classList.replace('d-none', 'd-block')
  billdiv.innerHTML = ``
  fatora.forEach((elem, index) => {
    billdiv.innerHTML += `

  <div
        id="product"
        class="col-12 d-flex flex-column align-items-center gap-4 bg-warning bg-gradient"
      >
        <img src="./assets/img/.jpg" alt="" />
        <h1>${elem.name}</h1>
        <h5>${elem.price}</h5>
        <h5>${elem.qty}</h5>
        <h5>${elem.originalPrice}</h5>
      </div>
       `
  })
}
