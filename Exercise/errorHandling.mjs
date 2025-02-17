// Handling Async Errors / Exceptions That uses callback :

// import { readFile } from "fs";

// const template = readFile(new URL('./executingNode.js', import.meta.url),'utf-8',(err,res)=>{
//     if(err){
//         console.error(err)
//     }
//     else{
//         console.log(res)
//     }
// })

// Handling Async Errors / Exceptions That uses promises :

import { readFile } from "fs/promises";

try{
    const template2 = await readFile(new URL('./executingNode.js', import.meta.url),'utf-8');
}catch(e){
    console.error(e);
}