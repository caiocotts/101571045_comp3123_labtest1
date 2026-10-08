const lowerCaseWords = (input) => new Promise((res, _) => { res(input.filter((e) => typeof e === 'string').map((s) => s.toLowerCase())) })

const input = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(input)
    .then((arr) => console.log(arr))
