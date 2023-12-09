import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/services/api-client";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformList = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  const handlePlatformChange = (value: string) => {
    const selectedValue = data?.results.find((p) => p.name === value);
    onSelectPlatform(selectedValue!);
  };

  if (error) return null;
  return (
    <Select
      defaultValue={selectedPlatform?.name}
      onValueChange={handlePlatformChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectedPlatform?.name || "Platforms"} />
      </SelectTrigger>
      <SelectContent>
        {data?.results.map((platform) => (
          <SelectItem
            value={platform.name}
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformList;
