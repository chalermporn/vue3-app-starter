import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'n/prefer-global/process': 'off',
    'node/prefer-global/process': 'off',
  },
})
