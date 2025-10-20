// import { defineNuxtPlugin } from '#app'
// import Echo from 'laravel-echo'
// import Pusher, { Channel } from 'pusher-js'
// declare global {
//   interface Window {
//     Pusher: typeof Pusher
//   }
// }
// window.Pusher = Pusher

// export default defineNuxtPlugin((nuxtApp) => {
//   const echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.NUXT_PUBLIC_PUSHER_APP_KEY || 'local-key',
//     wsHost: '127.0.0.1',
//     wsPort: 6001,
//     forceTLS: false,
//     disableStats: true,
//   })

//   // Provide echo globally
//   nuxtApp.provide('echo', echo)
// })
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

export default defineNuxtPlugin(() => {
  // Pusher را به صورت محلی در window تعریف کن
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Pusher = Pusher
  }

  const echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.NUXT_PUBLIC_PUSHER_APP_KEY || 'local-key',
    wsHost: '127.0.0.1', // یا IP سرور Soketi
    wsPort: 6001,
    wssPort: 6001,
    forceTLS: false,
    encrypted: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss'], // ✅ مهم برای جلوگیری از fallback به polling
    cluster: 'mt1', // ⬅ این مقدار فقط برای رفع خطای Pusher لازم است ولی استفاده نمی‌شود
  })

  return {
    provide: {
      echo,
    },
  }
})