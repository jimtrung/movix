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

// ============== MAIN ================ //
const pageIndex = 0;
document.body.innerHTML = contents[pageIndex];  

document.querySelector('.next-button').addEventListener('click', () => {
  pageIndex++;
  document.body.innerHTML = contents[pageIndex]; 
  const filePath = getFilePath(pageIndex);
  replaceCssFile(filePath); 
}); 