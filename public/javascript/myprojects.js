// const projectId = document.querySelector('h5[name="project-id"]').value;
// function projectDetails() {
//     await fetch(`/api/projects/${projectId}`, {
//         method: 'GET',
//         body: JSON.stringify({
//             title,
//             project_text,
//             priority,
//             status
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
   
// };
// document.querySelector('#project-details').addEventListener('click', projectDetails())
const projectId = document.querySelector('input[name="project-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="project-title"]').value;
  const body = document.querySelector('textarea[name="project-body"]').value;

  await fetch(`/api/myprojects/${projectId}`, {
    method: 'GET',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/edit-project/:id');
};
await fetch(`/api/users`, {
        
    method: "GET",
    body: JSON.stringify({
        username
    })
    .then(response => response.json())
    .then(data => console.log(data))
})
$('input-group-prepend').append('<option>' + data[0].abc  + '</option>');

const deleteClickHandler = async function() {
  await fetch(`/api/projects/${projectId}`, {
    method: 'DELETE'
  });

  document.location.replace('/');
};

document
  .querySelector('#project-details')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);