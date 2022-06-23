// o que são vetores ou arrays

/* // como declarar um array
let array = ['string', 1, true]
console.log(array)*/

// pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
// console.log(array)

// forEach
/*array.forEach(function (item, index) {
  console.log(item, index)
})*/

/*array.push([])
console.log(array)*/

/*array.pop()
console.log(array)*/

/*array.shift()
console.log(array)*/

/*array.unshift('novo item no inicio')
console.log(array)*/

/*console.log(array.indexOf(true))*/

/*array.splice(0, 3)
console.log(array)*/

let object = {
  string: 'string',
  number: 1,
  booleam: true,
  array: ['array'],
  objectInterno: { objectInterno: 'objeto interno' }
}

console.log(object.objectInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var { string, booleam, objectInterno } = object
console.log(string, booleam, objectInterno)
