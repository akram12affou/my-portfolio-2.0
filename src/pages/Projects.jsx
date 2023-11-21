import React from 'react'
import projects from '../db/projects'
import Project from '../components/Project'
function Projects() {

  return (
    <div className='bg_color'>
    <div className=''>
     {projects.map((project,i) => {
        return(
            <Project key={i}  project={project}/>
        )
     })}

    </div>
    </div>
  )
}

export default Projects