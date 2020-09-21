const projectId = document.querySelector('h5[name="project-title"]').value;
function projectDetails() {
    await fetch(`/api/projects/${projectId}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            project_text,
            priority,
            status
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
   
};