<template>
  <div
    v-if="!activeElement.page && tab === 1"
    class="panel-wrap">
    <!-- 公共属性 -->
    <div class="panel-row">
      <vpd-icon name="layers" />
      <div class="panel-label">层级</div>
      <div class="panel-value">{{ activeElement.z }}</div>
      <div class="panel-slider-wrap">
        <vpd-slider
          v-model="activeElement.z"
          :step="1"
          :max="20" />
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="more-horizontal" />
      <div class="panel-label">宽度</div>
      <div class="panel-value">{{ activeElement.width }}</div>
      <div class="panel-slider-wrap">
        <vpd-slider
          v-model="activeElement.width"
          :step="1"
          :max="750" />
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="more-vertical" />
      <div class="panel-label">高度</div>
      <div class="panel-value">{{ activeElement.height }}</div>
      <div class="panel-slider-wrap">
        <vpd-slider
          v-model="activeElement.height"
          :step="1"
          :max="height" />
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="arrow-right" />
      <div class="panel-label">横坐标</div>
      <div class="panel-value">{{ activeElement.left }}</div>
      <div class="panel-slider-wrap">
        <vpd-slider
          v-model="activeElement.left"
          :step="1"
          :max="750" />
      </div>
    </div>

    <div class="panel-row">
      <vpd-icon name="arrow-down" />
      <div class="panel-label">纵坐标</div>
      <div class="panel-value">{{ activeElement.top }}</div>
      <div class="panel-slider-wrap">
        <vpd-slider
          v-model="activeElement.top"
          :step="1"
          :max="height" />
      </div>
    </div>

    <!-- 组件样式 -->
    <!--<component-->
    <!--v-for="(item, i) in widgetStyle"-->
    <!--v-if="item.type === activeElement.type"-->
    <!--:is="widgetStyle[i]"-->
    <!--:key="i"-->
    <!--:active-element="activeElement" />-->

    <!-- 添加到容器 -->
    <div v-if="activeElement.isChild">
      <hr>
      <div class="panel-row">
        <vpd-icon name="layout" />
        <div class="panel-label">所属容器</div>
        <div class="panel-value">
          <select v-model="activeElement.belong">
            <option>page</option>
            <option
              v-for="(val, index) in containerName"
              :key="index">{{ val }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import widget from '../../plugins/widget'
import vpd from '../../mixins/vpd'

export default {
  name: 'PanelStyle',
  mixins: [vpd],
  props: ['activeElement', 'tab'],
  data () {
    return {}
  },

  computed: {
    widgetStyle () {
      return widget.getWidgetStyle()
    },
    // 页面高度
    height () {
      return this.$vpd.state.page.height
    },

    // 容器名称
    containerName () {
      var arr = []
      this.$vpd.state.widgets.map(
        val => val.isContainer && val.name && arr.push(val.name)
      )

      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../_variables.scss';
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
    color: $gray-color;
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
