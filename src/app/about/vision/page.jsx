import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import React from 'react';

const getTime = async () => {
  const res = await fetch('http://localhost:3000/time', {
    cache: 'no-store', // give data every sec
  });
  // const res = await fetch('http://localhost:3000/time', {
  //   next: { revalidate: 5 }, // revalidate every 5 seconds
  // });
  const data = await res.json();
  return data.currentTime;
};

const page = async () => {
  const currentTime = getTime();
  const session = await getServerSession(authOptions);
  console.log({ session });
  return (
    <div className="h-screen">
      <h4>Vision</h4>
      <h4 className="text-red-400 text-2xl">Local Time now : {currentTime}</h4>
    </div>
  );
};

export default page;
