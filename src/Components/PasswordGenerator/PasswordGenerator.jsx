import React, { useState } from 'react';
import styles from './PasswordGenerator.module.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = (length = 12) => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className={styles["main-container"]}>
    <div className={styles.container}>
      <h1>Password Generator</h1>
      <div className={styles.password}>{password || 'Your password will appear here'}</div>
      <button className={styles.button} onClick={() => generatePassword()}>
        Generate Password
      </button>
      <button className={styles.button} onClick={() => generatePassword(16)}>
        Generate 16-Character Password
      </button>
    </div>
    </div>
  );
};

export default PasswordGenerator;
