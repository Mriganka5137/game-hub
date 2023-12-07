import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading: loading,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const gamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
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
        <InfiniteScroll
          dataLength={gamesCount}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner />}
        >
          <div className="flex flex-wrap justify-center px-5 gap-9">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard game={game} key={game.id} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default GameGrid;
