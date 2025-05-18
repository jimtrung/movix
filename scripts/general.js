window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (localStorage.getItem('dark-mode') === "enabled") {
  document.body.classList.add('dark-mode');
}

document.querySelector('footer').innerHTML = `
  <footer class="footer">
    <div class="social">
      <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
      <a href="#"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.facebook.com/share/1DTPEeZQHG/?mibextid=wwXIfr"><i class="fa-brands fa-facebook-f"></i></a>
      <a><i class="fa-brands fa-youtube"></i></a>
    </div>
    <ul class="list">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Service</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>

    <p class="copyright">
      © Movix | All Rights Reserved
    </p>
  </footer>
`