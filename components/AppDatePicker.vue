<template>
    <div
      class="form-control"
      :class="{ 'has-error': !!errorMessage, success: meta.valid }"
    >
    
        <date-picker name="date" label="تاریخ ابلاغ" :column="1" mode="single"  :style="stylesOfDatePicker" div-class="pdp-group custom" v-bind="$attrs" 
        :placeholder="placeholder"
        :value="inputValue" :name="name"
        @input="handleChange"
        @blur="handleBlur">
      <label class="flex items-center min-h-[1.4rem] px-1">
          <span class="label-text-alt leading-3 text-error text-2xs">{{errorMessage ||successMessage}}</span>
      </label>
    </div>
  </template>
  
  <script lang="ts">
  import { useField } from "vee-validate";
  import { defineComponent } from "vue";
  import DatePicker from "@alireza-ab/vue3-persian-datepicker";

const stylesOfDatePicker = {
    // "height": "48px",
    "border-radius": "0.5rem 0 0 0.5rem"
}

  export default defineComponent({
    props: {
      name: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        default: "",
      },
      modelValue: {
        type: String,
        default: "",
      },
      successMessage: {
        type: String,
        default: "",
      },
    },
    setup(props, { emit }) {
      const {
        value: inputValue,
        errorMessage,
        handleChange,
        handleBlur,
        meta,
        setValue,
      } = useField(props.name, undefined, {
        initialValue: props.modelValue,
        validateOnValueUpdate: false,
      });
      watchEffect(()=>{
          emit("update:modelValue", unref(inputValue))
      })
      watch(()=>props.modelValue, (value)=>{
          setValue(value)
      })
      return {errorMessage, inputValue, handleChange, handleBlur, meta};
    },
  });
  </script>
  
  <style scoped>
  </style>