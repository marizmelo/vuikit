// icon-git-fork
export default {
  functional: true,
  props: {
    ratio: {
      type: [Number, String],
      default: 1
    }
  },
  render: function (h, { props, data }) {
    const { ratio } = props
    let {
      width = 20,
      height = 20,
      viewBox = '0 0 20 20'
    } = (data.attrs || {})

    if (ratio !== 1) {
      width *= ratio
      height *= ratio
    }

    data.attrs = {
      version: '1.1',
      meta: 'vk-icons-git-fork',
      width,
      height,
      viewBox,
      ratio
    }

    data.domProps = {
      innerHTML: '<circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79" /><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79" /><ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79" /><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57" />'
    }

    return h('svg', data)
  }
}