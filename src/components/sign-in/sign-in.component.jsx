import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render = () => (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          handleChange={this.handleChange}
          value={this.state.email}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          handleChange={this.handleChange}
          value={this.state.password}
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
