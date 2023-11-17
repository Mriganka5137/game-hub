import useGenres, { Genre } from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import getCroppedImageUrl from "@/utils/image-url";
import { Link } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li
          className={cn(
            "flex items-center gap-5 mb-5 cursor-pointer font-poppins p-1",
            selectedGenre?.id === genre.id && "bg-secondary/30"
          )}
          key={genre.id}
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            width={50}
            height={50}
            className="rounded-lg "
          />
          <Link
            className={cn(
              "text-xl hover:underline line-clamp-1 hover:text-purple-400",
              selectedGenre?.id === genre.id && "text-purple-500"
            )}
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
