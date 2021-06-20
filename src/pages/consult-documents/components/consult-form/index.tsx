import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './index.scss'

type LayoutType = Parameters<typeof Form>[0]['layout'];
const test = {'name':'外键关联异常sql校验','target':'public.report.id',
  'dbName':null,'type':5,
  'parameterArr':[{'foreignKey':'public.report_detail.report_id','customCondition':null}],
  'description':'','parameterLabel':'public.report_detail.report_id',
  'thresholds':[{'value':100,'id':1,'name':'优'},{'value':90,'id':2,'name':'良'},{'value':null,'id':3,'name':'中'}
  ,{'value':null,'id':4,'name':'差'}],'id':'52d2be60-bf00-4265-a049-4452f1bf4c2a',
  'parameter':{'foreignKey':'public.report_detail.report_id','customCondition':null}};

const ConsultForm = (props: any) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');


  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  const onFinish = (value: any) =>{
    props.getJsonResponse(test);
    console.log('111');
    console.log(value)
  }

  return (
    <>
      <Form
        className="form-content"
        layout={'horizontal'}
        form={form}
        onFinish={onFinish}
        initialValues={{ layout: 'horizontal' }}
      >
        <div className='sub-title'>URL</div>
        <Form.Item label="RequestURL" name="test">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <div className='sub-title'>General</div>
        <Form.Item label="category" name="test1">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="type">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="date">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="content.format">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="id">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="masterIdentifier">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="context.period.start">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="context.period.end">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="status">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <div className='sub-title'>Subject</div>
        <Form.Item label="patient.identifier">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="patient.name">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <div className='sub-title'>Author</div>
        <Form.Item label="author.name">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ConsultForm;