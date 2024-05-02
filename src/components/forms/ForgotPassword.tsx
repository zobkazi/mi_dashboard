// ForgotPasswordForm.tsx
'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Validate email format
      if (!validateEmail(email)) {
        setError('Invalid email address');
        return;
      }
      if (!email) {
        setError('Please enter your email');
        return;
      }

      // // Send POST request to backend API
      // const response = await axios.post('/api/forgotpassword', { email });
      // setMessage(response.data.message);

      console.log('Email sent successfully', email);
    
      setMessage('check your email, and click on the link to reset your password');
      setEmail('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
      setMessage('');
    }
  };

  const validateEmail = (email: string) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="flex mt-10 items-center justify-center h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">Forgot Password</h1>
        <div className="flex flex-col items-center">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email address"
          />

        </div>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
