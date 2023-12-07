import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/services/api-client";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformList = ({ onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [value, setValue] = useState("");
  const handleValue = (value: string) => {
    setValue(value);

    const platform = data?.results.find((platform) => platform.name === value);
    if (platform) {
      onSelectPlatform(platform);
    }
  };
  if (error) return null;
  return (
    <Select value={value} onValueChange={handleValue}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        {data?.results.map((platform) => (
          <SelectItem value={platform.name} key={platform.id}>
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformList;
