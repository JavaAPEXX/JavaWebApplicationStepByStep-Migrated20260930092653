import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginProps {
  /** Optional error message that would have been supplied by the server (e.g. ${errorMessage}) */
  errorMessage?: string;
}

/**
 * Login page – faithful migration of `login.jsp`.
 * Preserves the original form action (`/login.do`) and method (`POST`),
 * while modernising the markup with the requested design‑system classes.
 */
const Login: React.FC<LoginProps> = ({ errorMessage }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // The form is submitted natively to the backend (`/login.do`).
  // We only prevent default when the user presses Enter inside the inputs
  // to avoid accidental double‑submission while still preserving the original POST.
  const handleSubmit = (e: FormEvent) => {
    // No custom client‑side processing – let the browser perform a normal POST.
    // Keeping the handler only to satisfy TypeScript (optional).
  };

  return (
    <div className="modern-container">
      {/* Navigation – kept from original JSP, modernised with generic classes */}
      <nav className="navbar navbar-default">
        <a href="/" className="navbar-brand">
          Brand
        </a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="/list-todos.do">Todos</a>
          </li>
          <li>
            <a href="http://www.in28minutes.com">In28Minutes</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/login.do">Login</a>
          </li>
        </ul>
      </nav>

      {/* Card containing the login form */}
      <div className="modern-card">
        <h2 className="modern-card-title">Login</h2>

        {/* Server‑side error message (was ${errorMessage}) */}
        {errorMessage && (
          <div className="alert-box" role="alert">
            {errorMessage}
          </div>
        )}

        <form action="/login.do" method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>

      {/* Footer – preserved from original JSP */}
      <footer className="footer">
        <div>footer content</div>
      </footer>
    </div>
  );
};

export default Login;