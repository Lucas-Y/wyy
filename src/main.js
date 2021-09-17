import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import 'amfe-flexible'
import './styles/base.css'

import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Search,
  Col,
  Row,
  Image as VanImage,
  Lazyload,
  Cell,
  CellGroup,
  Icon,
} from 'vant'
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Lazyload)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
