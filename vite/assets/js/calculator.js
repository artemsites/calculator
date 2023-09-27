import './components/switcher.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      // 1 Свойство в котором будет состояние Switcher, изначально равное null
      switcher: null,
    }
  },
  methods: {
    // 2 Метод который будет переключать состояние switcher
    switcherChange(event) {
      // 3 По умолчанию в событие передаётся объект события event
      // из которого мы возьмём свойство target 
      // в котором элемент на котором сработало событие
      // и из него возьмём атрибут checked в котором лежит true или false
      // и запишем в свойство состояния switcher
      this.switcher = event.target.checked
      // 4 И сразу посмотрим в консоли что состояние приложения меняется
      console.log('this.switcher')
      console.log(this.switcher)
    }
  }
})
.mount('#calculator')