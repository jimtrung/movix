import { contents } from '../data/contents.js'; 

function replaceCssFile(filepath) {
  let link = document.querySelector("link[rel='stylesheet']");
  link.href = filepath;
}

function getFilePath(pageIndex) {
  let alter = 'a';
  if (pageIndex % 2 !== 0) {
    alter = 'b';
  }
  return `../styles/signup/signup${parseInt(pageIndex + 1 / 2)}${alter}.css`;  
}

const pageIndex = document.querySelector('.page-index'); 
let page = pageIndex.value;   
document.body.innerHTML = contents[page]; 

document.querySelector('.next-button').addEventListener('click', () => {
  page++;
  document.body.innerHTML = contents[page]; 
  const filePath = getFilePath(page);
  console.log(filePath);
  replaceCssFile(filePath); 
}); 