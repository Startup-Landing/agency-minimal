import React from 'react';
import Image from 'components/Image';
export default function VideoCard({ imageUrl }) {
  return (
    <div
      style={{
        textAlign: 'center',
        borderRadius: 5,
      }}
    >
      <Image src={imageUrl} alt="video preview" />
    </div>
  );
}
