import React, { createContext, useState } from "react";

// Context(state)

export const AuthContext = createContext({
  user: null,
});

// Provider

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: ({email, password, callback}) => {
          setUser({
              username: 'Lucas',
              email,
              avatarUrl: 'https://images.pexels.com/photos/3027243/pexels-photo-3027243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          });
          callback();
        },
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
