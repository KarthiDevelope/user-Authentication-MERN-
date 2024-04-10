import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            await axios.post('http://localhost:8800/login', values)
                .then(result => {
                    if (result.data === "success") {
                        navigate("/home")
                    }
                })

        } catch (error) {
            console.error('Failed to log in:', error);
            message.error('Failed to log in. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <h1>Login User</h1>

            <Form
                layout='vertical'
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Login
                    </Button>
                </Form.Item>
            </Form>

            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default Login;
