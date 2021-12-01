import React from "react";
import SimpleTeam, { SimpleTeamProps } from "./SimpleTeam";

interface SimpleTeamsProps {
  size?: "small" | "normal" | "big" | "monster";
  teamsProps: SimpleTeamProps[];
}

const SimpleTeams = (props: SimpleTeamsProps) => {
  return (
    <div className="p-8 rounded-lg shadow text-base-content">
      <p className="text-center text-3xl font-bold">Professional team</p>
      <p className="text-center mb-12 text-xl font-normal">
        Meat the best team in wolrd
      </p>
      <div className="flex items-center flex-col md:flex-row justify-evenly">
        {props.teamsProps &&
          props.teamsProps.map((teamMemberProps) => {
            return (
              <SimpleTeam
                img={teamMemberProps.img}
                name={teamMemberProps.name}
                job={teamMemberProps.job}
                desc={teamMemberProps.desc}
                size={teamMemberProps.size ? teamMemberProps.size : props.size}
              />
            );
          })}
      </div>
    </div>
  );
};
export default SimpleTeams;
