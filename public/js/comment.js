
const newFormHandler = async (event) => {
    event.preventDefault();
    // const name = document.querySelector('#project-name').value.trim();
  //   const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc1').value.trim();
  
    if (description) {
      const response = await fetch(`/api/projects`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };

