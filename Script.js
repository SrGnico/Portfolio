function changeStatus(x){
    const sections = document.querySelectorAll('.principal-section');
    if(sections[x].dataset.status === 'close'){
        for(let i = 0; i < sections.length; i++){
            sections[i].dataset.status = 'close';
        }
        sections[x].dataset.status = 'open';
    }
    
}

function changeProjectStatus(x){
    const projects = document.querySelectorAll('.content-section-project');
    if(projects[x].dataset.status === 'close'){
        for(let i = 0; i < projects.length; i++){
            projects[i].dataset.status = 'close';
        }
        projects[x].dataset.status = 'open';
    }  
}