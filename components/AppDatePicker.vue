<template>
  <div class="">
    <div class="" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
      <!-- <DatePicker  :label="label" :column="1" mode="single" :style="stylesOfDatePicker" div-class="pdp-group custom" 
        :value="inputValue" v-model:model-value="modelValue"  :placeholder="placeholder" @update:modelValue="handleChange"
        @blur="handleBlur" :name="name" @select="handleChange" label-class="custom-label text-[13px]"
        placeholder-class="custom-placeholder"/> -->
        <label
        v-if="label !== ''"
        class="flex justify-between items-center px-1 pb-1.5"
        :for="name"
      >
        <span class="label-text">{{ label }}</span>
        <slot name="leftLabel"></slot>
      </label>
        <date-picker v-model="inputValue" inputClass="rounded-lg"></date-picker>
      <label class="flex items-center min-h-[1.4rem] px-1">
        <span class="label-text-alt leading-3 text-error text-2xs">{{ errorMessage || successMessage }}</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent } from "vue";
// import DatePicker from "@alireza-ab/vue3-persian-datepicker";
// import DatePicker from 'vue3-persian-datetime-picker'
// import { format, parse } from 'date-fns-jalali';

// const displayDate = ref("")
export default defineComponent({
  
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
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
    // inputValue.value = format(new Date(inputValue.value), 'yyyy-MM-dd');
    
    watchEffect(() => {
      // if(inputValue.value){
      //   inputValue.value = format(new Date(inputValue.value), 'yyyy-MM-dd');
      // }
      emit("update:modelValue", unref(inputValue))
    })
  
    watch(() => props.modelValue, (value) => {
      setValue(value)
      
    })
    return { errorMessage, inputValue, handleChange, handleBlur, meta, };
  },
});
</script>

<style scoped>
.custom {
  height: 48px;
  border-radius: 0.5rem 0 0 0.5rem,

}

.custom-label {
  margin-bottom: 0;
}

.custom-placeholder {
  color: blue;
  font-size: 11px;
}
</style>