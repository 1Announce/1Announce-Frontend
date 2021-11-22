import Buttons from './Button'

const Cards = ({title, onAdd, showAdd}) => {
  return(
    <header className='header'>
      <h1>{title}</h1>
      <Buttons color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

export default Cards
