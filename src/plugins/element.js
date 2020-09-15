// import Vue from 'vue'
// import { Button } from 'element-ui'
// Vue.use(Button)
import {
  Carousel,
  CarouselItem,
  Image
} from 'element-ui'

const element = {
  install(Vue) {
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Image)
  }
}

export default element
