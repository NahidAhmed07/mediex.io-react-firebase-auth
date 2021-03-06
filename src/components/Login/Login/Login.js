import React from "react";
import "./Login.css";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import googleImg from "../../../images/login/google.png";
import githubImg from "../../../images/login/github.png";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Login = () => {
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location?.state?.from || "/";

  const {
    googleSignIn,
    loginWithEmail,
    setError,
    setUser,
    error,
    setIsLoading,
    githubSignIn,
  } = useAuth();

  // handle google signIn function
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Handle Github sign fucntion
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // process login function
  const processLogin = () => {
    setIsLoading(true);
    loginWithEmail(email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
      })
      .catch((err) => {
        if (err.message.includes("user-not-found")) {
          setError("Invalid Email and Password");
        } else {
          setError(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    processLogin();
  };

  // email validation function
  const handleEmil = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };

  return (
    <div className="auth-home pt-5" id="login">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={5} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Login</h2>
              <hr />
              <br />
              <p className="text-center">Or Sign Using </p>
              <div className="icon-parent">
                <img
                  onClick={handleGoogleSignIn}
                  className="img-icon"
                  src={googleImg}
                  alt=""
                />
                <img
                  onClick={handleGithubSignIn}
                  className="img-icon"
                  src={githubImg}
                  alt=""
                />
              </div>
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepen">
                      <i className="far fa-envelope-open text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onChange={handleEmil}
                      className="input-field"
                      id="login-email"
                      type="email"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-unlock-alt text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      id="login-password"
                      onBlur={(e) => setPassword(e.target.value)}
                      type={showState ? "text" : "password"}
                      placeholder="Enter your password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowState(!showState)}
                      className="toggleIcon"
                      id="inputGroupPrepend"
                    >
                      <i
                        className={
                          showState ? "far fa-eye-slash" : "far fa-eye"
                        }
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <p className="text-end my-3 forgot-text">Forgot password?</p>

                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="login-btn">LOGIN</button>

                <p className="text-center mt-5">
                  Are You New ?{" "}
                  <HashLink to="/register#register">Rlease Register</HashLink>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
