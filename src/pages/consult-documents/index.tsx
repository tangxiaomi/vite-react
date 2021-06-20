import React, { useState } from 'react';
import '../consult-documents/index.scss';
import { Tabs } from 'antd';
import ConsultForm from './components/consult-form';
import ConsultJson from './components/consult-json';

const { TabPane } = Tabs;

function ConsultDocument(){
  const [json, setJson] = useState({});
  const callback = (key: any) => {
    console.log(key);
  }
  return (
    <div className="consult-doc-content">
      查询文档
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="ReqFormMode" key="1">
          <div className="consult-content">
            <ConsultForm getJsonResponse={(json: any) => {setJson(json)}}/>
            <ConsultJson jsonReponse={json}/>
          </div>
        </TabPane>
        <TabPane tab="ReqCodeMode" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ConsultDocument;
