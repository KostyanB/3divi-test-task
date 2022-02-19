import styled from 'styled-components';
import env from '../../env.json';

const { transitionDuration } = env;

const Item = styled.div`
  grid-column: 1;
  grid-row: ${props => props.row};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5px;

  & > span {
    opacity: ${props => (props.mount ? 1 : 0)};
    transition: opacity ${transitionDuration};
  }
`;
export default Item;
