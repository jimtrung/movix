window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (localStorage.getItem('dark-mode') === "enabled") {
  document.body.classList.add('dark-mode');
}

document.querySelector('footer').innerHTML = `
  <hr class="hr"> 
  <div class="footer-content"> 
    <ul>
      <h3>Về SKY MEDIA</h3>
      <li>Giới thiệu</li>
      <li>Các gói dịch vụ</li>
      <li>Liên hệ quảng cáo</li>
      <li>Trung tâm hỗ trợ</li>
    </ul>
    <ul> 
      <h3>Quy định</h3>
      <li>Điều khoản sử dụng</li>
      <li>Chính sách thanh toán</li> 
      <li>Chính sách bảo mật thông tin</li>
      <li>Chính sách bảo hành</li>
    </ul>
    <ul> 
      <h3>Liên Hệ</h3>
      <li><i class="fa-solid fa-phone"></i><span class="sdt">19008386</span></li>
      <li><i class="fa-solid fa-envelope"></i><span class="mail">hotroHKT@gmail.com</span></li>
      <p class="yap">Theo dõi chúng tôi qua:</p>
      <ul class="socials">
        <li><a class="fb" href="https://www.facebook.com/share/1DTPEeZQHG/?mibextid=wwXIfr" 
        target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li><a class="ytb" href="#"><i class="fa-brands fa-youtube"></i></a></li>
        <li><a class="toptop" href="#"><i class="fa-brands fa-tiktok"></i></a></li>
      </ul>
    </ul>
  </div>
`