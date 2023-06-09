import React, { SyntheticEvent, useState } from 'react';
import './styles.css';
import { Storefront } from '@material-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { createUser, signIn } from '../../database/Firebase.js';
import { UseAuthConsumer } from '../../contexts/useAuth.js';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = UseAuthConsumer();

  const [createForm, setCreateForm] = useState({ email: '', password: '' });

  const onChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setCreateForm((current) => ({ ...current, [name]: value }));

  const loginUser = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signIn(createForm.email, createForm.password)
      .then((res) => {
        login(res);
        navigate('/');
      })
      .catch((error: Error) => console.log(error.message));
  };

  const register = () => {
    createUser(createForm.email, createForm.password)
      .then((auth) => {
        if (auth) {
          navigate('/');
        }
      })
      .catch((error: Error) => console.log(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="login_logo">
          <Storefront className="login_logoImage" fontSize="large" />
          <h2 className="login_logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            name="email"
            value={createForm.email}
            onChange={onChange}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={createForm.password}
            onChange={onChange}
          />

          <button
            type="submit"
            className="login_signInButton"
            onClick={loginUser}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className="login_registerButton"
          onClick={register}
          type="button"
        >
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};
