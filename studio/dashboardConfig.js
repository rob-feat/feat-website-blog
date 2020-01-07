export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e14060245f0cc1181cfc07f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vv57ppce',
                  apiId: '7f2dc11b-5a2e-4ac0-a3af-fbca013efe0f'
                },
                {
                  buildHookId: '5e14060274ead825390ea1bc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z148ohcq',
                  apiId: 'c8cb6355-ac48-40bd-ba57-8afc54c376dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rob-feat/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z148ohcq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
