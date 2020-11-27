const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
})

// Check for thruthy and falsy values - null, 0, undefined
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
}) 

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})

test('User should be David Biagiola object', () => {
  expect(functions.createUser()).toEqual({ 
    firstName: 'David', lastName: 'Biagiola'
  })
})

test('Should be under 1600', () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
  //expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regex
test('There is I in teamI', () => {
  expect('teami').not.toMatch(/I/) 
  //expect('teami').not.toMatch(/I/i) //case sensitive
})

//Arrays
test('Jeff should be in usernames', () => {
  usernames = ['William', 'Sabato', 'Jeff']
  expect(usernames).toContain('Jeff')
})

// working with async data
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1) // numbers of assertions, asyncs
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})