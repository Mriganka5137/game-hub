import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image-url";
import { Link } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li
          className="flex items-center gap-5 mb-5 cursor-pointer font-poppins"
          key={genre.id}
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            width={50}
            height={50}
            className="rounded-lg "
          />
          <Link
            className="text-xl hover:underline line-clamp-1"
            onClick={() => onSelectedGenre(genre)}
          >
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
