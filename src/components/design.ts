import styled from 'styled-components'

export const Component = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: start;
  grid-template-columns: repeat(auto-fit, minmax(275px, auto));
`

export const SnakcCard = styled.div`
  width: 100%;
  background-color: #222327;
  border: 1px solid #313237;
  max-width: 275px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`
