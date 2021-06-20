import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import './index.scss';

const ConsultJson = (props: any) => {
  const {jsonReponse} = props;

  return (
    <div className="json-content">
      <span>response</span>
      <div className="response-body">
       <ReactJson src={jsonReponse} />
      </div>
    </div>
  )
};

export default ConsultJson;
