import React from "react";
import sampleProjects from "../data/sampleProjects";
import sampleTeams from "../data/sampleTeams";

const ProjectList = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Project List</h2>
            <ul>
                {sampleProjects.map(project => {
                    const team = sampleTeams.find(team => team.id === project.teamId);
                    return (
                        <li key={project.id} style={{ marginBottom: "16px" }}>
                            <strong>{project.name}</strong><br />
                            <em>{project.description}</em><br />
                            <span>Team: {team ? team.name : "Unassigned"}</span><br />
                            <span>Deadline: {project.deadline}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProjectList;
