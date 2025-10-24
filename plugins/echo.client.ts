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
  return {
    provide: {
      echo,
    },
  }
})
