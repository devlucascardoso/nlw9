// COMPONENTES / PROPRIEDADES

interface ButtonProps {
  title: string
}

function Button (props: ButtonProps) {
  return <button>{props.title}</button>
}

function App () {
  return (
    <div>
      <Button title='Send1' />
      <Button title='Send2' />
      <Button title='Send3' />
      <Button title='Hello NLW' />
    </div>
  )
}

export default App
