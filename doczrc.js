export default {
    title: 'WMN CMS Documentation',
    dest: '/docs',
    base: '/docs',
    ignore: [
      'README.md',
    ],
    menu: [
      'Introduction',
      { name: 'Basics', menu: ['Logging In and Out', 'Umbraco Interface'] },
      { name: 'Content', menu: ['Creating, Saving and Publishing Content', 'Edit Content', 'Ordering Pages', 'Deleting and Restoring Pages'] },
      { name: 'Misc', menu: ['Search'] },
      { name: 'Major Roadworks & Events', menu: ['Overview', 'Add Travel Tips', 'Edit the main hub page'] }
    ],
    menuDisplayName: {
      UI: "User Interface",
      Main: "Main Container",
    },
    groups: {
      '': [],
      'CMS': ['Basics', 'Content', 'Misc' ],
      'Pages': ['Major Roadworks & Events']
    },
    themeConfig: {
      menu: {
        headings: {
          rightSide: true,
          scrollspy: true,
          depth: 3,
        },
      },
      header: {
        fixed: true,
      },
      mainContainer: {
        fullscreen: false,
        align: 'left',
      },
    },
  }


