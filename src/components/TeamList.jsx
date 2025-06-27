import React from "react";

const TeamList = ({ teams }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>AI Teams</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {teams.map((team, index) => (
                    <li
                        key={index}
                        style={{
                            padding: "12px",
                            marginBottom: "10px",
                            backgroundColor: "#f3f3f3",
                            borderRadius: "6px",
                        }}
                    >
                        <strong>{team.name}</strong> — {team.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamList;
