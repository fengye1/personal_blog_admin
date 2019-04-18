import React, { Component } from 'react';
import { Form, Button, Icon, Input } from 'antd';
import { Mutation } from 'react-apollo';
import { loginGql } from '../../utils/gql';

class LoginForm extends Component {
  handleSubmit = (e, login) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({ variables: values });

      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Mutation mutation={loginGql}
      onCompleted={(data)=>{
        console.log("data", data)
        
        localStorage.setItem("BlogToken", data.login.accessToken); 
      }}
      >
        {(login, { data }) => (
          <Form onSubmit={e => this.handleSubmit(e, login)} style={styles.login_form}>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form>
        )}
      </Mutation>
    );
  }
}
const styles = {
  login_form: {
    maxWidth: 300,
  },
};
const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;
