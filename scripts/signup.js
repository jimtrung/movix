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
  document.querySelector('.target').innerHTML = contents[pageIndex];  

  if (pageIndex <= 3) {
    document.querySelector('.next-button').addEventListener('click', () => {
      if (pageIndex == 1) {
        email = document.querySelector('.email-input').value;
      }
      pageIndex++;
      const filePath = getFilePath(pageIndex);
      document.querySelector('.target').innerHTML = contents[pageIndex];  
      replaceCssFile(filePath); 
      renderPage(pageIndex);
    }); 
  }

  if (pageIndex <= 1) {
    ToggleDropdown(); 
  }
  if (pageIndex == 1) {
    TogglePassword();
  }
  if (pageIndex >= 2) {
    document.querySelector('.email').innerHTML = email;
  }
}

// ============== MAIN ================ //
let email = "";
let pageIndex = 0;
renderPage(pageIndex);