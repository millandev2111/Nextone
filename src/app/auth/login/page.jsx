
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import  useAuth  from '@/app/hooks/useAuth';
import Google from '../../../assets/icons/google';

function LoginForm() {
  const { loginUser } = useAuth(); // Destructurar el método `login` del hook
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      await loginUser(email, password);
      const redirectTo = localStorage.getItem('redirectPath') || '/';
      router.push(redirectTo);
      localStorage.removeItem('redirectPath');
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-28 mb-28">
      <form
        className="bg-white flex flex-col w-[410px] h-[450px] rounded-3xl p-5 shadow-md shadow-black"
        onSubmit={submitHandler}
      >
        <h1 className="text-black text-2xl font-bold flex justify-center pb-4">
          Ya nos conocemos, ¿cierto?
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-gray-600 text-pretty">
            Inicia sesión pa' que sigas disfrutando de la movida musical en Cali. ¿Aún no tienes cuenta?{' '}
            <Link className="text-violet-600 hover:underline" href="/auth/register">
              Regístrate
            </Link>
          </p>
          <input
            className="bg-white text-black border-black border-2 px-2 py-1"
            type="email"
            id="email"
            placeholder="Correo electrónico"
            required
          />
          <input
            className="bg-white text-black border-black border-2 px-2 py-1"
            type="password"
            id="password"
            placeholder="Contraseña"
            required
          />
          <button
            className="text-violet-600 font-bold border-2 p-1 border-violet-600 hover:bg-violet-600 hover:text-white transition"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando...' : 'Continuar'}
          </button>
          <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/auth/reset-password">
            ¿Has olvidado tu contraseña?
          </Link>
          {error && <p className="text-red-500">{error}</p>}
          <div className="w-full p-x-5 border border-b-black"></div>
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

export default LoginForm;
