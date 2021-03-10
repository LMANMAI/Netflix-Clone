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
        login: setUser,
        logout: () =>setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
