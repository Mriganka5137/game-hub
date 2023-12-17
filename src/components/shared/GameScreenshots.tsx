import useScreenshots from "@/hooks/useScreenshots";
import { Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-2">
      {data?.results.map((screenshot) => (
        <Image src={screenshot.image} key={screenshot.id} />
      ))}
    </div>
  );
};

export default GameScreenshots;
