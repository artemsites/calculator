import { createApp } from 'vue';

import './css/calculator.scss';
import './css/theme.scss';

import SwitcherBox from "./components/SwitcherBox.js";

createApp({
  components: {
    SwitcherBox,
  }
})
.mount('#calculator')