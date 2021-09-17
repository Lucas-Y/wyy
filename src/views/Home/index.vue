<template>
  <div class="home">
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="20">
        <van-col span="8" v-for="item in list" :key="item.id">
          <!-- {{ item }} -->
          <!-- 
            width="10rem"
            height="10rem"
           -->
          <van-image fit="cover" height="3rem" lazy-load :src="item.picUrl" />
          <p class="song_name">
            {{ item.name }}
          </p>
        </van-col>
      </van-row>
    </div>

    <p class="title">最新音乐</p>
    <van-cell-group>
      <SongItem
        v-for="item in newList"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :label="item.song.artists[0].name"
      ></SongItem>
    </van-cell-group>
  </div>
</template>

<script>
import { reqGetData, reqGetNewData } from '@/api/home.js'
import SongItem from '@/components/SongItem.vue'

export default {
  name: 'Home',
  components: { SongItem },
  data() {
    return {
      list: [],
      newList: [],
    }
  },
  created() {
    this.getData()
    this.getNewData()
  },
  methods: {
    async getNewData() {
      const { code, result } = await reqGetNewData()
      // console.log(code, result)
      if (code === 200) {
        this.newList = result
      }
    },
    async getData() {
      const { code, result } = await reqGetData()
      // console.log(code, result)
      if (code === 200) {
        this.list = result
      }
    },
  },
}
</script>

<style scoped>
/* .van-icon-play-circle-o {
  font-size: 24px;
} */
/* 标题 */
.title {
  padding: 10px 8px;
  margin: 0 0 8px 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 12px;
  padding: 0 3px;
  margin-bottom: 10px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
