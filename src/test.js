import PropTypes from 'prop-types'
import { kea } from 'kea'

export default kea({
  paths: ['help'],
  actions: () => ({
    updateStatus: status => status,
  }),

  reducers: ({ actions }) => ({
    status: [4, PropTypes.number, {
      [actions.updateStatus]: (state, payload) => payload
    }],
  }),

  selectors: ({ selectors }) => ({
    ready: [
      () => [selectors.status],
      (status) => Boolean(status === 4),
      PropTypes.bool,
    ],
  })
})
