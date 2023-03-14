
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCalculadoraStore = defineStore('calculadora', () => {
  const resultado = ref(" ")
  const navResult = ref("")
  const calcHistory = ref([])
  const clear = () => {
    resultado.value = '';
  }
  const append = (value) => {
    
    resultado.value += value;
  }
  const equal  = () => {
    if(resultado.value !=0){
    resultado.value = eval(resultado.value)
    navResult.value = resultado.value
    calcHistory.value.unshift(resultado.value )
  }else{
    resultado.value = "0"
  }
  } 

return{
  clear,
  append,
  equal,
  resultado,
  navResult,
  calcHistory,

}
})
