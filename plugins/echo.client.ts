<<<<<<< HEAD
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

declare global {
  interface Window {
    Pusher: typeof Pusher
  }
}
// چون از Reverb استفاده می‌کنی، ما به صورت WebSocket خالص وصل می‌شیم
window.Pusher = Pusher

export default defineNuxtPlugin(() => {
   const echo = new Echo({
    broadcaster: 'pusher',
    key: 'wpgovmelfd4vkojtfnas', // فقط خالی نباشه
    wsHost: '127.0.0.1', // آدرس سرور Reverb
    wsPort: 8080,
    wssPort: 8080,
    forceTLS: false,
    encrypted: false,
    disableStats: true,
    enabledTransports: ['ws'],
    cluster: 'mt1', 
  });
  console.log('🟢 Echo instance:', echo)
=======
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

>>>>>>> 4cde24629e69a0391c0fb94878bbefbcc8bec7d8
  return {
    provide: {
      echo,
    },
  }
<<<<<<< HEAD
})
=======
})
>>>>>>> 4cde24629e69a0391c0fb94878bbefbcc8bec7d8
