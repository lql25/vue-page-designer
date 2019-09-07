<template>
  <div>
    <hr>
    <div class="panel-row">
      <vpd-icon name="target" />
      <div class="panel-label">背景色</div>
      <div class="panel-value">{{ activeElement.bgColor }}</div>
      <div class="panel-value">
        <input
          v-model="activeElement.bgColor"
          type="color">
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="image" />
      <div class="panel-label">背景图</div>
      <div class="panel-value">
        <div
          :style="{ backgroundImage: 'url(' + activeElement.backPic + ')' }"
          class="panel-preview"
          @click="addPic">
          <vpd-icon
            v-show="!activeElement.backPic"
            name="plus" />
        </div>
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="edit-3" />
      <div class="panel-label">文字颜色</div>
      <div class="panel-value">{{ activeElement.color }}</div>
      <div>
        <input
          v-model="activeElement.color"
          type="color">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BraidButtonStyle',
  props: ['activeElement'],
  methods: {
    addPic () {
      // this.$vpd.$emit('upload', (payload) => {
      //   this.$vpd.commit('addBackPic', payload)
      // })
    }
  }
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
