import { useEffect, useState } from 'react';

import { searchPhoto } from '../api/photo';
import { Loading, PhotoList, SearchBar } from '../components';
import { PhotoType } from '../utils/types';

function PhotoListPage() {
  const [query, setQuery] = useState("")
  const [imagesList, setImagesList] = useState<Array<Array<PhotoType>>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const onSearchSubmit = async (value: string) => {
    setImagesList([]);
    setPage(1);
    setQuery(value);
  };

  const onSearchInputChange = (value: string) => {
    setImagesList([]);
    setPage(1);
    setQuery(value);
  };

  const handleScroll = () => {
    const touchBottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (touchBottom) {
      setPage((page) => page + 1);
    }
  };

  const renderContent = () => {
    if (!isLoading && query && imagesList.length === 0) {
      return (
        <div className="flex justify-center items-center">
          <p className="text-2xl text-gray-400 ">No results found</p>
        </div>
      );
    }

    if (!query) {
      return (
        <div className="flex justify-center items-center">
          <p className="text-2xl text-gray-400 ">
            Please input to search for images
          </p>
        </div>
      );
    }

    return imagesList.map((images, index) => (
      <PhotoList key={index} images={images} />
    ));
  };

  useEffect(() => {
    setIsLoading(true);

    const getImages = async () => {
      if (!query) return;
      const response = await searchPhoto({
        query,
        page,
      });

      const responePhotos = response.results as Array<PhotoType>

      setIsLoading(false);

      if (response.results.length === 0 || response.total === 0) return;

      setImagesList((prev) => [...prev, [...responePhotos]]);
    };

    const debounce = setTimeout(() => getImages(), 500);
    return () => clearTimeout(debounce);
  }, [query, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen  overflow-hidden p-4">
      <div className="flex flex-col gap-4">
        <SearchBar
          value={query}
          onSubmit={onSearchSubmit}
          onChange={onSearchInputChange}
        />

        <div className="flex-1 flex flex-col gap-4">
          {renderContent()}
          {query && isLoading && (
            <Loading containerClass="flex justify-center items-center" size="lg" />
          )}
        </div>
      </div>
    </div>
  )
}

export default {
  path: '/photos',
  page: PhotoListPage
}