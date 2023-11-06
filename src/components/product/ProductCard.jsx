import React from 'react';
import { Container, InfoBox, Img, ItemName, ItemPrice } from 'components/product/ProductCard.style';
import useModal from 'hook/useModal';
import useConfirm from 'hook/useConfirm';
import { useNavigate } from 'react-router';
import { productDeleteAPI } from 'api/product.api';

export default function ProductCard({ id, img, name, price, link, authaccountname, update }) {
  const navigate = useNavigate();
  //내가 등록한 상품인지 아닌지
  const userInfo = JSON.parse(localStorage.getItem('oguUserInfo'));
  const isMyProduct = authaccountname === userInfo.accountname;

  //price -> 원단위로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price).replace('₩', '');

  //모달
  const { openModal, closeModal } = useModal();
  const { openConfirm } = useConfirm();

  //상품삭제
  const productDelete = () => {
    productDeleteAPI(id)
      .then(() => {
        update();
      })
      .catch((err) => alert('상품삭제를 실패했습니다.'));
  };

  //상품삭제 confirm모달 열기
  const productDeleteConfirm = () => {
    openConfirm({
      content: '상품을 삭제할까요?',
      type: 'delete',
      onClick: productDelete,
    });
  };

  //상품수정 -> 수정페이지로 이동
  const productEdit = () => {
    closeModal();
    navigate(`../../product/${id}/edit`);
  };

  //웹사이트에서 상품보기 -> 링크로 이동(새창)
  const toProductLink = () => {
    closeModal();
    window.open(link, '_blank');
  };

  //상품이름 클릭하면 모달 열기
  const handleClickProduct = () => {
    isMyProduct
      ? openModal({
          type: 'myProduct',
          callback: [productDeleteConfirm, productEdit, toProductLink],
        })
      : openModal({
          type: 'userProduct',
          callback: [toProductLink],
        });
  };

  return (
    <Container>
      <Img src={img} alt="상품 미리보기 이미지" />
      <InfoBox>
        <ItemName onClick={handleClickProduct}>{name}</ItemName>
        <ItemPrice>{formattedPrice}원</ItemPrice>
      </InfoBox>
    </Container>
  );
}
