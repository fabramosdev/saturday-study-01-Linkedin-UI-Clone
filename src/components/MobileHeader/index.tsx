import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://avatars1.githubusercontent.com/u/37095172?s=460&u=64635859978def290c4c6eff09262b9f19118b97&v=4" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;