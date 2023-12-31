import { useRouter } from 'next/router';
import { FaShareSquare } from 'react-icons/fa';

const ShareButton = () => {
  const router = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}${
    router.asPath
  }`;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: currentUrl,
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API not supported on this browser');
    }
  };

  return (
    <button
      onClick={handleShare}
      className='bg-brandcolor px-4 p-2 text-white font-bold flex gap-2 items-center rounded-md'
    >
      <FaShareSquare  size={20}/> 
      <p>Share</p>
    </button>
  );
};

export default ShareButton;
