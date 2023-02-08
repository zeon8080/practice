import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  console.log(data);

  const onClickEdit = () => {
    router.push(`/boardDetail/${router.query.boardId}/edit`);
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    alert("삭제되었습니다.");
    router.push("/boardLists");
  };

  const onClickToLists = async () => {
    await deleteBoard({
      variables: {
        boardId: router.query.boardId,
      },
    });
    router.push("/boardLists");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickToLists={onClickToLists}
      onClickEdit={onClickEdit}
    />
  );
}
