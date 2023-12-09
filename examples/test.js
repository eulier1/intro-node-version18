import fs from "node:fs/promises";

const readPjson = async () => {
    // Back in the old days you have something called __dirname to set the folder or file path 
    const pjsonPath = new URL('./package.json', import.meta.url).pathname
    console.log(JSON.parse(await fs.readFile(pjsonPath, 'utf-8')))
}

const writeFile = async () => {
    const writePath = new URL('./demo.js', import.meta.url).pathname
    fs.writeFile(writePath, `console.log('yoooo!')`)
}

// readPjson()

// writeFile()