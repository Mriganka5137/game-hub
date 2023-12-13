import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";

const PlatformList = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const handleSelectedPlatform = useGameQueryStore(
    (s) => s.handleSelectedPlatform
  );

  const handlePlatformChange = (value: string) => {
    const selectedValue = data?.results.find((p) => p.name === value);
    handleSelectedPlatform(selectedValue!);
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
            onClick={() => handleSelectedPlatform(platform)}
          >
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformList;
