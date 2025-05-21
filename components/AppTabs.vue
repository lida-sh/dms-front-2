<template>
    <div>
        <div class="tabs tabs-lift">
            <button v-for="(tab, index) in tabs" :key="index" class="tab tab-lifted border-base-300 rounded-t-xl h-14 z-0 -mb-2"
                :class="{'border-t border-r border-l border-b-0 bg-base-100 -mb-px z-0': activeTab === index, '': activeTab != index}"  @click="activeTab = index">
                {{ tab.label }}
            </button>
        </div>

        <div class=" p-4 border-r border-l border-b border-t border-base-300 rounded-xl overflow-hidden z-20 bg-base-100">
            <slot :name="'tab-' + activeTab" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface TabType {label: string}
const props = defineProps<{tabs:TabType[]}>()

const activeTab = ref(0)

</script>

<style scoped></style>