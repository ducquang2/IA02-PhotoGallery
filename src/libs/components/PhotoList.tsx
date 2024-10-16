import { Link } from "react-router-dom";
import { splitToSmallChunks } from "../utils/helpers";
import { PhotoType } from "../utils/types";

export { PhotoList };

type PhotoListProps = {
  images: Array<PhotoType>;
}

function PhotoList(props: PhotoListProps) {
  const { images } = props

  const gridImages = splitToSmallChunks([...images], 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {gridImages.map((collumn, index) => (
        <div className="grid gap-4" key={index}>
          {collumn.map((image) => (
            <div key={image.id}>
              <Link to={`/photos/${image.id}`} className="text-blue-500">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={image.urls.regular}
                  alt={image.alt_description}
                />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

