<script setup>
import { useCalculadoraStore } from '@/store/calc';



const useCalculadora = useCalculadoraStore()

    
</script>
<template>
    
    <h1>Calculadora!</h1>
  
    

  
  <div class="calculator">
    <h3>{{ useCalculadora.resultado}}</h3>
    <div class="buttons">
      <button @click="useCalculadora.append('7')">7</button>
      <button @click="useCalculadora.append('8')">8</button>
      <button @click="useCalculadora.append('9')">9</button>
      <button @click="useCalculadora.append('/')">/</button>
      <button @click="useCalculadora.append('4')">4</button>
      <button @click="useCalculadora.append('5')">5</button>
      <button @click="useCalculadora.append('6')">6</button>
      <button @click="useCalculadora.append('*')">*</button>
      <button @click="useCalculadora.append('1')">1</button>
      <button @click="useCalculadora.append('2')">2</button>
      <button @click="useCalculadora.append('3')">3</button>
      <button @click="useCalculadora.append('-')">-</button>
      <button @click="useCalculadora.append('0')">0</button>
      <button @click="useCalculadora.append('.')">.</button>
      <button @click="useCalculadora.append('+')">+</button>
      <button @click="useCalculadora.clear('C')">C</button>
      <button class="equal" @click="useCalculadora.equal('=')">=</button>
    </div>
    <div v-if="useCalculadora.calcHistory" class="historyCalc">
    <ul>
      <li
      v-for="histo in useCalculadora.calcHistory"
      >
      {{ histo }} 
      </li>
    </ul>

  </div>
  </div>
</template>

<style>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display {
  width: 100%;
  height: 100px;
  font-size: 40px;
  text-align: right;
  padding: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  margin-top: 10px;
}

button {
  font-size: 30px;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}
</style>