import React, { useState } from 'react';

const Login = () => {
  const [isSignup, setIsSignUp] = useState(false);

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  };
  return (
    <div className='form-container'>
      <h1>{isSignup ? 'Sign Up' : 'Sign In'}</h1>
      <form>
        {isSignup && (
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input name='name' type='text' />
          </div>
        )}
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' />
        </div>
        {isSignup && (
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input name='confirmPassword' type='password' />
          </div>
        )}

        <button>{isSignup ? ' Sign Up' : ' Sign In'}</button>
      </form>

      <div className='form-account'>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={switchMode}>{isSignup ? ' Sign In' : ' Sign Up'}</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
