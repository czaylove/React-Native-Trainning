import React, { useState } from 'react';
import { Button } from 'react-native';
import { login } from '../services';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const onLoginPress = async ({ id }) => {
    try {
      setLoading(true);
      const result = await login({ user: 'abcd', password: '12345' });
      setLoading(false);
      if (result) {
        alert(`Login ${result.success} `, result.message);
      }
    } catch (error) {
      // exception
    }
  };

  return <Button title="login" disabled={loading} onPress={onLoginPress} />;
};

export default Home;
