import React from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Login.css'; // Make sure to create this CSS file
import image from './123.jpg'; // Adjust the path according to your folder structure

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/api/v1/users/login', values);
      setLoading(false);
      message.success('Login successful');
      localStorage.setItem(
        'user',
        JSON.stringify({ ...data.user, password: '' })
      );
      navigate('/');
    } catch (error) {
      setLoading(false);
      message.error('Something went wrong');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}
        <motion.div
          className="login-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={image}
            alt="Login Illustration"
            className="login-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <Form layout="vertical" onFinish={submitHandler} className="login-form">
            <motion.h1
              className="login-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              EXPENSE MANAGEMENT
            </motion.h1>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <motion.div
              className="d-flex justify-content-between sc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/register">Not a user? Click Here to register</Link>
              <button className="btn btn-primary">Login</button>
            </motion.div>
          </Form>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
