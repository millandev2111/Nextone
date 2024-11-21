import { LogoIcon } from '@/assets/icons/logo';
import { PlayerPerson } from '@/assets/ilustrations/playerPerson';
import { useAuthState } from '@/app/hooks/useAuthState';

function UserView() {
  const { user, isClient, signOut } = useAuthState();

  if (!isClient) {
    return null; // Evita la renderización en el lado del servidor
  }

  return (
    <div className="flex flex-col justify-center items-center w-[1100px] mt-28 mb-16">
      <h1 className="flex items-center text-4xl font-bold">
        Bienvenido a Nextone
        <span className="pt-2"><LogoIcon className="size-12" /></span>
      </h1>
      <p className="text-gray-400 font-semibold text-xl text-center mt-6 w-[530px]">
        Somos un espacio de exploración musical local caleña. Para que te parches a conocer lo nuevo de la industria o ¿por qué no ser parte de ella?
      </p>
      <div className="flex mt-16 gap-20">
        <p className="text-gray-400 font-semibold text-xl text-justify w-80">
          La voz de los nuevos talentos musicales en Cali. Nuestra plataforma está diseñada para conectar a artistas emergentes con la comunidad, brindando un espacio para descubrir, apoyar y disfrutar de la música.
        </p>
        <span><PlayerPerson className="size-60" /></span>
      </div>
      {user && (
        <button onClick={signOut} className="mt-4 p-2 bg-red-500 text-white rounded">
          Cerrar sesión
        </button>
      )}
    </div>
  );
}

export default UserView;
