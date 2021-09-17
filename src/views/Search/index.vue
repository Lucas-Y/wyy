<template>
  <div>
    <van-search
      v-model="words"
      @input="searchByInput"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap">
      <!-- 热搜关键词容器 -->
      <div class="hot_name_wrap" v-if="searchList.length === 0">
        <!-- 标题 -->
        <p class="hot_title">热门搜索</p>
        <!-- 每个搜索关键词 -->
        <span
          class="hot_item"
          @click="handleClickHot(item.first)"
          v-for="(item, index) in hotArr"
          :key="index"
          >{{ item.first }}</span
        >
      </div>

      <div class="hot_name_wrap" v-else>
        <p class="hot_title">搜索列表</p>
        <van-cell-group>
          <SongItem
            v-for="item in searchList"
            :key="item.id"
            :id="item.id"
            :title="item.name"
            :label="item.artists[0].name"
          ></SongItem>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import { reqGetHotData, reqSearchResultList } from '@/api/search.js'
import SongItem from '@/components/SongItem.vue'
export default {
  name: 'Search',
  components: {
    SongItem,
  },
  data() {
    return {
      hotArr: [],
      words: '',
      searchList: [],
    }
  },
  created() {
    this.getHotData()
  },
  methods: {
    async getHotData() {
      const { code, result } = await reqGetHotData()
      // console.log(code, result)
      if (code === 200) {
        this.hotArr = result.hots
      }
    },
    async handleClickHot(keywords) {
      this.words = keywords
      const { code, result } = await reqSearchResultList(this.words)
      // console.log(code, result)
      if (code === 200) {
        this.searchList = result.songs
      }
    },
    async searchByInput() {
      if (this.words === '') {
        this.searchList = []
        return
      }
      const { code, result } = await reqSearchResultList(this.words)
      // console.log(code, result)
      if (code === 200) {
        this.searchList = result.songs
      }
    },
  },
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 10px;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 14px;
  color: #666;
  line-height: 40px;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 10px 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 30px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 30px;
  color: #333;
  border-color: #d3d4da;
  border-radius: 30px;
  border: 1px solid #d3d4da;
}
</style>
