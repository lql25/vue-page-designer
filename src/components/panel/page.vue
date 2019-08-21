<template>
  <div
    v-if="activeElement.page && tab === 1"
    class="panel-wrap">
    <div
      class="panel-row"
      flex>
      <vpd-icon name="type" />
      <div class="panel-label">页面标题</div>
      <div class="panel-value">
        <input
          v-model="activeElement.title"
          type="text">
      </div>
    </div>

    <div
      class="panel-row"
      flex>
      <vpd-icon name="smartphone" />
      <div class="panel-label">页面高度</div>
      <div class="panel-value">
        <input
          v-model="activeElement.height"
          type="text">
      </div>
    </div>

    <div
      class="panel-row"
      flex>
      <vpd-icon name="droplet" />
      <div class="panel-label">页面背景色</div>
      <div class="panel-value">
        <input
          v-model="activeElement.backgroundColor"
          type="color">
      </div>
    </div>

    <div
      class="panel-row"
      flex>
      <vpd-icon name="clock" />
      <div class="panel-label">截止日期</div>
      <div class="panel-value">
        <input
          v-model="activeElement.endTime"
          type="date">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activeElement', 'tab']
}
</script>

<style lang="scss" scoped>
  .panel-wrap {
    height: calc(100% - 50px);
    padding: 15px 20px;
    position: relative;
    overflow-y: auto;
    .btn-action {
      background-color: none;
      border: none;
      border-radius: 50%;
    }
    .btn-action:hover {
      background-color: #f5f5f5;
    }
  }
  .panel-row {
    display: flex;
    font-size: 13px;
    line-height: 36px;
  }
  .panel-row .svg-icon {
    font-size: 16px;
    color: #999;
  }
  .panel-label {
    display: inline-block;
    width: 80px;
    height: 36px;
    padding-left: 6px;
    color: #999;
  }
  .panel-value {
    min-width: 80px;
    display: flex;
    align-items: center;
  }
  .panel-slider-wrap {
    flex-grow: 1;
    padding: 6px 5px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .panel-row:hover .panel-slider-wrap {
    opacity: 1;
  }
  .panel-cell {
    flex-grow: 1;
  }
  .panel-wrap input:checked ~ .svg-icon svg {
    stroke: #333;
  }
  .panel-select {
    width: 100%;
    height: 32px;
    border: 1px solid #ccc;
  }
  .panel-wrap hr {
    margin: 20px 0;
    border: none;
    border-top: 1px solid #f5f5f5;
  }
  .panel-wrap select,
  .panel-wrap input[type="text"] {
    width: 100%;
  }
  .panel-preview {
    width: 50px;
    height: 32px;
    background: no-repeat center/100%;
    cursor: pointer;
  }
</style>
