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
function renderCategory() {
  console.log(arr)
  cats = Object.keys(arr)
  console.log(cats)
  let a = 0
  cats.forEach((el, i) => {
    a = a + 1
    if (cats.length != 0) {
      workSpace.innerHTML += ''

      workSpace.innerHTML += `

   <div class="col-4">
            <div class="card p-4 rounded d-flex gap-2" onclick="RenderProduct("${el}")">
              <img
                src="./assets/img/${a}.jpg"
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
  console.log(arr[cat])
}
