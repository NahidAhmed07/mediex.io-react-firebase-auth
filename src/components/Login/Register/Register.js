import React from "react";
import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import googleImg from "../../../images/login/google.png";
import githubImg from "../../../images/login/github.png";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";

const Register = () => {
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location?.state?.from || "/";
  const {
    createNewUser,
    error,
    setUser,
    updateUserName,
    logOutUser,
    setError,
    googleSignIn,
    setIsLoading,
    githubSignIn,
  } = useAuth();

  // registration process function
  const processRegistration = () => {
    setError("");
    createNewUser(email, password, name)
      .then((result) => {
        setUser(result.user);
        updateUserName(name);
        logOutUser();
        history.push("/login");
        setError("");
      })
      .catch((err) => {
        if (err.message.includes("email-already-in-use")) {
          setError("This Email already Registered");
        }
      });
  };

  // validate email address
  const handleEmil = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };

  //  validate input password
  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password Should be at least 6 character");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Ensure Password has two uppercase letters");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Ensure Password has two digits");
      return;
    }
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError("Ensure Password has three lowercase letters");
      return;
    } else {
      processRegistration();
    }
  };

  // handle Google sign in function
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
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

  return (
    <div className="auth-home pt-5" id="register">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={5} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">
                Create New Account
              </h2>
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
              <Form onSubmit={handleRegistration}>
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Your Name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="far text-primary  fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={(e) => setName(e.target.value)}
                      className="input-field"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                {/* email field */}
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="far fa-envelope-open text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onChange={handleEmil}
                      id="email"
                      className="input-field"
                      type="email"
                      placeholder="Enter your Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                {/* password field  */}
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-unlock-alt text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      id="password"
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

                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="login-btn">REGISTER</button>

                <p className="text-center mt-5">
                  Already Have An Account ?
                  <HashLink to="/login#login">Please Login</HashLink>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
