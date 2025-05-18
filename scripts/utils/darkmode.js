export function ToggleDarkMode() {
  document.querySelector('.toggle').addEventListener(('click'), () => {
    if (localStorage.getItem('dark-mode') === "disabled") {
      localStorage.setItem('dark-mode', "enabled");
      document.querySelector('.toggle-text').innerHTML = "Chế độ sáng";
    } else {
      localStorage.setItem('dark-mode', "disabled"); 
      document.querySelector('.toggle-text').innerHTML = "Chế độ tối"; 
    }
    document.body.classList.toggle('dark-mode');
  });
}