import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

export default defaultConfig({
  config: {
    classes: generateClasses({
      global: {
        outer: 'mb-2',
        label: 'block text-md font-semibold text-slate-200 mb-2',
        input: 'w-full rounded-2xl border border-slate-300 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand',
        message: 'bg-red-600 text-white text-center text-sm font-bold uppercase p-2 my-5 rounded-md',
      }
    })
  }
})