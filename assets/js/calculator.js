// Импортируем createApp из глобальной области видимости где у нас есть Vue зарегестрированный нами в теге </head>
const { createApp } = Vue
 
createApp({
    // Метод data возвращает объект с СОСТОЯНИЕМ приложения 
  data() {
    return {
        // В данных у нас пока одно свойство: message
      message: 'Hello Vue!'
    }
  }
})
// Монтируем наше Vue приложение в id calculator
.mount('#calculator')