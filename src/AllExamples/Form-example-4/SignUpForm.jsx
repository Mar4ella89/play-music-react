import React, { Component } from 'react';

import SignUpFormLight from './SignUpFormLight';
import SignUpFormFull from './SignUpFormFull';
import SignUpFormFormik from './SignUpFormFormik';

import css from './SignUpForm.module.css';

class SignUpForm extends Component {
  render() {
    return (
      <>
        <SignUpFormLight onSubmit={values => console.log(values)} />
        <SignUpFormFull onSubmit={values => console.log(values)} />
        <SignUpFormFormik />
      </>
    );
  }
}

export default SignUpForm;