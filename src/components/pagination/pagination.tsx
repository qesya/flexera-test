import React, { useState } from "react";
import * as Styles from "./pagination.styles";

type Props = {
  page: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ page, onPageChange }: Props) {
  return (
    <Styles.PaginationContainer>
      <Styles.Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </Styles.Button>
      <Styles.PageNumber>{page}</Styles.PageNumber>
      <Styles.Button onClick={() => onPageChange(page + 1)}>Next</Styles.Button>
    </Styles.PaginationContainer>
  );
}
