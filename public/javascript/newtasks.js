const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#tasks-title').value;
    const type = document.querySelector('#tasks-type').value;
    const project_id = document.querySelector('#project_id').value;
    const users_with_access = document.querySelector('#select-user').value;
    const task_text = document.querySelector('#task-text').value;
    const priority = document.querySelector('#priority_options').value;
    
   
    
    const token = localStorage.getItem("token");
    await fetch(`/api/projects`, {
     
      method: "POST",
      body: JSON.stringify({
  
        title,
        type,
        task_text,
        project_id,
        priority,
        users_with_access
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }); 
    function getUsers() {
      fetch(`/api/tasks`)
      .then(response => {
        var select = document.createElement("select") 
        console.log(respone);
        response.data.forEach(item => {
           var option = document.createElement("option")
           option.value = item;
           option.textContent = item;
           select.appendChild(item)
        })
        document.querySelector("body").appendChild(select)
      })
    }
    
    document.location.replace("/edit-project");
    getUsers()
};
  document
    .querySelector("#new_task")
    .addEventListener("submit", newFormHandler);