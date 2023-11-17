import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const sortingOptions = [
  { name: "Relevance", value: "relevance" },
  { name: "Date added", value: "-added" },
  { name: "Popularity", value: "-metacritic" },
  { name: "Rating", value: "-rating" },
  { name: "Name", value: "name" },
  { name: "Released", value: "-released" },
];

interface Props {
  onSelectSort: (sort: string) => void;
}

const SortSelctor = ({ onSelectSort }: Props) => {
  const [value, setValue] = useState("");

  const handleValue = (value: string) => {
    setValue(value);
    if (value === "relevance") return;
    onSelectSort(value);
  };
  return (
    <Select value={value} onValueChange={handleValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        {sortingOptions.map((option) => (
          <SelectItem value={option.value} key={option.value}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelctor;
