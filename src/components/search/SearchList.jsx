import React from 'react';
import { styled } from 'styled-components';
import { EmptyBox, EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
import SearchCard from './SearchCard';

export default function SearchList({ viewSearchList, searchKeyword }) {
  const searchlist = viewSearchList.map((user) => {
    return <SearchCard key={user._id} username={user.username} accountname={user.accountname} image={user.image} searchKeyword={searchKeyword} />;
  });
  return (
    <Container>
      {viewSearchList.length !== 0 ? (
        searchlist
      ) : (
        <EmptyBox>
          <EmptyImg />
          <EmptyText>검색어와 일치하는 계정이 없어요</EmptyText>
        </EmptyBox>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 16px;
`;
