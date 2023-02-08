import { gql } from "@apollo/client";

export const FETCH_BOARD_LISTS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
