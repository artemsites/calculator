import { defineComponent } from 'vue';

export default defineComponent({
  name: "SwitcherBox",

  data() {
    return {
      isSwitcherOn: false,
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

  template: `
    <label class="switcher" :class="[ (isSwitcherOn) ? '_on' : '_off' ]">
      <span class="switcher__label">Switcher</span>
      <div class="switcher__box">
        <span ref="indicator" class="switcher__indicator"></span>
        <input class="switcher__checkbox" v-model="isSwitcherOn" type="checkbox">
      </div>
    </label>
  `,
})