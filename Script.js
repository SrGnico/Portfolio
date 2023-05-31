function changeStatus(i){
    const sections = document.querySelectorAll('section');
    for(let i = 0; i < sections.length; i++){
        sections[i].dataset.status = 'close';
    }
    sections[i].dataset.status = 'open';
}