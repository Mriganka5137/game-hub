import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li className="flex gap-5 mb-5 font-poppins" key={genre.id}>
          <img
            src={getCroppedImageUrl(genre.image_background)}
            width={60}
            height={60}
            className="rounded-lg "
          />
          <span className="text-xl">{genre.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
