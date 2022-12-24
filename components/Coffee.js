import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

function Coffee() {
  return (
    <Link href="https://www.buymeacoffee.com/Felipo/membership">
      <Image width={200} height={60} src="/red-button.png" alt="Buy me a coffee" />
    </Link>
    


  );
}

export default Coffee;