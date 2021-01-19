import React, { useState } from 'react';
import Header from 'components/Header';
import HomePage from 'pages/Home';
import SignInPage from 'pages/SignIn';
import SignUpPage from 'pages/SignUp';
import './App.css';

type Pages = 'sign-in' | 'sign-up' | 'home';

const App = () => {
  const [page, setPage] = useState<Pages>('sign-in');
  const [user, setUser] = useState<{} | undefined>();
  const onCreateAccount = () => setPage('sign-up');
  const onLogin = () => {
    setUser({});
    setPage('home');
  };

  const onLogout = () => {
    setPage('sign-in');
    setUser(undefined);
  };

  return (
    <div className="content">
      <Header
        user={user}
        onLogin={() => setPage('sign-up')}
        onLogout={onLogout}
        onCreateAccount={onCreateAccount}
      />
      <main>
        {page === 'home' && <HomePage />}
        {page === 'sign-in' && <SignInPage onLogin={onLogin} />}
        {page === 'sign-up' && (
          <SignUpPage onBack={onLogin} onSignUp={() => setPage('sign-up')} />
        )}
      </main>
    </div>
  );
};

export default App;
