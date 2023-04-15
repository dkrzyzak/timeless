<template>
  <div
    v-on:touchstart="handleTouchStart"
    v-on:mousedown="handleMouseDown"
    v-on:touchmove="handleTouchMove"
    v-on:mousemove="handleMouseMove"
    v-on:touchend="handleTouchEnd"
    v-on:mouseup="handleMouseUp"
    ref="myDiv"
    :style="{ cursor: cursorStyle, overflowX: 'auto' }"
  >
    <!-- Add your content here -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue';

@Component
export default class MyComponent extends Vue {
  private isDragging: boolean = false;
  private initialClientX: number = 0;
  private initialScrollLeft: number = 0;

  private get cursorStyle(): string {
    return this.isDragging ? 'grabbing' : 'grab';
  }

  private handleTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.initialClientX = event.touches[0].clientX;
    this.initialScrollLeft = (this.$refs.myDiv as HTMLDivElement).scrollLeft;
  }

  private handleMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.initialClientX = event.clientX;
    this.initialScrollLeft = (this.$refs.myDiv as HTMLDivElement).scrollLeft;
  }

  private handleTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;
    const touch = event.touches[0] || event.changedTouches[0];
    const deltaX = touch.clientX - this.initialClientX;
    (this.$refs.myDiv as HTMLDivElement).scrollLeft = this.initialScrollLeft - deltaX;
  }

  private handleMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.initialClientX;
    (this.$refs.myDiv as HTMLDivElement).scrollLeft = this.initialScrollLeft - deltaX;
  }

  private handleTouchEnd(event: TouchEvent): void {
    this.isDragging = false;
  }

  private handleMouseUp(event: MouseEvent): void {
    this.isDragging = false;
  }
}
</script>
