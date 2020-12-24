// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['bloguser', 'follower', 'following', 'project', 'blog'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        loginData: {
          identifier: 'xuke',
          password: '123456'
        }
      }
    }
  ],
  templates: {
    StrapiBloguser: [{
      path: '/socials/:id',
      component: './src/templates/BlogUser.vue'
    }],
    StrapiBlog: [{
      path: '/blogs/:id',
      component: './src/templates/Blog.vue'
    }],
    StrapiProject: [{
      path: '/projects/:id',
      component: './src/templates/Post.vue'
    }],
  }
}
