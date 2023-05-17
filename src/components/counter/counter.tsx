import { component$, useSignal } from '@builder.io/qwik'
import { LuPlusCircle } from '@qwikest/icons/lucide'

export const Counter = component$(() => {
  const count = useSignal(0)
  return (
    <button
      class="bg-blue-500/20 border border-blue-500 flex items-center px-4 py-1 rounded-lg space-x-2"
      type="button"
      onClick$={() => count.value++}
    >
      <LuPlusCircle /> <span>{count.value}</span>
    </button>
  )
})
