

assert(2 == '2', 'double equals coerces types')
assert(!(2 === '2'), 'double equals coerces types')

assert(typeof 4 === 'number', 'JS has numbers')
assert(typeof 4.0 === 'number', 'JS has numbers')

assert(typeof 'hello' === 'string', 'JS has strings')

var x;

assert(x === undefined, 'JS has undefined values')

var y = null;

assert(y === null, 'JS has null values')


var katzDeliLine = []


function takeANumber(line, name) {
  line.push(name)
  var msg = `Welcome ${name}. You are number ${line.length} in line.`
}

takeANumber(katzDeliLine, 'rachel')
assert(katzDeliLine.length === 1, 'takeANumber adds customers to the line')

takeANumber(katzDeliLine, 'max')
assert(katzDeliLine.length === 2, 'takeANumber adds customers to the line')

let message = takeANumber(katzDeliLine, 'alex')


assert(message === "Welcome alex. You are number 3 in line.", 'Returns a message')
