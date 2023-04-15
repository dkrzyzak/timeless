<template>
  <div
    class="container"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
    ref="containerRef"
    :style="{ cursor: getCursorStyle() }"
  >
    <v-timeline direction="horizontal">
      <v-timeline-item v-for="(month, index) in timelineMonths" :key="month.id">
        <template v-if="index % 2 === 0">
          {{ month.label }}
        </template>
        <template v-else>
          <!-- <template v-slot:opposite> -->
          {{ month.label }}
          <!-- </template> -->
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
import { generateTimelineMonths } from './helpers';

export default {
  name: 'Timeline',
  data() {
    return {
      isMouseDown: false,
      lastClientX: 0,
      timelineMonths: generateTimelineMonths(),
    };
  },
  methods: {
    getCursorStyle() {
      return this.isMouseDown ? 'grabbing' : 'grab';
    },
    handleMouseDown(event: MouseEvent) {
      this.isMouseDown = true;
      // console.log('mousedown', event.clientX);
    },
    handleMouseMove(event: MouseEvent) {
      if (this.isMouseDown) {
        //   console.log('mousemove', event.clientX);
        if (this.lastClientX == -1) {
          this.lastClientX = event.clientX;
        }

        const containerRef = this.$refs.containerRef as HTMLDivElement;
        containerRef.scrollLeft += this.lastClientX - event.clientX;
        this.lastClientX = event.clientX;
      }
    },
    handleMouseUp(event: MouseEvent) {
      this.isMouseDown = false;
      this.lastClientX = -1;
      // console.log('mouseup', event.clientX);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  cursor: grab;
}
</style>
