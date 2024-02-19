import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom/client'
import './index.css'
import { withPropsValidation } from 'prop-types-hook'

const useMyHook = (props) => {
  const { oneProp, twoProp } = props

  const result = React.useMemo(() => {
    return {
      ...oneProp,
      ...twoProp,
    }
  }, [oneProp, twoProp])

  return result
}

useMyHook.propTypes = {
  oneProp: PropTypes.object,
  twoProp: PropTypes.object,
}

useMyHook.defaultProps = {
  oneProp: { a: 1 },
  twoProp: { b: 2 },
}

const useHook = withPropsValidation(useMyHook)

function App() {
  const values = useHook()

  return (
    <div className="App">
      <p>{JSON.stringify(values)}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
