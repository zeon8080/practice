import * as S from "./BoardLists.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardListsUI(props) {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.onLoadMore}
      hasMore={true}
      useWindow={true}
      // style={{ height: "446px", overflow: "auto" }}
    >
      {props.data?.fetchBoards.map((el) => (
        <S.ListsWrapper key={el._id}>
          <S.TitleSpan
            onClick={props.onClickToDetail}
            style={{ cursor: "pointer" }}
            id={el._id}
          >
            {el.title}
          </S.TitleSpan>
          <S.DateSpan>{el.createdAt.slice(0, 10)}</S.DateSpan>
        </S.ListsWrapper>
      )) ?? <div></div>}
    </InfiniteScroll>
  );
}
