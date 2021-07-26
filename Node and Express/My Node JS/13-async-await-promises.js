const {
  readFile,
  writeFile
} = require('fs').promises;




const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8')
    console.log(first);
    await writeFile('./content/res.txt', `This is awesome ${first}`, {
      flag: 'a'
    })
  } catch (error) {
    console.log(error);
  }

}
start()