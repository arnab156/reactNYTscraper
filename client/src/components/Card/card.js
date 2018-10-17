import React from 'react';

const card = (props) => (
  <div className="card">
    <div>
      <h3 className="card-title text-center">{props.title}</h3>
    </div>
    <div className="card-body">
      { props.children }
    </div>
  </div>
);

export default card;