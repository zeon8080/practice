import BoardListsUI from "./BoardLists.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_LISTS } from "./BoardLists.queries";

export default function BoardLists() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_LISTS);

  const onLoadMore = () => {
    if (data === undefined) return;
    fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const onClickToDetail = (event) => {
    router.push(`/boardDetail/${event.currentTarget.id}`);
  };

  return (
    <BoardListsUI
      data={data}
      onClickToDetail={onClickToDetail}
      onLoadMore={onLoadMore}
    />
  );
}
