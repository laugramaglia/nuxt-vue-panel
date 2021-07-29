<template>
  <aside id="my-collapse-sidebar" :class="sideOpen">
    <div ref="sidebarContent" class="sidebar-content" :class="sidebarStyles">
      <h1 class="">Title</h1>
      <ul class="py-4 hidden-visible">
        <li>
          <div v-b-toggle.collapse-turnos class="box-hover">
            <b-icon icon="clock-history"></b-icon>
            <span class="ml-2"
              >Turnos
              <b-badge pill class="ml-2 badge-size-reduced">New</b-badge>
            </span>
          </div>
          <b-collapse id="collapse-turnos">
            <ul>
              <li class="box-hover">
                <b-icon icon="journal-plus" class="mr-2"></b-icon
                ><span>Nuevo</span>
              </li>
              <li class="box-hover">
                <b-icon icon="card-list" class="mr-2"></b-icon
                ><span>Mis turnos</span>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li>
          <div v-b-toggle.collapce-coin class="box-hover">
            <b-icon icon="cup-straw"></b-icon>
            <span class="ml-2">Coin</span>
          </div>
          <b-collapse id="collapce-coin">
            <ul>
              <li class="box-hover">
                <b-icon icon="cash-stack" class="mr-2"></b-icon
                ><span>Comprar mas</span>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li>
          <div v-b-toggle.collapce-user class="box-hover">
            <b-icon icon="emoji-smile"></b-icon>
            <span class="ml-2">Users</span>
          </div>
          <b-collapse id="collapce-user">
            <ul>
              <li class="box-hover">
                <NuxtLink to="/users/employee">
                  <b-icon icon="person-badge" class="mr-2"></b-icon>
                  <span>Employees</span>
                </NuxtLink>
              </li>
              <li class="box-hover">
                <NuxtLink to="/users/customers">
                  <b-icon icon="person-circle" class="mr-2"></b-icon>
                  <span>Customers</span>
                </NuxtLink>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'SideBar',
  props: {
    activeClass: { type: Boolean },
  },
  data() {
    return {
      height: 0,
      windowHeight: 0,
      windowScrollTop: 0,
    }
  },
  computed: {
    sideOpen() {
      if (this.activeClass) return { active: true }
      return { active: false }
    },
    sidebarStyles() {
      if (this.height <= this.windowHeight) return { 'fixed-top': true }

      if (this.windowScrollTop + this.windowHeight > this.height)
        return { 'fixed-bottom': true }

      return { 'fixed-top': false, 'fixed-bottom': false }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.calculateSidebar()
  },
  methods: {
    handleResize: _.throttle(function () {
      this.calculateSidebar()
    }, 100),
    handleScroll: _.throttle(function () {
      this.windowScrollTop =
        window.pageYOffset || document.documentElement.scrollTop
    }, 100),
    calculateSidebar() {
      this.height = this.$refs.sidebarContent.offsetHeight
      this.windowHeight = window.innerHeight
    }
  },
}
</script>
<style lang="scss">
$width: 245px;
aside {
  width: 55px;
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  .sidebar-content {
    width: 55px;
    padding: 10px 20px;

    &.fixed-top {
      position: fixed;
      top: 0;
    }
    &.fixed-bottom {
      position: fixed;
      bottom: 0;
    }
    a{
      color: whitesmoke;
      &:hover{
        text-decoration: none;
      }
    }
    .hidden-visible {
      span {
        display: none;
      }
    }
    ul {
      width: 40px;
      padding-left: 0;

      li {
        border-radius: 8px;
        cursor: pointer;
        font-size: 25px;
        color: whitesmoke;
        font-weight: 600;
        line-height: 1.5;
        list-style-type: none;
        margin: 8px 0;
        ul {
          background-color: rgba(245, 245, 245, 0.178);
          padding-left: 8px;
          border-radius: 8px;
        }
      }
    }
  }
  &.active {
    width: $width;

    ul {
      width: $width - 24px;
      padding-left: 0;

      li {
        margin: 8px 0;
        .box-hover:hover {
          background-color: rgba(128, 128, 128, 0.37);
          padding: 2px 5px;
          border-radius: 8px;
        }
        span {
          .badge-size-reduced {
            font-size: 12px;
          }
        }
        ul {
          padding: 0px 0 0 22px;
          li {
            font-weight: 400;
          }
        }
      }
    }

    .hidden-visible {
      span {
        display: inline;
      }
    }
  }
}
</style>
  