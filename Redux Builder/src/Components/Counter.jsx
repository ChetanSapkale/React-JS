import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from '../Components/CounterButton';
import { useSelector } from 'react-redux';

const Counter = () => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme === 'light' ? 'light_theme' : 'dark_theme'}>
      <CounterValue />
      <CounterButtons />
    </div>
  );
}

export default Counter;