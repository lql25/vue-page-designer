<template>
  <header class="header">
    <div class="navbar container grid-xl">
      <section class="logo navbar-section">
        <span>自定義頁面</span>
      </section>
      <section class="navbar-section">
        <!--<a-->
        <!--class="btn btn-link tooltip tooltip-bottom"-->
        <!--data-tooltip="複製選中組件"-->
        <!--@click="copyWidget">-->
        <!--<vpd-icon name="copy" /> 複製-->
        <!--</a>-->
        <button
          class="navbar-btn"
          @click="dele">删除選中組件</button>
        <button
          class="navbar-btn"
          @click="preview">預覽</button>
        <button
          class="navbar-btn"
          @click="save">保存</button>
      </section>
    </div>
  </header>
</template>

<script>
import vpd from '../mixins/vpd'
export default {
  mixins: [vpd],
  computed: {
    show () {
      return this.$vpd.state.type !== 'page'
    }
  },
  mounted () {
    // Ctrl + C 复制元件
    document.addEventListener(
      'keyup',
      e => {
        e.stopPropagation()
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
          this.copyWidget()
        }
      },
      true
    )

    // Delete 删除选中元件
    document.addEventListener(
      'keyup',
      e => {
        e.stopPropagation()
        if (e.keyCode === 46) {
          this.dele()
        }
      },
      true
    )

    // Ctrl + S 保存
    document.addEventListener(
      'keyup',
      e => {
        e.stopPropagation()
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
          this.save()
        }
      },
      true
    )
  },

  methods: {
    // 保存
    save () {
      this.$vpd.dispatch('save')
    },

    // 預覽
    preview () {
      this.$vpd.dispatch('preview')
    },

    // 复制元件
    copyWidget () {
      this.$vpd.commit('copy')
    },

    // 删除元件
    dele () {
      this.$vpd.commit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../_variables.scss';
.header {
  background-color: #24292e;
  padding: 12px 0;
}
.navbar {
  .svg-icon {
    svg {
      vertical-align: middle;
    }
  }
  .navbar-btn {
    background: #409EFF;
    color: #fff;
    margin-right: 15px;
    cursor: pointer;
    border-width: 0;
    padding: 6px 15px;
    border-radius: 3px;
  }
  .logo {
    font-size: 20px;
    span {
      color: #fff;
    }
    .svg-icon {
      width: 30px;
      text-align: center;
      background-color: $light-color;
      border-radius: 50%;
    }
  }
}
</style>
