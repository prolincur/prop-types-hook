/*
 * Copyright (c) 2020-24 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'

// Wrapper
const withPropsValidation =
  (hook) =>
  (props = {}) => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const { propTypes = {}, defaultProps = {}, name = '' } = hook

    React.useLayoutEffect(() => {
      // Validate the props
      if (propTypes) PropTypes.checkPropTypes(propTypes, props, 'prop', name)
    }, [name, propTypes, props])

    const finalProps = React.useMemo(() => {
      if (!defaultProps) return props
      // Apply default props
      return {
        ...defaultProps,
        ...props,
      }
    }, [defaultProps, props])

    return hook(finalProps)
  }

export { withPropsValidation }
