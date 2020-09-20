// import Vue from 'vue'
// import { Button } from 'element-ui'
// Vue.use(Button)
import {
  Carousel,
  CarouselItem,
  Image,
  Backtop,
  Table,
  TableColumn
} from 'element-ui'

const element = {
  install(Vue) {
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Image)
    Vue.use(Backtop)
    Vue.use(Table),
    Vue.use(TableColumn)
  }
}

export default element
