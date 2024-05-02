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

      // // Send POST request to backend API
      // const response = await axios.post('/api/forgotpassword', { email });
      // setMessage(response.data.message);

      console.log('Email sent successfully', email);
    
      setMessage('Email sent successfully');
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
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">Forgot Password</h1>
        <div className="flex flex-col items-center">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email address"
          />
          <button type="submit" className="mt-2 px-3 py-2 bg-indigo-600 text-white rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6a4 4 0 016.47-3.12l5.5-2.75a.5.5 0 01.65.49v13.56a.5.5 0 01-.65.49l-5.5-2.75A4 4 0 016 6zm4 2a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
