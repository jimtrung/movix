window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (localStorage.getItem('dark-mode') === "enabled") {
  document.body.classList.add('dark-mode');
}

document.querySelector('footer').innerHTML = `
  <span>Bạn có câu hỏi?<a>Liên hệ với chúng tôi</a></span>
  <ul>
    <li><a>Câu hỏi thường gặp</a></li>
    <li><a>Trung tâm trợ giúp</a></li>
    <li><a>Điều khoản sử dụng</a></li>
    <li><a>Quyền riêng tư</a></li>
    <li><a>Tùy chọn cookie</a></li>
    <li><a>Thông tin doanh nghiệp</a></li>
  </ul>
  <select>
    <option>Tiếng Việt</option>
  </select>
`