import React, { useContext } from "react";
import "./results.css";
import Card from "../Card/Card";
import MentorContext from "../../context/mentorContext/MentorContext";

const Results = () => {
  const { mentors } = useContext(MentorContext);

  return (
    <div className="results">
      <Card />
    </div>
  );
};

export default Results;
