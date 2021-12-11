const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () =>{
    let current = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(scrollY > (sectionTop - sectionHeight/3)){
            current = section.getAttribute('id');
        }
    })

    navA.forEach(a =>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})