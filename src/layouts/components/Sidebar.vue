<template>
  <div>
    <el-card shadow="never">
      <el-menu :default-active="active">
        <el-menu-item
          v-for="item in constantRouterMap"
          :key="item.path"
          :index="item.path"
        >
          <i :class="item.meta.icon"></i>
          <g-link class="nav-link" :to="item.path">{{ item.meta.title }}</g-link>
          <!-- <span slot="title">{{ item.meta.title }}</span> -->
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      constantRouterMap: [
        {
          path: "/news",
          meta: {
            type: "user",
            icon: "el-icon-star-off",
            title: "最新动态",
          },
        },
        {
          path: "/social",
          meta: {
            type: "user",
            icon: "el-icon-mobile-phone",
            title: "社交圈",
          },
        },
        {
          path: "/blogs",
          meta: {
            type: "user",
            icon: "el-icon-edit-outline",
            title: "博客列表",
          },
        },
        {
          path: "/projects",
          meta: {
            type: "user",
            icon: "el-icon-service",
            title: "开源项目",
          },
        },
      ],
      active: "",
    };
  },
  mounted() {
    let arr = this.$route.path.split("/");
    this.active = "/" + arr[1] + "/" + arr[2];
  },
};
</script>