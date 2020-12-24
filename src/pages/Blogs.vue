<template>
  <Layout>
    <div style="min-height: 600px">
      <div v-if="blogs && blogs.length > 0">
        <el-card
          shadow="hover"
          v-for="({node:item}, index) in blogs"
          :key="'p' + index"
          style="margin-bottom: 20px"
        >
          <div slot="header">
            <el-row>
              <el-col :span="16">
                <span>
                  <g-link :to="'/blogs/' + item.id">
                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp;
                    {{ item.title }}
                  </g-link>
                </span>
              </el-col>
            </el-row>
          </div>
          <div style="font-size: 0.9rem; line-height: 1.5; color: #606c71">
            最近更新 {{ item.updateTime }}
          </div>
          <div
            style="
              font-size: 1.1rem;
              line-height: 1.5;
              color: #303133;
              padding: 10px 0px 0px 0px;
            "
          >
            {{ item.description }}
          </div>
        </el-card>
        <div style="text-align: center">
          <Pager :info="$page.blogs.pageInfo"/>
        </div>
      </div>

      <el-card
        shadow="never"
        style="
          margin-bottom: 20px;
          padding: 20px 0px 20px 0px;
          text-align: center;
        "
        v-if="!blogs || blogs.length == 0"
      >
        <font style="font-size: 30px; color: #dddddd">
          <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
        </font>
      </el-card>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  blogs: allStrapiBlog (perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        description
        createdAt
        updatedAt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager
  },
  data() {
    return {
      query: {
        page: 1,
        pageSize: 5,
        pageNumber: 1,
      },
      loading: false,
      searchKey: "",
    };
  },
  computed: {
    blogs() {
      return this.$page.blogs.edges
    }
  },
  methods: {
    list() {
      console.log("list");
    },
    
  },
};
</script>