<template>
  <!-- 二次封装 -->
  <van-cell @click="play" center :title="title" :label="label">
    <template #right-icon>
      <van-icon name="play-circle-o" size="24" />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    title: String,
    label: String,
    id: Number,
  },
  methods: {
    play() {
      this.$router.push({
        name: 'play',
        params: {
          id: this.id,
        },
        // query: {
        //   id: this.id,
        // },
      })
    },
  },
}
</script>

<style></style>
