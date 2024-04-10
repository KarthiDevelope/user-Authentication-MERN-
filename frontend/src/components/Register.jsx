import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            await axios.post('http://localhost:8800/register', values);
            message.success('User registered successfully.');
            form.resetFields();
            navigate("/")
        } catch (error) {

            message.error('Failed to register user. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Register User</h1>

            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                >
                    <Input />
                </Form.Item>
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
                <p>Already have an account? <Link to="/">Login</Link></p>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
