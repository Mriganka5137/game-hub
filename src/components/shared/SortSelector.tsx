import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import useGameQueryStore from "@/store";

const sortingOptions = [
  { name: "Relevance", value: "relevance" },
  { name: "Date added", value: "-added" },
  { name: "Popularity", value: "-metacritic" },
  { name: "Rating", value: "-rating" },
  { name: "Name", value: "name" },
  { name: "Released", value: "-released" },
];

const SortSelctor = () => {
  const [value, setValue] = useState("");
  const handleSort = useGameQueryStore((s) => s.handleSort);

  const handleValue = (value: string) => {
    setValue(value);
    if (value === "relevance") return;
    handleSort(value);
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
