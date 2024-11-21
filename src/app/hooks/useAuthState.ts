// ¿que hace?
// se centra en monitorear el estado actual de autenticación del usuario y gestionar su cierre de sesión, lo cual lo hace ideal para componentes que solo necesitan conocer si un usuario está autenticado.

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut, User } from 'firebase/auth';
import app from '../services/firebase/firebaseConfig';

const auth = getAuth(app);

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signOut = () => {
    firebaseSignOut(auth);
  };

  return { user, isClient, signOut };
}
