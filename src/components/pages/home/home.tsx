"use client";

import React, { useCallback, useEffect, useState } from "react";

import RepoCard from "@/components/repo-card/repo-card";
import Text from "@/components/text/text";
import Pagination from "@/components/pagination/pagination";
import { useRepository } from "@/services/repository";
import { Repository } from "@/types/repository";
import SpinnerGif from "@/assets/icons/spinner.gif";
import * as Styles from "./home.style";
import Image from "next/image";

type Props = {};

export default function HomePage({}: Props) {
  const {
    repositories,
    selectedRepositories,
    setRepository,
    fetchRepositories,
    loading,
  } = useRepository();
  const [page, setPage] = useState(1);

  const handleCheck = useCallback(
    (item: Repository) => {
      const existingRepository = selectedRepositories?.find(
        (e) => e.id === item.id,
      );
      const newSelected = existingRepository
        ? selectedRepositories.filter((e) => e.id !== item.id)
        : [...selectedRepositories, item];
      setRepository(newSelected);
    },
    [selectedRepositories, setRepository],
  );

  const handleChangePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  useEffect(() => {
    fetchRepositories({ page });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <Styles.Wrapper>
      <Styles.Inner>
        <Styles.Header>
          <Text as={"h1"}>Browse Repository</Text>
          <div></div>
        </Styles.Header>
        {!loading && Array.isArray(repositories) ? (
          <>
            <Pagination page={page} onPageChange={handleChangePage} />
            <Styles.RepoList>
              {repositories?.map((item) => (
                <RepoCard
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  image={item.owner.avatar_url}
                  selected={
                    !!selectedRepositories.find((e) => e.id === item.id)
                  }
                  onSelected={() => handleCheck(item)}
                />
              ))}
            </Styles.RepoList>
            <Pagination page={page} onPageChange={handleChangePage} />
          </>
        ) : (
          <>
            {loading ? (
              <Image src={SpinnerGif} alt="" />
            ) : (
              <Text as={"p"}>
                {(repositories as unknown as { message: string })?.message ??
                  JSON.stringify(repositories)}
              </Text>
            )}
          </>
        )}
      </Styles.Inner>
    </Styles.Wrapper>
  );
}
