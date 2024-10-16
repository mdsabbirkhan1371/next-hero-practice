import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
  return (
    <div className=" h-screen">
      <div className="space-x-5">
        <Link href={'/about/mission'}>Mission</Link>
        <Link href={'/about/vision'}>Vision</Link>
      </div>
    </div>
  );
};

export default AboutContent;
