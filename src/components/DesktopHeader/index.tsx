import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedinIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle, 
  CaretDownIcon 
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedinIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src="https://avatars1.githubusercontent.com/u/37095172?s=460&u=64635859978def290c4c6eff09262b9f19118b97&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;