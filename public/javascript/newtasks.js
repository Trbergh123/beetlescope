const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#tasks_title').value;
    const type = document.querySelector('#tasks_type').value;
    const project_id = document.querySelector('project_id').value;
    const users_with_access = document.querySelector('#select-user').value;
    const status = "Waiting to start"
   
    
    const token = localStorage.getItem("token");
    await fetch(`/api/tasks`, {
     
      method: "POST",
      body: JSON.stringify({
  
        title,
        task_text,
        type,
        project_id,
        //priority,
        users_with_access,
        status
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }); 
    /*
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
    */
    
    //document.location.replace("/edit-project");
    //getUsers()
};
  document
    .querySelector("#new-task-form")
    .addEventListener("submit", newFormHandler);