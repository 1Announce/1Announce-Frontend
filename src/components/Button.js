import Button from '@mui/material/Button'

const Buttons = ({color, text, onClick}) => {

  return (
    <Button
      onClick={onClick}
      style={{backgroundColor: color, color:'white'}}
      className='btn'
      >
        {text}
    </Button>
  )
}

export default Buttons
