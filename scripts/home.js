document.querySelector('.xemthem').addEventListener('click', (event) => {
    event.stopPropagation()
    if (document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
    else {
        document.querySelector('.more').classList.add('hienThi');
    } 
});

document.querySelector('#hamburger-menu').addEventListener('click',(event)=>{
    event.stopPropagation()
    if(document.querySelector('.MENU').classList.contains('hienthi2'))
        document.querySelector('.MENU').classList.remove('hienthi2');
    else {
        document.querySelector('.MENU').classList.add('hienthi2');
    }
});
document.body.addEventListener('click',()=>{
    if(document.querySelector('.MENU').classList.contains('hienthi2'))
        document.querySelector('.MENU').classList.remove('hienthi2');
})

document.body.addEventListener('click', () => {
    if (document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
})

document.querySelectorAll('.RIGHT').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;
        const container = document.querySelector('.DIVV' + index);
        container.scrollLeft += 520;
    })
})
document.querySelectorAll('.previous').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;
        const container = document.querySelector('.DIVV' + index);
        container.scrollLeft -= 620;
    })
})
document.querySelectorAll('.DIV-container').forEach(container => {
    container.addEventListener('scroll', () => {
        const index = container.dataset.index;
        const button = document.querySelector('.pre' + index + '-' + index);
        const button2 = document.querySelector('.next' + index + '-' + index);
        if (container.scrollLeft === 0) {
            button.classList.add('tanghinh');
        } else {
            button.classList.remove('tanghinh')
        }
        if (container.scrollLeft >= 1200) {
            button2.classList.add('tanghinh');
        } else {
            button2.classList.remove('tanghinh')
        }
    })
})
// document.querySelector('.text-go').addEventListener('onmouseover', ()=>{

// })

