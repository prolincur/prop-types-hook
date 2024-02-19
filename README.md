# prop-types-hook
Provide a mechanism to validate the `props` of React hook(s) using [prop-types](https://www.npmjs.com/package/prop-types).

#### Install

`yarn add prop-types prop-types-hook`

#### Usage

```javascript

import { withPropsValidation } from 'prop-types-hook'

const useMyHook = (props) => {
  const { oneProp, twoProp } = props
  
  const result = React.useMemo(() => {
    return {
      ...oneProp,
      ...twoProp,
    }
  }, [])

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

// Resulting hook with validation
const useHook = withPropsValidation(useMyHook)
```

### Author

[Prolincur Technologies](https://prolincur.com)