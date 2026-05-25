import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

export default defaultConfig({
  config: {
    classes: generateClasses({
      global: {
        message: 'bg-red-600 text-white text-center text-sm font-bold uppercase p-2 my-5'
      }
    })
  }
})