import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li className="text-xl font-poppins" key={genre.id}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
