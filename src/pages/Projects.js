import React from 'react'
const myProjects = [
  {
    title: 'business-land',
    descreption: 'A simple landing project with Html and Css ',
    url: 'https://business-land.vercel.app/',
  },
]



function Projects(params) {
  return (
    <div>
      {myProjects.map((item, index) => (
        <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">{item.descreption}</p>
            <a href={item.url} target="_blank" class="card-link">Preview</a>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}



export default Projects