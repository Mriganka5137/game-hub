import useGenres, { Genre } from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import getCroppedImageUrl from "@/utils/image-url";
import { Link } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data } = useGenres();
  // console.log(data);
  return (
    <ul>
      {data?.results.map((genre) => (
        <li
          className={cn(
            " mb-5 cursor-pointer font-poppins p-1 hover:bg-secondary/30",
            selectedGenre?.id === genre.id && "bg-secondary/60"
          )}
          key={genre.id}
        >
          <Link
            className={cn(
              "text-xl hover:underline line-clamp-1 hover:text-purple-400 flex items-center gap-5",
              selectedGenre?.id === genre.id && "text-purple-500"
            )}
            onClick={() => {
              if (selectedGenre?.id === genre.id) {
                return onSelectedGenre(null);
              }
              onSelectedGenre(genre);
            }}
          >
            <img
              src={getCroppedImageUrl(genre.image_background)}
              width={50}
              height={50}
              className="rounded-lg "
            />
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
