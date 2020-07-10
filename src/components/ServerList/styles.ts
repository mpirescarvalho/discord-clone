import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  background-color: var(--tertiary);
  max-height: 100vh;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 11px 0;

  list-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  background: var(--quinary);
  height: 2px;
  margin-bottom: 8px;
  width: 32px;
  flex-shrink: 0;
`;
