import { packs } from "../../data/packs.js";
import { LogOut, SetPack } from "../../data/user.js";   
import { MoneyToString } from "../utils/moneyToString.js";
import { ToggleDropdown } from '../utils/dropdown.js'; 
import { ToggleDarkMode } from "../utils/darkmode.js";

// =============== MAIN ================ //
LogOut();
ToggleDropdown();
ToggleDarkMode();

const email = localStorage.getItem('email');
let pickedPack = "none";
document.querySelector('.email').innerHTML = email;

let packsHTML = "";
packs.forEach(pack => {
  packsHTML += `
      <div class="pack-container ${pack.tag}-pack" data-pack="${pack.tag}">
        <div class="pack-header ${pack.tag}">
          <span class="pack-name">${pack.name}</span>
          <span class="quality">${pack.quality}</span>
          <span class="picked-icon-container">
            <i class="invisible picked-icon fa-solid fa-circle-check ${pack.tag}-icon"></i>
          </span>
        </div>
        <div class="pack-description">
          <div class="desc">
            <span class="col">Giá hàng tháng</span>
            <span class="col-detail">${MoneyToString(pack.price)} đ</span>
          </div>
          <hr>
          <div class="desc">
            <span class="col">Chất lượng hình ảnh và âm</span>
            <span class="col-detail">${pack["quality-name"]}</span>
          </div>
          <hr>
          <div class="desc">
            <span class="col">Độ phân giải</span>
            <span class="col-detail">${pack.quality} (${pack["resolution-tag"]})</span>
          </div>
          <hr>
          <div class="desc">
            <span class="col">Thiết bị hỗ trợ</span>
            <span class="col-detail">${pack.devices}</span>
          </div>
          <hr>
          <div class="desc">
            <span class="col">Số lượng thiết bị có thể xem cùng 1 lúc</span>
            <span class="col-detail">${pack["watch-amount"]}</span>
          </div>
          <hr>
          <div class="desc">
            <span class="col">Số lượng thiết bị được tải xuống</span>
            <span class="col-detail">${pack["download-amount"]}</span>
          </div>
        </div>
      </div>
  `
})

document.querySelector('.pricing-container').innerHTML = packsHTML;

document.querySelectorAll('.pack-container').forEach((pack) => {
  pack.addEventListener('click', () => {
    document.querySelectorAll('.picked-icon').forEach((icon) => {  
      icon.classList.add('invisible'); 
    });
    const type = pack.dataset.pack;
    pickedPack = type;
    document.querySelector(`.${type}-icon`).classList.remove('invisible');
  });
});

document.querySelector('.next-button').addEventListener('click', () => {
  SetPack(email, pickedPack);
  
  window.location.href = 'signup3a.html';
});