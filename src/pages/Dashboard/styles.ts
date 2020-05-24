import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  /* > a RIMEIRA imagem, o 1º elemento */
  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  margin-left: 80px;
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
  }

  strong {
    color: #ff9000;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;
    display: flex;
    align-items: center;
    font-weight: 500;
  }

  span {
    display: flex;
    align-items: center;
  }

  span + span::before {
    content: '';
    width: 1px;
    height: 12px;
    background: #ff9000;
    margin: 0 8px;
  }
  /* span + span {
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid #ff9000;
  } */
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    /* relative para colocar a border no :before */
    position: relative;

    &::before {
      position: absolute;
      width: 1px;
      height: 80%;
      left: 0;
      top: 10%;
      background: #ff9000;
      content: '';
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #999591;
    }

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;