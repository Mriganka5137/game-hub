import { Badge } from "../ui/badge";
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      className={`${
        score > 75
          ? "text-green-800 bg-green-100"
          : "bg-yellow-100 text-yellow-600"
      }  rounded-sm `}
    >
      {score ? score : "50"}
    </Badge>
  );
};

export default CriticScore;
