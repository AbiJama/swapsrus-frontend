import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [userCred, setUserCred] = useState(null);
  const [loading, setLoading] = useState(false);

  const value = React.useMemo(() => [userCred, setUserCred], [userCred]);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
