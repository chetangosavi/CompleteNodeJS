import { write } from 'fs';
import { readFile,writeFile }  from 'fs/promises';

// Reading File :
let template = await readFile(new URL('template.html',import.meta.url),'utf-8');

console.log(import.meta.url)

const data = {
    title: 'Learn nodeJs',
    description: 'Happy to help you this is the best course for nodejs'
}

for(const [key,value] of Object.entries(data)){
    template = template.replace(`{${key}}`,value)
}

// here Object.entries() -> return Array of Array of Key,Value pair  -> [[key,value]]

//Writting back into file :

await writeFile(new URL('index.html',import.meta.url),template);

console.log(template);

