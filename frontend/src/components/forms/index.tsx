import React, { useState, FC } from 'react';

import { 
  Form, 
  Row, 
  Col, 
  Input, 
  Button, 
  Select,
  FormInstance,

 } from 'antd';

import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface OptionProps extends React.Component {}

interface Ifilds{
  hendleSubmit(value:any):void
  ref?: React.Ref<FormInstance<any>>
  form?:any
}

export const AdvancedSearchForm:FC<Ifilds> = ({ hendleSubmit, children,ref,form }) => {
  const [expand, setExpand] = useState(false);
  const [forms] = Form.useForm();


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };



  return (
    <Form
      form={form}
      layout="vertical"
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={hendleSubmit}
      ref={ref}
    >
     { children }
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Resistrar
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Limpar
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
          
          </a>
        </Col>
      </Row>
    </Form>
  );
};