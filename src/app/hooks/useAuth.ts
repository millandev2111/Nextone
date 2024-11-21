// ¿para que sirve? tiene un enfoque más general y se centra en acciones relacionadas con la autenticación (como iniciar sesión y registrarse).

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from "../services/firebase/firebaseConfig";

const auth = getAuth(app);
const firestore = getFirestore(app);

const useAuth = () => {
  const registerUser = async (email: string, password: string, rol: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado:', userCredential.user);

      // Guardar la información del usuario en Firestore
      const docRef = doc(firestore, `users/${userCredential.user.uid}`);
      await setDoc(docRef, { correo: email, user_type: rol });

      return userCredential.user; // Devuelve el usuario registrado
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error al registrar el usuario:', err.message);
      } else {
        console.error('Error desconocido:', err);
      }
      throw err; // Lanza el error para manejarlo en el componente
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario autenticado:', userCredential.user);
      return userCredential.user; // Devuelve el usuario autenticado
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error al iniciar sesión:', err.message);
      } else {
        console.error('Error desconocido:', err);
      }
      throw err; // Lanza el error para manejarlo en el componente
    }
  };

  return { registerUser, loginUser };
};

export default useAuth