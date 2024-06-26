exports.onCreateDevServer = ({ app }) => {
  app.get('/content', (_, res) => {
    res.redirect('https://lucassilbernagel.sanity.studio/content/desk/homepage')
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
