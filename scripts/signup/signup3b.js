import { FindPack } from "../../data/packs.js";
import { FindUser, LogOut } from "../../data/user.js";   
import { MoneyToString } from "../utils/moneyToString.js";

// =================== MAIN ================== //
LogOut();

const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

let user;   
try {
  user = FindUser(email);
} catch (e) {
  alert(e);
}
console.log(user);

let pack;
try {
  pack = FindPack(user.pack);
} catch (e) {
  alert(e);
}

const paymentHTML = 
`
  <div class="pack-info">
    <div class="pack">Thông tin đơn hàng</div>
    <hr class="hr-1">
    <div class="info">Mã đơn hàng: #ADASH872</div>
    <div class="info">Đơn hàng: Gói ${pack.name}</div> 
    <hr class="hr-1"> 
    <div class="total-cost">Tổng số tiền: ${MoneyToString(pack.price)} đ</div> 
  </div>
  <div class="payment-method">
    <div class="qr-container">
      <i class="fa-solid fa-qrcode"></i>
      <div>Dùng ứng dụng ngân hàng quét mã QR để chuyển khoản</div>
    </div>
    <div class="payment-info">
      <img class="qr-code" src="assets/payment-qr.png">
      <div class="detail-container">
        <div>Ngân hàng: MVXB</div> 
        <div>Số tài khoản: 23810310044</span></div>
        <div>Tên tài khoản: Movix Inc</div>
        <div>Số tiền: ${MoneyToString(pack.price)} đ</div>
        <div>Nội dung chuyển khoản: ADASH872</div>
      </div>
    </div>
  </div>
`;

document.querySelector('.payment-container').innerHTML = paymentHTML;