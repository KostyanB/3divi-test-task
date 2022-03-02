import React from 'react';
import Container from '../Styled/Container';
import { Title1 } from '../Styled/Titles';

const Header = () => {
  const mainTitle =
    'Диаграмма времени посещений за неделю с разбивкой по возрасту пользователя и фильтрацией по ID девайса';

  return (
    <Container>
      <Title1 text={mainTitle} />
    </Container>
  );
};
export default Header;
