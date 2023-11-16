import useGenres from "@/hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li className="text-xl font-poppins" key={genre.id}>
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
