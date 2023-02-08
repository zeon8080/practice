import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function onChangeWriter(e) {
    setWriter(e.target.value);
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeContents(e) {
    setContents(e.target.value);
  }

  const onClickSubmit = async () => {
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        console.log(result);

        router.push(`/boardDetail/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
      alert("등록되었습니다.");
    }
  };

  const onClickEdit = async () => {
    const updateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;

    const result = await updateBoard({
      variables: {
        boardId: router.query.boardId,
        password,
        updateBoardInput,
      },
    });

    router.push(`/boardDetail/${result.data?.updateBoard._id}`);

    if (password !== "") {
      alert("수정되었습니다");
    }
  };

  const onClickCancel = () => {
    router.push("/boardLists");
  };

  const onClickEditCancel = () => {
    router.push(`/boardDetail/${router.query.boardId}`);
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isEdit={props.isEdit}
      data={props.data}
      onClickCancel={onClickCancel}
      onClickEditCancel={onClickEditCancel}
    />
  );
}
