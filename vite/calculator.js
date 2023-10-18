import { createApp } from 'vue';

import './css/calculator.scss'

import './components/theme.scss'
import SwitcherBox from "./components/SwitcherBox.js";
import SliderRange from "./components/SliderRange.js";

createApp({
  components: {
    SwitcherBox,
    SliderRange,
  }
})
.mount('#calculator')