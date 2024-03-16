import Image from 'next/image'
import files from './files'
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';

// PhotoListItem bileşeni oluşturup, files array kullanarak görüntülemeye çalışın. Verileri bir prop olarak geçirin ve görüntüleyin
function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  );
}

export default App;