import { ElRadio } from '../elements'

import { get } from 'vuikit/src/_core/utils/misc'
import { assign } from 'vuikit/src/_core/utils/lang'
import { mergeData } from 'vuikit/src/_core/utils/vue'

export default assign({}, ElRadio, {
  name: 'VkFormRadio',
  props: {
    label: String
  },
  render (h, { props, data, _q: looseEqual }) {
    const { label } = props
    const { attrs = {} } = data

    const def = mergeData({}, data, {
      domProps: {
        checked: attrs.checked
      }
    })

    // workaround for v-model/@input support
    if (get(def, 'on.input')) {
      const callback = def.on.input

      // override input
      def.on.input = e => {
        callback(e.target.value)
      }

      if (def.model) {
        def.domProps.checked = looseEqual(def.model.value, attrs.value)
      }
    }

    const radio = h(ElRadio, def)

    if (label) {
      return h('label', [
        radio,
        ` ${label}`
      ])
    }

    return radio
  }
})