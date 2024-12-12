"use client"

import Button from '@/components/Button';
import React, { useState, ChangeEvent, FocusEvent } from 'react';
import axios from 'axios';

interface FormValues {
  [key: string]: string;
}

const LoginPage: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({});
  const [message, setMessage] = useState('');

  const fullNameReGex = /^[a-zA-Z-\s]{2,40}$/;
  const usernameReGex = /^[a-zA-Z0-9_]{3,9}$/;
  const emailReGex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,8}$/;
  const phoneReGex = /^\d{10,15}$/;
  const passwordReGex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const getBorderColor = (name: string, value: string): string => {
    if (name === 'Full Name' && !fullNameReGex.test(value)) return 'focus:border-[#FF0000]';
    if (name === 'Username' && !usernameReGex.test(value)) return 'focus:border-[#FF0000]';
    if (name === 'Email' && !emailReGex.test(value)) return 'focus:border-[#FF0000]';
    if (name === 'Phone Number' && !phoneReGex.test(value)) return 'focus:border-[#FF0000]';
    if (name === 'Password' && !passwordReGex.test(value)) return 'focus:border-[#FF0000]';
    return 'focus:border-[#00FF00]';
  };

  const checkFieldInput = async () => {
    if (
      fullNameReGex.test(formValues['Full Name']) &&
      usernameReGex.test(formValues['Username']) &&
      emailReGex.test(formValues['Email']) &&
      phoneReGex.test(formValues['Phone Number']) &&
      passwordReGex.test(formValues['Password'])
    ) {
      try {
        await axios.post(
          'http://localhost:8800/api/auth/signup/',
          {
            full_name: formValues['Full Name'],
            username: formValues['Username'],
            email: formValues['Email'],
            phone_number: formValues['Phone Number'],
            password: formValues['Password'],
          },
          {
            withCredentials: true,
          }
        );
      } catch (err: any) {
        setMessage(err?.response?.data?.message || 'An error occurred');
      }
    } else {
      if (!fullNameReGex.test(formValues['Full Name'])) setMessage('Invalid Full Name');
      else if (!usernameReGex.test(formValues['Username'])) setMessage('Invalid Username');
      else if (!emailReGex.test(formValues['Email'])) setMessage('Invalid Email');
      else if (!phoneReGex.test(formValues['Phone Number'])) setMessage('Invalid Phone Number');
      else setMessage('Invalid Password');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkFieldInput();
  };

  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-96 flex flex-col gap-3">
        <input
          className={`p-3 focus:border outline-none rounded-2xl ${getBorderColor('Full Name', formValues['Full Name'] || '')}`}
          type="text"
          name="Full Name"
          placeholder="Full Name"
          value={formValues['Full Name'] || ''}
          onChange={handleInputChange}
        />
        <input
          className={`p-3 focus:border outline-none rounded-2xl ${getBorderColor('Username', formValues['Username'] || '')}`}
          type="text"
          name="Username"
          placeholder="Username"
          value={formValues['Username'] || ''}
          onChange={handleInputChange}
        />
        <input
          className={`p-3 focus:border outline-none rounded-2xl ${getBorderColor('Email', formValues['Email'] || '')}`}
          type="email"
          name="Email"
          placeholder="Email"
          value={formValues['Email'] || ''}
          onChange={handleInputChange}
        />
        <input
          className={`p-3 focus:border outline-none rounded-2xl ${getBorderColor('Phone Number', formValues['Phone Number'] || '')}`}
          type="text"
          name="Phone Number"
          placeholder="Phone Number"
          value={formValues['Phone Number'] || ''}
          onChange={handleInputChange}
        />
        <input
          className={`p-3 focus:border outline-none rounded-2xl ${getBorderColor('Password', formValues['Password'] || '')}`}
          type="password"
          name="Password"
          placeholder="Password"
          value={formValues['Password'] || ''}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-primary p-3 border-none outline-none rounded-2xl cursor-pointer text-background font-bold"
        >
          Sign Up
        </button>
      </form>
      <div className="text-[#ff0000]">{message}</div>
    </div>
  );
};

export default LoginPage;
