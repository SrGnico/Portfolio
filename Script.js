function changeStatus(x){
    const sections = document.querySelectorAll('.principal-section');
    if(sections[x].dataset.status === 'close'){
        for(let i = 0; i < sections.length; i++){
            sections[i].dataset.status = 'close';
        }
        sections[x].dataset.status = 'open';
    }
    
}
