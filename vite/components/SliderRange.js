import { defineComponent } from "vue";
import './SliderRange.scss';

export default defineComponent({
  name: "SliderRange",

  data() {
    return {
      range: null,
      rangeFirst: null,
      rangeLast: null,
      activeKnobe: null,
    }
  },

  emits: ['change'],

  props: {
    size: {
      type: String
    },
    two: {
      type: Boolean
    },
    max: {
      type: Number,
      default: 100,
    },
    first: {
      type: Number
    },
    last: {
      type: Number
    },
    
  },

  watch: { 

    range: { 
      immediate: true, 
      handler(newVal) { 
        // Установка значений по умолчанию
        if (this.range === null) { 
          this.rangeFirst = this.first
          this.rangeLast = this.last
        } 
        else if (!this.two) { 
          this.rangeFirst = newVal
          this.activeKnobe = 1
        } 
        else {
          this.activeKnobe = ( Math.abs(this.rangeFirst - newVal) < Math.abs(this.rangeLast - newVal) ) ? 1 : 2;
  
          if (this.activeKnobe === 1) {
            this.rangeFirst = newVal
          }
          else if (this.activeKnobe === 2) {
            this.rangeLast = newVal
          }
        }
  
        this.$emit('change', [this.rangeFirst, this.rangeLast]) 
      },
    }

  },

  computed: {
    onePercent() {
      return this.max * 0.01
    },
    offsetFirst() {
      return this.rangeFirst / this.onePercent
    },
    offsetLast() {
      return this.rangeLast / this.onePercent
    },
    styles() {
      return {
        '--size': (this.size) ? this.size : null
      }
    }
  },

  mounted() {
    // console.log('this.$slots')
    // console.log(this.$slots)
  },

  template: `
      <div class="slider-range__wrapper" :style="styles">
        <div class="slider-range__title" v-if="this.$slots._">
          <slot/>
        </div>

        <div class="slider-range" :class="{_two: two}">

          <input v-model="range" class="slider-range__range" type="range" :max="max" />
          <div class="slider-range__track"></div>

          
          <div class="slider-range__knob" :class="{ _active: activeKnobe===1 }" :style="'--left: '+offsetFirst+'%;'"></div>
          
          <div class="slider-range__filler" :style="'--left: '+offsetFirst+'%; --right: '+offsetLast+'%;'"></div>
          
          <div v-if="two" class="slider-range__knob" :class="{ _active: activeKnobe===2 }" :style="'--left: '+offsetLast+'%;'"></div>
        </div>
      </div>
    `,
});