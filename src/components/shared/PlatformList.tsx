import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformList = () => {
  const { data } = usePlatforms();
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        {data?.map((platform) => (
          <SelectItem value={platform.name} key={platform.id}>
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformList;
