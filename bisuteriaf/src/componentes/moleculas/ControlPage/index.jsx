import { BlockPage, CountOfPage, InputChoosePage } from './styles'

import ButtonPage from '../../atomos/ButtonPage/index'

const ControlPage = ({ onNext, onBefore, lastPage, page, onChange }) => {
  const onChangeDefault = () => { }
  return (
    <>
      <BlockPage>
        <ButtonPage
          icon={'>'}
          style={{ borderRadius: '0px 5px 5px 0px' }}
          onClick={(e) => {
            onNext()
          }}
        />
        <ButtonPage
          icon={'<'}
          style={{
            borderRadius: '5px 0px 0px 5px',
            borderRight: '1px solid var(--verde)',
          }}
          onClick={(e) => {
            onBefore()
          }}
        />
        <CountOfPage>of {lastPage}</CountOfPage>
        <InputChoosePage
          type="text"
          name="page-now"
          id="page-now"
          value={page}
          onChange={onChange || onChangeDefault}
        />
      </BlockPage>
    </>
  )
}

export default ControlPage
