const projectId = document.querySelector('input[name="project-id"]').value;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="project-text"]').value;

  await fetch(`/api/post/${projectId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/myprojects');
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
  .querySelector('#edit-project-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
