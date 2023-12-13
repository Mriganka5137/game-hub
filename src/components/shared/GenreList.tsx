import useGenres from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import useGameQueryStore from "@/store";
import getCroppedImageUrl from "@/utils/image-url";
import { Link } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  // console.log(data);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const handleSelctedGenre = useGameQueryStore((s) => s.handleSelctedGenre);

  return (
    <ul>
      {data?.results.map((genre) => (
        <li
          className={cn(
            " mb-5 cursor-pointer font-poppins p-1 hover:bg-secondary/30",
            selectedGenreId === genre.id && "bg-secondary/60"
          )}
          key={genre.id}
        >
          <Link
            className={cn(
              "text-xl hover:underline line-clamp-1 hover:text-purple-400 flex items-center gap-5",
              selectedGenreId === genre.id && "text-purple-500"
            )}
            onClick={() => {
              if (selectedGenreId === genre.id) {
                return handleSelctedGenre(null);
              }
              handleSelctedGenre(genre);
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
