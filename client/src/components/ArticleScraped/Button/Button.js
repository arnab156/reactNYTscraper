import React from 'react';

const button = (props) => (
  <button className="btn btn-dark" onClick={props.clicked}>{props.title}</button>
);

export default button;