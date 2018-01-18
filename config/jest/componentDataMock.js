module.exports = [{"name":"Button","description":"Button Component","props":{"children":{"type":{"name":"node"},"required":true,"description":"Child elements for the button component"},"onClick":{"type":{"name":"func"},"required":false,"description":""}},"code":"import React from 'react';\nimport PropTypes from 'prop-types';\n\n\n/**\n * Button Component\n */\nfunction Button({ children, ...props}) {\n    return (\n        <button {...props}>\n            {children}\n        </button>\n    );\n}\n\n\nButton.propTypes = {\n    /**\n     * Child elements for the button component\n     */\n    children: PropTypes.node.isRequired,\n    onClick: PropTypes.func\n}\n\nexport default Button;\n","examples":[{"name":"HelloButton","description":"Default Button component","code":"import React from 'react';\nimport Button from 'bui-react/Button';\n\n/**\n * Default Button component\n */\nexport default () => {\n    return (\n        <Button>Hello!</Button>\n    );\n}\n"}]}]