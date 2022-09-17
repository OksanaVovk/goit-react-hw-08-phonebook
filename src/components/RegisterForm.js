import { nanoid } from 'nanoid';
const RegisterForm = () => {
  let nameId = nanoid();
  let emailId = nanoid();
  let passId = nanoid();

  return (
    <form>
      <label htmlFor={nameId}>
        Name
        <input type="text" name="name" required />
      </label>
      <label htmlFor={emailId}>
        Email
        <input type="email" name="email" required />
      </label>
      <label htmlFor={passId}>
        Password
        <input type="password" name="password" required />
      </label>
      <button className="main_button" type="submit">
        Registration
      </button>
    </form>
  );
};
export default RegisterForm;
