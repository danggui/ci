
<template>
<router-link :to="to" @click.native="dispatchMy">
  <slot/>
</router-link>
</template>

<script>
import { isExternal } from '@/utils'

export default {
  props: {
    to: {
      type: String,
      required: true
    }

  },
  methods: {
     dispatchMy(){
       this.$emit("clickItem",this.to);
     }
  }
}
</script>
