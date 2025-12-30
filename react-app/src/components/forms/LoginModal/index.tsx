'use client';

import { useState } from 'react';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <i className="icon icon-close"></i>
        </button>
        
        <h2>Войти</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите email"
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                required
              />
              <button 
                type="button" 
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`icon ${showPassword ? 'icon-eye_off' : 'icon-eye_on'}`}></i>
              </button>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Войти
          </button>
        </form>
        
        <div className={styles.footer}>
          <a href="#">Забыли пароль?</a>
          <span>Нет аккаунта? <a href="#">Зарегистрироваться</a></span>
        </div>
      </div>
    </div>
  );
}
