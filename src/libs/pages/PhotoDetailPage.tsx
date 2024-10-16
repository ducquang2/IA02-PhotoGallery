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

        const responePhoto = response as PhotoType

        setIsLoading(false);
        setPhoto(responePhoto);
      }
    }

    getPhotoDetail()
  }, [id])

  return (
    <>
      <Link to="/photos">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Go back to Photos
        </button>
      </Link>
      {isLoading ? (
        <Loading containerClass="flex justify-center items-center" size="lg" />
      ) : (
        <>
          {!photo ? (
            <h2>Photo not found</h2>
          ) : (
            <div>
              <h1 className="text-2xl font-bold mb-4">{photo.description}</h1>
              <img
                className="h-auto max-w-full rounded-lg"
                src={photo.urls.regular}
                alt={photo.alt_description}
              />
              <p>{photo.description}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default PhotoDetail;