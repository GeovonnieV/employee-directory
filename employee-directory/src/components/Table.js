import React from "react";

function Table(props) {
  return (
    <div className="card">
    <div className="img-container">
      
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          {/* where the name goes in the card */}
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          {/* where the occupation goes */}
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          {/* where the location is */}
          <strong>Email:</strong> {props.email}
        </li>
      </ul>
    </div>
  </div>
  );
}
// exporting that jsx to use else where 
export default Table;
