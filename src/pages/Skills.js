import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Skills() {
  const [technologies, setTechnologies] = useState([])
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((response) => { setTechnologies(response.data) })
      .catch((error) => { console.log(error) })
  }, [])
  return (
    <div className='row'>
      {technologies.map((item) => (
        <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3 p-3' >
          <div class="card">
            <img src={item.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.name} </h5>
                <Link to={`/skills/${item.id}`} class="btn btn-primary"> learn about </Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills