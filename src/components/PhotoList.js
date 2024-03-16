import React from 'react';
import PhotoListItem from './PhotoListItem'; // PhotoListItem bileşenini içe aktarın
import files from '@/files';
// PhotoList bileşeni
function PhotoList() {
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
    >
      {files.map((file) => (
        <PhotoListItem key={file.source} file={file} />
      ))}
    </ul>
  );
}

export default PhotoList;