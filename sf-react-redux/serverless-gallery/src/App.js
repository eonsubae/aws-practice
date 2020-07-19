import React, { Component } from 'react';

import {
  SignIn,
  SignUp,
  ForgotPwd,
  ConfirmAccount,
} from 'components/authentication';
import './App.css';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    let AuthComp = null;

    switch (4) {
      case 1:
        AuthComp = SignIn;
        break;
      case 2:
        AuthComp = SignUp;
        break;
      case 3:
        AuthComp = ForgotPwd;
        break;
      case 4:
        AuthComp = ConfirmAccount;
        break;
    }

    return <AuthComp ownMessage="My Own message"></AuthComp>;
  }
}

export default App;
