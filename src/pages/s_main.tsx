import Link from 'next/link';

import styled from 'styled-components';
import Nav from '../components/Nav';
import List from '../components/List';
import Grid from '../components/Grid';

import axios from 'axios';

interface IData {
  id: number;
  imageUrl: string;
  type: string;
  seasons: string[];
  name: string;
  comment: string;
  createdDate: string;
  modifiedDate: string;
}

// spring에 들어가면 api 요청 후 데이터 들어옴
const S_Main = () => {
  axios
    .get('https://skhufp.ddns.net/api/clothes?seasons=spring', {
      headers: {
        Authorization:
          'Bearer ' +
          (typeof window !== 'undefined'
            ? localStorage.getItem('accessToken')
            : ''),
      },
    })
    .then((res) => {
      console.log(res.data);
      // setData(res.data.data);
    })
    .catch((res) => {
      console.log(res.data);
    });

  return (
    <>
      <StyledS>봄</StyledS>
      <Nav />
      <Container>
        <List></List>
        <Grid />
        <Link href="/m_add">
          <StyledAdd>➕</StyledAdd>
        </Link>
      </Container>
    </>
  );
};

export default S_Main;

const StyledS = styled.span`
  float: right;
  margin-top: 1rem;
  margin-right: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAdd = styled.button`
  width: 4rem;
  height: 4rem;

  border: none;

  background-color: #d0bcf2;
  font-size: 1.5rem;
  cursor: pointer;
`;
