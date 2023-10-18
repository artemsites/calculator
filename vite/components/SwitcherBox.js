import { defineComponent } from 'vue';
import './SwitcherBox.scss';

export default defineComponent({
  name: "SwitcherBox",

  data() {
    return {
      isSwitcherOn: false,
    }
  },

  props: {
    size: {
      type: String,
    }
  },

  watch: {
    isSwitcherOn() {
      // Сброс анимации индикатора
      this.$refs.indicator.style.animationName = "none";
      requestAnimationFrame(() => {
        this.$refs.indicator.style.animationName = "";
      });
    }
  },
  
  computed: {
    styles() {
      return {
        '--size': (this.size) ? this.size : null
      }
    }
  },

  template: `
    <label class="switcher-box" :class="[ (isSwitcherOn) ? '_on' : '_off' ]" :style="styles">

      <div class="switcher-box__label" v-if="this.$slots._">
        <slot/>
      </div>

      <div class="switcher-box__box">
        <span ref="indicator" class="switcher-box__indicator"></span>
        <input class="switcher-box__checkbox" v-model="isSwitcherOn" type="checkbox">
      </div>
    </label>
  `,
})