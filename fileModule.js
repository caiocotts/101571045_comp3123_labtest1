const fs = require('fs')

const LOG_DIR = './logs'

if (fs.existsSync(LOG_DIR)) {
    fs.rmSync(LOG_DIR, { recursive: true, force: true })
}

fs.mkdirSync(LOG_DIR)

process.chdir(LOG_DIR)

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.writeFileSync(fileName, 'some text')
    console.log(fileName)
}

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    fs.rmSync(fileName)
    console.log(`delete files...${fileName}`)
}
process.chdir('..')
fs.rmdirSync(LOG_DIR)
