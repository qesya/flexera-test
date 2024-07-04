'use client';

import React, { useCallback, useEffect, useState } from 'react';

import RepoCard from '@/components/repo-card/repo-card';
import Text from '@/components/text/text';
import Pagination from '@/components/pagination/pagination';
import { useRepository } from '@/services/repository';
import { Repository } from '@/types/repository';
import SpinnerGif from '@/assets/icons/spinner.gif';
import * as Styles from './home.style';
import Image from 'next/image';

type Props = {};

export default function HomePage({}: Props) {
	const { repositories, selectedRepository, setRepository, fetchRepositories, loading } =
		useRepository();
	const [page, setPage] = useState(1);

	const handleCheck = useCallback(
		(item: Repository) => {
			let newSelected = selectedRepository;
			if (selectedRepository?.find((e) => e.id === item.id)) {
				newSelected = selectedRepository.filter((e) => e.id !== item.id);
			} else {
				newSelected = [...selectedRepository, item];
			}

			setRepository(newSelected);
		},
		[selectedRepository, setRepository]
	);

	const handleChangePage = useCallback((page: number) => {
		setPage(page);
		fetchRepositories(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		fetchRepositories(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Styles.Wrapper>
			<Styles.Inner>
				<Styles.Header>
					<Text as={'h1'}>Browse Repository</Text>
					<div></div>
				</Styles.Header>
				{loading && <Image src={SpinnerGif} alt='' />}
				{!loading && (
					<>
						<Styles.RepoList>
							{repositories?.map((item) => (
								<RepoCard
									key={item.id}
									title={item.name}
									description={item.description}
									image={item.owner.avatar_url}
									selected={!!selectedRepository.find((e) => e.id === item.id)}
									onSelected={() => handleCheck(item)}
								/>
							))}
						</Styles.RepoList>
						<Pagination page={page} onPageChange={handleChangePage} />
					</>
				)}
			</Styles.Inner>
		</Styles.Wrapper>
	);
}
