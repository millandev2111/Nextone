'use client';

import UserView from '@/app/pages/userView';
import  useAuth  from '@/app/hooks/useAuth';

export default function Home() {
  const user = useAuth();

  return (
    <>
    <div className="flex justify-center items-center">
      <UserView />
    </div>
    </>
  );
}
