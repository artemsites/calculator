// import './components/switcher.js.back';

import { createApp } from 'vue';

import SwitcherBox from "./components/SwitcherBox.js";

createApp({
  data() {
    return {
    }
  },

  components: {
    SwitcherBox,
  }
})
.mount('#calculator')