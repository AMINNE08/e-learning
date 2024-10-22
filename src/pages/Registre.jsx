import { useState } from 'react';
import '../'; // Import the styles
import 'ionicons';

const Register = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      <img src="img.png" alt="Welcome" />
      <h2 className="text-right">Welcome</h2>
      <div className="form-wrapper login">
        <form>
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="sign-link">
            <p>Dont have an account? <a href="#" onClick={toggleForm}>Register</a></p>
          </div>
        </form>
      </div>

      <div className="form-wrapper register">
        <form>
          <h2>Registration</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person"></ion-icon>
            </span>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Register</button>
          <div className="sign-link">
            <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
