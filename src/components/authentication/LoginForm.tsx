import { useState } from 'react';
import { Form, Input, Button, Card, message, Row, Col } from 'antd';


const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form reference

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    // Mock authentication
    setTimeout(() => {
      if (values.email === 'admin@example.com' && values.password === 'password') {
        message.success('Login successful');
        // Clear form fields upon successful login
        form.resetFields();
      } else {
        message.error('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={22} sm={20} md={16} lg={12} xl={8}>
        <Card title="Login" style={{ width: '100%' }}>
          <Form
            form={form} // Set the form reference
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email address!' },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' },
                { max: 20, message: 'Password must be at most 20 characters!' },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: 'center' }}>
            <a href="#">Forgot password?</a> | <a href="#">Register</a>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
