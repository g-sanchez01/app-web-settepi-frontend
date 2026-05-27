import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

export default defaultConfig({
  config: {
    classes: generateClasses({
      global: {
        outer: 'mb-10',
        label: 'block text-lg font-medium text-gray-700 mb-2',
        inner: 'relative rounded-lg border border-gray-300 bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition',
        input: 'w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-transparent outline-none',
        textarea: 'w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-transparent outline-none resize-none',
        help: 'text-xs text-gray-400 mt-1',
        message: 'bg-red-600 text-white text-center text-sm font-bold uppercase p-2 my-5'
      }
    })
  }
})