// 리액트 부트스트랩 이용해서 로그인 form 만들기
import React from "react";
import {Button, Form} from "react-bootstrap";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e) =>{
    e.preventDefault(); // 새로 고침 해 주는 걸 막아 줌
    //console.log("loginUser함수실행");
    setAuthenticate(true); // 로그인이 되게 바꿔줌
    navigate('/'); // 첫 페이지로 간다
  };


	return (
    <div className="container login-area">
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
};

export default Login;
