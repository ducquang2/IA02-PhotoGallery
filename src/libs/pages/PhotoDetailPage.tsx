import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getPhoto } from '../api/photo';
import { Loading } from '../components';
import { PhotoType } from '../utils/types';

function PhotoDetail() {
  const { id } = useParams();

  const [photo, setPhoto] = useState<PhotoType>()
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)

    const getPhotoDetail = async () => {
      if (id) {
        const response = await getPhoto({
          photoId: id
        });

        const responePhoto = response.results as PhotoType

        setIsLoading(false);

        setPhoto(responePhoto);
      }
    }

    getPhotoDetail()
  }, [id])


  if (!photo) {
    return <h2>Photo not found</h2>;
  }

  return (
    <>
      <div className="mb-4">
        <Link to="/photos">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Go back to Photos
          </button>
        </Link>
      </div>
      {isLoading ? (
        <Loading containerClass="flex justify-center items-center" size="lg" />
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">{photo.description}</h1>
          <img src={photo.links.html} alt={photo.alt_description} className="mb-4" />
          <p>{photo.description}</p>
          <Link to="/photos" className="text-blue-500">Back to Photos</Link>
        </div>
      )}
    </>
  );
};

export default PhotoDetail;