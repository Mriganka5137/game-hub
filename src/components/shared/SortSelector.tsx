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
  { name: "Release Date", value: "release-date" },
  { name: "Popularity", value: "popularity" },
  { name: "Rating", value: "rating" },
  { name: "Name", value: "name" },
];

const SortSelctor = () => {
  const [value, setValue] = useState("");
  //   const handleValue = (value: string) => {
  //     setValue(value);
  //     const platform = data?.find((platform) => platform.name === value);
  //     if (platform) {
  //       onSelectPlatform(platform);
  //     }
  //   };
  return (
    <Select value={value} onValueChange={setValue}>
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
