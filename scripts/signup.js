import { contents } from '../data/contents.js'; 
import { ToggleDropdown } from './dropdown.js';
import { TogglePassword } from './passwordToggle.js';

function replaceCssFile(filepath) {
  let link = document.querySelector("link[rel='stylesheet']");
  link.href = filepath;
}

function getFilePath(pageIndex) {
  let alter = 'a';
  if (pageIndex % 2 !== 0) {
    alter = 'b';
  }
  return `styles/signup/signup${parseInt((pageIndex + 2) / 2)}${alter}.css`;  
}

function renderPage(pageIndex) { 
  document.querySelector('.x').innerHTML = contents[pageIndex];  

  document.querySelector('.next-button').addEventListener('click', () => {
    pageIndex++;
    const filePath = getFilePath(pageIndex);
    document.querySelector('.x').innerHTML = contents[pageIndex];  
    replaceCssFile(filePath); 
    renderPage(pageIndex);
  }); 

  ToggleDropdown();
  TogglePassword();
}

// ============== MAIN ================ //
let pageIndex = 0;
renderPage(pageIndex);