import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("PLease check your password");
      return;
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="Display name"
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            label="Email"
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            label="password"
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            label="Confirm password"
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
