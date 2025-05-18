document.querySelector('.xemthem').addEventListener('click', (event) => {
  event.stopPropagation()
  if (document.querySelector('.more').classList.contains('hienThi'))
    document.querySelector('.more').classList.remove('hienThi');
  else {
    document.querySelector('.more').classList.add('hienThi');
  }
});

document.querySelector('#hamburger-menu').addEventListener('click', (event) => {
  event.stopPropagation()
  if (document.querySelector('.MENU').classList.contains('hienthi2'))
    document.querySelector('.MENU').classList.remove('hienthi2');
  else {
    document.querySelector('.MENU').classList.add('hienthi2');
  }
});
document.body.addEventListener('click', () => {
  if (document.querySelector('.MENU').classList.contains('hienthi2'))
    document.querySelector('.MENU').classList.remove('hienthi2');
})

document.body.addEventListener('click', () => {
  if (document.querySelector('.more').classList.contains('hienThi'))
    document.querySelector('.more').classList.remove('hienThi');
})