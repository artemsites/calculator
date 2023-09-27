import './components/switcher.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      // Свойство в котором будет состояние Switcher, изначально равное null
      switcher: null,
    }
  },
  methods: {
    // Метод который будет переключать состояние switcher
    switcherChange(event) {
      // По умолчанию в событие передаётся объект события event
      // из которого мы возьмём свойство target 
      // в котором элемент на котором сработало событие
      // и из него возьмём атрибут checked в котором лежит true или false
      // и запишем в свойство состояния switcher
      this.switcher = event.target.checked
      
      console.log('this.switcher')
      console.log(this.switcher)
    }
  }
})
.mount('#calculator')