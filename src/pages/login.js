import React, { Component } from 'react';

import LoginForm from '../components/form/login_form';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }

  onHandleSubmit = login => {};
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
