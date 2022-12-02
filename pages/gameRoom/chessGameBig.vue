<template>
  <div class="w-screen h-screen">
    <div class="w-[45.7vw] h-[45vw] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform bg-[#DF9849] border border-t-[2.2rem] border-x-[2.45rem] border-b-[2rem] border-[#DF9849] box-border rounded-xl">
        <div class="w-[67vw] h-[89vw] overflow-hidden grid grid-cols-15 grid-rows-15 rounded-[15px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-48.5%]">
            <div :class="['border', 'border-black']" v-for="(grid, i) in grids" :key="i">{{ grid }}</div>
        </div>
    </div>
  </div>
</template>
<!-- grid === 1 ? 'visible' : 'invisible' -->
<script setup lang="ts">
// bg-[#DF9849]
const grids = ref(new Array(255).fill(1))
console.log(grids.value)
</script>