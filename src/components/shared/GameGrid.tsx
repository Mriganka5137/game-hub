import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import { GameQuery } from "@/App";
import React from "react";
import { Button } from "../ui/button";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading: loading,
    fetchNextPage,
    isFetching,
  } = useGames(gameQuery);
  const skeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {loading ? (
        <div className="flex flex-wrap justify-center px-5 gap-9">
          {skeletonArr.map((i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <div className="flex flex-col justify-start">
          <div className="flex flex-wrap justify-center px-5 gap-9">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-center mt-10 ">
            <Button
              className=" w-fit"
              variant="default"
              onClick={() => fetchNextPage()}
            >
              {isFetching ? "Loading..." : "Load More"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default GameGrid;
