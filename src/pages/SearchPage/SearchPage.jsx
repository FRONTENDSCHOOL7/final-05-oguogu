import { ScrollContainer } from 'components/common/container/Container.style';
import { Container, SerachInput } from 'components/common/header/Header.style';
import Button from 'components/common/button/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useDebounce from 'hook/useDebounce';
import { userSearchAPI } from 'api/search.api';
import SearchList from 'components/search/SearchList';
import { EmptyBox, EmptyImg, EmptyText } from 'components/common/empty/EmptyMessage.style';
import { styled } from 'styled-components';
import NavBar from 'components/common/navbar/NavBar';

export default function SearchPage() {
  const [viewSearchList, setViewSearchList] = useState(null);
  const [searchResultList, setSearchResultList] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [view, setView] = useState(1);
  const { debouncedValue: searchKeyword, cancel } = useDebounce(keyword, 500);
  const navigate = useNavigate();
  const toBack = () => {
    navigate(-1);
  };

  const handleChangeInput = (e) => {
    setKeyword(e.target.value);
    setView(1);
    if (e.target.value === '') {
      setSearchResultList(null);
      setViewSearchList(null);
      // 검색어를 지웠을때 디바운스 초기화
    }
  };

  const handleMoreSearch = () => {
    setView((prev) => prev + 1);
  };

  //유저검색
  const userSearch = () => {
    userSearchAPI(searchKeyword)
      .then((res) => {
        setSearchResultList(res);
      })
      .catch((err) => {
        alert('유저검색을 실패했습니다.');
      });
  };

  useEffect(() => {
    if (searchKeyword) {
      userSearch();
    } else {
      setSearchResultList(null);
    }
  }, [searchKeyword]);

  useEffect(() => {
    if (searchResultList) {
      const slicelist = searchResultList.slice(0, view * 12);
      setViewSearchList(slicelist);
    }
  }, [view, searchResultList]);

  return (
    <>
      <Container $justify="space-between">
        <Button vari="back" onClick={toBack} />
        <SerachInput placeholder="계정 검색" value={keyword} onChange={handleChangeInput} />
      </Container>
      <ScrollContainer $bg>
        {viewSearchList !== null ? (
          <>
            <SearchList viewSearchList={viewSearchList} searchKeyword={searchKeyword} />
            {searchResultList.length > 12 && <MoreBtn onClick={handleMoreSearch}>검색결과 더보기</MoreBtn>}
          </>
        ) : (
          <EmptyBox>
            <EmptyImg />
            <EmptyText>계정을 검색해보세요</EmptyText>
          </EmptyBox>
        )}
      </ScrollContainer>
      <NavBar />
    </>
  );
}

const MoreBtn = styled.button`
  color: var(--gray-01);
  font-size: 14px;
  margin-bottom: 30px;
`;
