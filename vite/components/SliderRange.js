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
    min: {
      type: Number,
      default: 0,
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
      if (this.min>0) {
        return (this.max - this.min) * 0.01
      }
      else {
        return this.max * 0.01
      }
    },
    offsetFirst() {
      if (this.min>0) {
        return this.rangeFirst / this.onePercent - this.min / this.onePercent
      }
      else {
        return this.rangeFirst / this.onePercent
      }
    },
    offsetLast() {
      if (this.min>0) {
        return this.rangeLast / this.onePercent - this.min / this.onePercent
      }
      else {
        return this.rangeLast / this.onePercent
      }
    },
    styles() {
      return {
        '--size': (this.size) ? this.size : null
      }
    }
  },

  mounted() {
  },

  template: `
      <div class="slider-range__wrapper" :style="styles">
        <div class="slider-range__title" v-if="this.$slots._">
          <slot/>
        </div>

        <div class="slider-range" :class="{_two: two}">

          <input v-model="range" class="slider-range__range" type="range" :max="max" :min="min" />
          <div class="slider-range__track"></div>

          
          <div class="slider-range__knob" :class="{ _active: activeKnobe===1 }" :style="'--left: '+offsetFirst+'%;'"></div>
          
          <div class="slider-range__filler" :style="'--left: '+offsetFirst+'%; --right: '+offsetLast+'%;'"></div>
          
          <div v-if="two" class="slider-range__knob" :class="{ _active: activeKnobe===2 }" :style="'--left: '+offsetLast+'%;'"></div>
        </div>
      </div>
    `,
});