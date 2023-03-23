import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
//atomos 
import Image from '../../atomos/Image';
import { Container, ContentLogo, ContentNav } from './styles';
import { items } from './items';
import IMG from '../../../constante';


const Sidebar = ({
  visualMenu,
  setvisualMenu
}) => {
  
  const navigate = useNavigate();
  
  const location = useLocation();

  const [itemsOptions, setItemsOption] = useState(items);

  const showOptionsFC = (index) => {
    if (index >= 0 && index < itemsOptions.length) {
      let newItemOption = itemsOptions.map((item, i) => {
        if (i === index) {
          item.show = true;
        } else {
          item.show = false;
        }
        return item
      })
      setItemsOption(newItemOption);
    }
  }

  const modifyMenuActions = (path) => {
    if (visualMenu) {

      setvisualMenu(!visualMenu);

    };
    navigate(`${path}`)
    return;
  }

  return (
    <Container>
      <ContentLogo >
        <Image
          styleImagen={{ width: '100%', height: '100%' }}
          src={IMG.LOGO} />
      </ContentLogo>

      {itemsOptions.map((item, key) => (
        <div
          key={key}
        >
          <ContentNav
            color={
              item.path === location.pathname.substring(0, 17)
                ? 'rgba(15,195,87,1)'
                : '#bababa'
            }
            background={
              item.path === location.pathname.substring(0, 17) && 'rgba(15,195,87,.3)'
            }
            active={item.path === location.pathname.substring(0, 17)}
            onClick={() => {
              showOptionsFC(key)
            }}
            show={item.show}
            className="content-nav"
          >
            {item.icon}{' '}
            <p style={{ margin: '0px 0px 0px 10px', textAlign: 'center' }}>
              {' '}
              {item.label}{' '}
            </p>
          </ContentNav>
          {item.show ? (
            <div key={key} style={{ height: '100%' }}>
              {item.options.map((option, key) => (
                <ContentNav
                  key={key}
                  color={'#fff'}
                  background={
                    option.path !== location.pathname.substring(0, 17)
                      ? 'rgba(15,195,87,.5)'
                      : 'rgba(15,195,87,1)'
                  }
                  onClick={() => modifyMenuActions(option.path)}
                  show={item.show}
                >
                  {option.pathname}
                </ContentNav>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </Container>
  )
}

export default Sidebar
//location.pathname.substring(0, 17)
