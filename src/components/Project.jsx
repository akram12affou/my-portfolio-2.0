import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaEye } from "react-icons/fa";

function Project({ project }) {
  return (
    <div className="flex text-white w-10/12 mx-auto">
      <div className="w-7/12">
        <div className="flex">
          <h3>{project.name}</h3>
          <div className="flex">
            <span href={project.github}>
              <LuGithub className="text-white" />
            </span>
            <span href={project.live}>
              <FaEye className="text-white" />
            </span>
          </div>
        </div>
      </div>
      <div>{project.description}</div>

      <div>
        {project?.photos?.map((e) => {
          return <img src={e} />;
        })}
      </div>
    </div>
  );
}

export default Project;
