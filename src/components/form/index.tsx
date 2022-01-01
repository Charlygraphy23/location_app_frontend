import React from 'react';

type FormTypes = {
  placeholder?: string;
  email: string;
  password: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  loading: boolean;
};

const Forms = ({
  placeholder,
  email,
  password,
  onSubmit,
  onChange,
  loading,
}: FormTypes) => {
  return (
    <form action='#' onSubmit={onSubmit}>
      <input
        type='email'
        name='email'
        placeholder={placeholder}
        value={email}
        onChange={onChange}
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={onChange}
      />
      <button type='submit' disabled={loading}>
        {loading ? (
          <div className='spinner-border text-light' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        ) : (
          <i className='bi bi-chevron-right'></i>
        )}
      </button>
    </form>
  );
};

export default Forms;
