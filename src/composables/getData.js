import axios from 'axios'
import {ref} from 'vue'




export const useGetData = () => {
    const error= ref(null)
    const data = ref(null)
    const loading = ref(true)

const getData =  async (url) => {
    loading.value = true
    try {
       const res  = await axios.get(url) 
       data.value = res.data
        
    } catch (e) { 
        console.log(e)
        error.value = "Error en la conexion, intenta de nuevo mas tarde!"
    }finally{
        loading.value = false
    
    }
}
    return  {
        getData,
        data,
        loading,
        error
        
    }
}
