import { nanoid } from 'nanoid';
const LoginForm = () => {
  let emailId = nanoid();
  let passId = nanoid();

  return (
    <form>
      <label htmlFor={emailId}>
        Email
        <input type="email" name="email" required />
      </label>
      <label htmlFor={passId}>
        Password
        <input type="password" name="password" required />
      </label>
      <button className="main_button" type="submit">
        Log In
      </button>
    </form>
  );
};
export default LoginForm;
