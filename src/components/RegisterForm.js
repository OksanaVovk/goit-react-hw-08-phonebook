import authOperations from 'redux/auth/auth-operations';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  let nameId = nanoid();
  let emailId = nanoid();
  let passId = nanoid();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(event.currentTarget.name);
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          required
        />
      </label>
      <label htmlFor={emailId}>
        Email
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          value={email}
          required
        />
      </label>
      <label htmlFor={passId}>
        Password
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          value={password}
          minLength="7"
          required
        />
      </label>
      <button className="main_button" type="submit">
        Registration
      </button>
    </form>
  );
};
export default RegisterForm;
