import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    };
  }
  componentDidMount() {}

  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      pw: e.target.value
    });
  }
  // save(args) {
  //   this.setState({
  //     token: args
  //   });
  // }
  signIn() {
    if (this.state.email === '' || this.state.pw === '') {
      alert('이메일이나 비번을 입력해주세요');
    } else {
      axios
        .post('http://localhost:3001/api/login', {
          email: this.state.email,
          pw: this.state.pw
        })
        .then(res => {
          console.log(res);
          localStorage.setItem('session', res.data);
          console.log(localStorage.getItem('session'));
          window.location = '/';
        })
        .catch(err => alert('비번이나 아이디 틀림 ㅋ'));
    }
  }
  // componentWillUnmount() {
  //   this.setState({
  //     token: token
  //   });
  //   console.log('로그인후token값2:'+this.state.token);
  // }
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <label>email</label>
        <input
          type="text"
          onChange={e => this.handleEmailChange(e)}
          id="email"
        ></input>
        <label>password</label>
        <input
          type="password"
          onChange={e => this.handlePasswordChange(e)}
          id="pw"
        ></input>
        <button onClick={() => this.signIn()}>Sign In</button>
      </div>
    );
  }
}
export default SignIn;
