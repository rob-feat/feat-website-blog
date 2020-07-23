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
                  title: 'FEAT Blog Admin (Sanity Studio)',
                  name: 'feat-blog-admin',
                  apiId: '7f2dc11b-5a2e-4ac0-a3af-fbca013efe0f'
                },
                {
                  buildHookId: '5e14310b02ed4371aa57980f',
                  title: 'FEAT Fitness Blog Website',
                  name: 'featfitness',
                  apiId: '1c2ad6fb-8d63-4cc5-86cd-ae776557a294'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rob-feat/feat-website-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://featfitness.com.au', category: 'apps' }
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
