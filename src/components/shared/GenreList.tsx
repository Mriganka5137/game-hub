import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image-url";

const GenreList = () => {
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
          <span className="text-xl hover:underline line-clamp-1">
            {genre.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
