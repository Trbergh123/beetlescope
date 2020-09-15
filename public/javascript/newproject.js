const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="project-title"]').value;
    const body = document.querySelector('textarea[name="project-text"]').value;
  
    const token = localStorage.getItem("token");
    await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({
        title,
        project_text,
        users_with_access
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    });
  
    document.location.replace("/myprojects");
 
};
  document
    .querySelector("#new-project-form")
    .addEventListener("submit", newFormHandler);