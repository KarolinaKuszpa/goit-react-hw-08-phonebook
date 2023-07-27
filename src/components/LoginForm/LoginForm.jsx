//tworzenie komponentu:
import { Helmet } from 'react-helmet';
import styles from './LoginForm.module.css';

export const Login = () => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
  </div>
);

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.value);
    form.reset();
  };

  return (
    <form>
      <label className="styles.label onSubmit={handleSubmit}">
        Email
        <input type="email" name="email" />
      </label>
      <label className="styles.label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
