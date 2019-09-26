export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d8c940843acb79cf78317b7',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-2d15vtt9',
                  apiId: '508c8bc7-a5f0-46a3-a612-4e19f5ee72f4'
                },
                {
                  buildHookId: '5d8c940961348b9bf9e2ed18',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-uvsgs29d',
                  apiId: '22d51867-23da-43a9-aa42-ab34154408ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puck3000/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-uvsgs29d.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
