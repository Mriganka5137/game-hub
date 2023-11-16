import { Skeleton } from "../ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Skeleton className="w-[285px] h-[300px] rounded-lg animate-pulse bg-slate-300 dark:bg-slate-800 max-sm:w-full max-sm:h-[500px]">
      <Skeleton className="w-full h-[190px] animate-pulse bg-slate-200 dark:bg-slate-700" />
      <div className="flex flex-col items-center justify-center p-3 mt-2">
        <Skeleton className="w-[240px] h-8  animate-pulse bg-slate-200 dark:bg-slate-700" />
        <div className="flex justify-between w-full px-3">
          <Skeleton className="w-24 h-5 mt-5 animate-pulse bg-slate-200 dark:bg-slate-700" />
          <Skeleton className="w-10 h-5 mt-5 animate-pulse bg-slate-200 dark:bg-slate-700" />
        </div>
      </div>
    </Skeleton>
  );
};

export default GameCardSkeleton;
