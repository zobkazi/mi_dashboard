'use client';
import { useState } from 'react';
import { Form, Input, Button, Card, message, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



const LoginForm = () => {
 const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm(); // Create a form reference

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    // Mock authentication
    setTimeout(() => {
      if (values.email === 'admin@admin.com' && values.password === 'admin123') {
        message.success('Login successful');
        // Simulate saving data to database
        saveToDatabase(values);
        form.resetFields();
        router.push('/dashboard');
      } else {
        message.error('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  const saveToDatabase = (data: { email: string; password: string }) => {
    // Simulate saving data to database
    console.log('Data saved to database:', data);
  };

  return (
    <Row justify="center" className="h-screen">
      <Col xs={22} sm={20} md={16} lg={12} xl={8}>
        <Card title="Login" className="w-full">
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
          <div className="text-center">
  
            <Link href="/auth/forgot-password" className="text-blue-500">
              &nbsp;Forgot Password
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
