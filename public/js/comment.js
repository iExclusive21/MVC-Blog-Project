
const newFormHandler = async (event) => {
    event.preventDefault();
    // const name = document.querySelector('#project-name').value.trim();
  //   const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc1').value.trim();
    // console.log(document.getElementById('project-id'));
    const project_id = document.getElementById('project-id').innerHTML.trim();
    
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description,project_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };

//create function that will make a get fetch from api and the api route will return all of the comments along with the user information. Inside of the callback of that fetch, i'll write all of that information to this page. The function will make a query to the database and it will add all of the comments to the database. On line 20, whenever a user successfuly submits a comment you just run that same function again. 

//Will prolly have to make a new route. 

  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

const projectsDelete = document
  .querySelector('.project-list');

