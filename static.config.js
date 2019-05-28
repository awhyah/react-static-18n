import path from 'path'
import axios from 'axios'

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
      const template = 'src/containers/Post'

    function getChildren(lang) {
        return [{
          path: '/route-1',
          getData: () => ({ post: `route-1. current lang is ${lang}` }),
          template
        },
        {
          path: '/route-2',
          getData: () => ({ post: `route-2. current lang is ${lang}` }),
          template
        }, {
          path: '/route-3',
          getData: () => ({ post: `route-3. current lang is ${lang}` }),
          template
        }]
    }

    return [
      {
        path: '/some',
        template: 'src/pages/Some'
      },
      {
        path: '/foo',
        template: './src/index.js'
      },
      {
        path: '/child',
        getData: () => ({ post: 'no lang'}),
        template
      },
      {
        path: '/ua',
        children : getChildren('ua'),
        getData: () => ({ post: 'ua'}),
        template
      },
      {
        path: '/en',
        children: getChildren('en'),
        getData: () => ({ post: 'en'}),
        template
      },
      {
        path: '/ru',
        children: getChildren('ru'),
        getData: () => ({ post: 'ru'}),
        template
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
