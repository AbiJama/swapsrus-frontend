import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { auth } from "../config/firebase-config";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authuser) => {
      setUser(authuser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login: async (email, password) => {
        try {
          await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
          throw new Error(`Failed to login: ${error.message}`);
        }
      },
      logout: async () => {
        try {
          await auth.signOut();
        } catch (error) {
          throw new Error(`Failed to logout: ${error.message}`);
        }
      },
    }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
