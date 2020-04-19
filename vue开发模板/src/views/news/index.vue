<template>
  <div>
    news
  </div>
</template>

<script>
import mixin from '@/mixins/index.js'
export default {
  name: 'news',
  // mixins: [mixin],
  data () {
    return {

    }
  },
  methods: {
    getList(){
      
    }
  },
  created() {
    this.getList()
  },
  // async created () {
  //   await this.NEWS_LIST()
  //   console.log(this.getNewsResponse)
  // }

}
</script>

<style lang="scss" scoped>
</style>