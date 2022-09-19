import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from 'redux/auth/auth-operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let emailId = nanoid();
  let passId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget.name);
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={emailId}>
        Email
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          required
        />
      </label>
      <label htmlFor={passId}>
        Password
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          minLength={7}
          autoComplete="current-password"
          required
        />
      </label>
      <button className="main_button" type="submit">
        Log In
      </button>
    </form>
  );
};
export default LoginForm;
