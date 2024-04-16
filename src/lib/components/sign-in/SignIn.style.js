import styled from "styled-components";
// import BackgroundImage from '../../assets/svg/bgloginportalclientgrey.svg';
import { h4Styles, h6Styles, pStyles } from "../../utils/resuable-css";

export const BgLogin = styled.div`
  background-size: cover;
  font-weight: 400 !important;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  margin: 0 auto;
  padding: 2em 0;
`;

export const LoginBox = styled.div`
  background: #fff;
  margin: 0 auto;
  width: 452px;
  border-radius: 5px;
  box-shadow: 0 0 24px 5px #d1d1d1;
  @media (max-width: 500px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 310px;
  }
  @media (max-width: 330px) {
    width: 290px;
  }
`;

export const LoginForm = styled.div`
  padding: 40px 30px;
`;

export const Forgot = styled.div`
  text-decoration: underline;
  font-size: ${(props) => props.theme.default?.p};
  ${(props) => pStyles(props.theme.resolutions)};
  color: #ff7300;
  a {
    color: #ff7300;
  }
`;

export const Logo = styled.p`
  margin: 0 0 10px 2em;
  text-align: center;
  width: 380px;
  @media (max-width: 425px) {
    width: 290px;
  }
  @media (max-width: 375px) {
    width: 250px;
  }
  @media (max-width: 375px) {
    width: 230px;
  }
`;

export const Heading = styled.h4`
  /* font-size: ${(props) => props.theme.default?.h4}; */
  font-size: 26px;
  ${(props) => h4Styles(props.theme.resolutions)};
  font-weight: bolder;
  color: black;
  text-align: center;
  padding-bottom: 20px;
  margin: 0 3rem;
  @media (max-width: 425px) {
    padding-bottom: 5px;
  }
  @media (max-width: 500px) {
    margin: 0 2rem;
  }
  @media (max-width: 330px) {
    margin: 0 1rem;
  }
`;

export const SubmitForm = styled.div`
  margin-top: 20px;
  label {
    padding-top: 2px;
    text-align: 20px;
    color: black;
    cursor: pointer;
  }
`;

export const LoginButton = styled.p`
  margin-top: 18px;
`;

export const Button = styled.button`
  background: #ff7300;
  height: 3.5em;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 11px 0px;
  width: 392px;
  position: relative;
  cursor: pointer;
  outline: none;
  text-align: center;
  @media (max-width: 500px) {
    width: 290px;
  }
  @media (max-width: 384px) {
    width: 250px;
  }
  @media (max-width: 320px) {
    width: 230px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

export const SignUp = styled.div`
  font-size: ${(props) => props.theme.default?.h6};
  ${(props) => h6Styles(props.theme.resolutions)};
  font-weight: bold;
  color: #ff7300;
  text-decoration: underline;
  a {
    color: #ff7300;
  }
`;
