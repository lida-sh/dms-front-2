import { setLocale } from 'yup';
export default defineNuxtPlugin(()=>{
    setLocale({
        mixed: {
          default: 'ورودی نامعتبر است.',
          required: '${path} الزامی است.'
          
        },
        string: {
            email: "ایمیل نا معتبر است."
        }
        // number: {
        //   min: 'Deve ser maior que ${min}',
        // },
      });
})