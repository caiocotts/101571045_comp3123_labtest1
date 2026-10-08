const resolvedPromise = () => new Promise((res, _) => { setTimeout(() => { res({ 'messages': 'delayed success!' }) }, 500) })


const rejectedPromise = () => new Promise((_, rej) => { setTimeout(() => { rej({ 'error': 'delayed exception!' }) }, 500) })

resolvedPromise().then((val) => console.log(val))
rejectedPromise()
    .then((val) => console.log(val))
    .catch((val) => console.log(val))
