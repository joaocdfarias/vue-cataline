import { Directive } from 'vue'

export const highlight: Directive = {
  beforeMount(element: HTMLElement, binding) {
    if (binding.arg === 'background') {
      element.style.background = binding.value
    } else {
      element.style.color = binding.value
    }

    if (binding.modifiers.shadow) {
      element.style.boxShadow = '3px 3px 3px rgba(0,0,0,0.5)'
    }
  }
}
