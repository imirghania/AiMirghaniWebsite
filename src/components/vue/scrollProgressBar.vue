<template>
  <div
    id="progress-bar"
    class="bg-gradient-to-r from-sky-900 to-primary-500"
    ref="scrollProgressBar"
  ></div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
const scrollProgressBar = ref(null);
// const window = inject(window);
</script>

<style lang="css" scoped>
#progress-bar {
  --progress: 0;
  height: 6px;
  width: var(--progress);
}
</style>

<script>
//     function updateProgressBar() {
//     const {scrollTop, scrollHeight} = document.documentElement
//     const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100
//     const scrollPercentVal = scrollPercent + "100%"

//     const bar = document.querySelector<HTMLElement>("#progress-bar")

//     if(bar === null) {
//         throw new Error("Define a progressBar element.");
//     }

//     bar.style.setProperty(
//     '--progress', scrollPercentVal)
// }

// document.addEventListener('scroll', updateProgressBar)
//
</script>
