//import React, { useState }from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../componentes/atomos/Image';
import Button from '../../componentes/atomos/Button';
import { Text } from '../../componentes/atomos/Text';
import IMG from '../../constante';
import ControlPage from '../../componentes/moleculas/ControlPage';
import SelectMultiple from '../../componentes/atomos/Formulario/Select';
const page = 1
const lastPage = 2
const optiones = [
    {"value":"moda", label: "Moda"},
    {"value":"indigena", label: "Indigena"},
    {"value":"artesanal", label: "Artesanal"}
]

const Item = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 1.5em;
    gap: 0.5em;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const ContainerMain = styled.section`
    width: 100%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2em;
    overflow-y: scroll;
   // padding: 2em;
`;

export const ContainerPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    /* margin: 10px; */
    //border: 1px red solid;
`;
const Main = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    align-items: center;
    justify-items:center;
`;

export const ContainerItem = styled.section`
    height: 100%;
    width: 100% ;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;
export const ItemSelect = styled.section`
    width: 30%;
    display: flex;
    flex-direction:row;
`;

const Index = () => {
    const [oneSelect, setOneSelect] = useState(null);

    return (
        <Main>
            <ContainerItem>
                <p>Home - Bisuteria - categoria </p>
                <ItemSelect>
                    <SelectMultiple
                        arrayOptions={optiones}
                        arrayDefaultValue={[]}
                        setArraySelect={setOneSelect}
                        isMulti={false}
                    />
                </ItemSelect>
            </ContainerItem>
            <ContainerMain>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map((item, index) => (
                        <Item>
                            <Image
                                src={IMG.LOGO}
                                styleImagen={{ heigth: "50%", width: "50%" }}
                                alt={'productos'}
                            //onClick={onClick}
                            />
                            <Text
                                text={"Producto#1"}
                                //style={style}
                                color={'var(--azul)'}
                                fz={"1.2em"}
                            //weight={weight}
                            />
                            <Text
                                text={"$5.00"}
                                //style={style}
                                //color={color}
                                fz={"0.9em"}
                            //weight={weight}
                            />
                            <Button
                                type={"submit"}
                                //width,
                                //bg,
                                //onClick,
                                value={"Anadir al Carrito"}
                            //style,
                            //color,
                            //hover,
                            />
                        </Item>
                    ))
                }
            </ContainerMain>
            <ContainerPage>

                <ControlPage
                    page={page}
                    lastPage={lastPage}
                    onNext={() => {
                        let next = page < lastPage ? true : false
                        //setPage(parseInt(page) + 1) : undefined;// setPage(lastPage);
                        /// setPaginar(next);
                    }}
                    onBefore={() => {
                        let before = page > 1 ? true : false
                        //setPage(parseInt(page) - 1) : undefined;// setPage(1);
                        //setPaginar(before);
                    }}
                />
            </ContainerPage>
        </Main>
    );
};

export default Index;