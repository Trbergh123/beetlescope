const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('#project_title').value;
    const project_text = document.querySelector('#project_text').value;
    const priority = document.querySelector('option').value;
    const users_with_access = document.querySelector('#select-user').value;
   
    
    const token = localStorage.getItem("token");
    await fetch(`/api/projects`, {
     
      method: "POST",
      body: JSON.stringify({
  
        title,
        project_text,
        priority,
        users_with_access
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }); 
    function getUsers() {
      fetch(`/api/users`)
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
    
    document.location.replace("/myprojects");
    getUsers()
};
  document
    .querySelector("#new-project-form")
    .addEventListener("submit", newFormHandler);
    
   
