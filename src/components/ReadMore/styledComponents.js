// Style your elements here
import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Header = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 2em;
  font-weight: 900;
  text-align: center;
`
export const Description = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`
export const Image = styled.img`
  height: 40%;
  width: 40%;
`
export const ReadDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  width: 40%;
`
export const ReadBtn = styled.button`
  height: 40px;
  width: 90px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  background-color: #1f81ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
