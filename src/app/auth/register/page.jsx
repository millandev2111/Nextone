
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import  useAuth  from '@/app/hooks/useAuth'; 
import Google from '../../../assets/icons/google';
import { Checkbox } from '@nextui-org/react';

function RegisterForm() {
  const { registerUser } = useAuth(); // Destructurar el método `registerUser` del hook
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    try {
      setIsLoading(true);
      await registerUser(email, password, rol);
      const redirectTo = localStorage.getItem('redirectPath') || '/';
      router.push(redirectTo);
      localStorage.removeItem('redirectPath');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-28 mb-28">
      <form
        className="bg-white flex flex-col w-[420px] h-[550px] rounded-3xl p-5 shadow-md shadow-black"
        onSubmit={submitHandler}
      >
        <h1 className="text-black text-2xl font-bold flex justify-center pb-4">Súmate al parche</h1>
        <div className="flex flex-col gap-4">
          <p className="text-gray-600 text-pretty">
            Regístrate y sé parte del combo que está cambiando la música en Cali, ¿Ya tienes una cuenta?{' '}
            <Link className="text-violet-600 hover:underline" href="/auth/login">
              Inicia Sesión
            </Link>
          </p>
          <input
            type="email"
            id="email"
            placeholder="Correo electrónico"
            required
            className="bg-white text-black border-black border-2 px-2 py-1"
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            required
            className="bg-white text-black border-black border-2 px-2 py-1"
          />
          <Checkbox>
            <span className="text-black underline text-sm">He leído y acepto los términos y servicios de Nextone</span>
          </Checkbox>
          <Checkbox>
            <span className="text-black underline text-sm">Mantenerme al día sobre los próximos eventos</span>
          </Checkbox>
          <label className="text-black">
            Selecciona el rol con el que accederas a Nextone
            <select className="border-1 border-black bg-white rounded-full mt-2 px-2" id="rol" required>
              <option value="artist">Artista</option>
              <option value="user">Usuario</option>
            </select>
          </label>
          <button
            className="text-violet-600 font-bold border-2 p-1 border-violet-600 hover:bg-violet-600 hover:text-white transition"
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
          <div className="w-full px-5 border border-b-black"></div>
          <button className="bg-violet-100 text-black font-bold py-2 flex items-center justify-center gap-4 hover:bg-gray-300 transition">
            <span>
              <Google className="size-7" />
            </span>
            Continuar con Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
