function uniqueId() {
  return new Date().getTime().toString();
}

function getDefaultTodos() {
  return [
    {
      id: '1-' + uniqueId(),
      title: 'Buy new keyboard',
      desc: '',
      isCompleted: true,
    },
    {
      id: '2-' + uniqueId(),
      title: 'Learn Vue3 API',
      desc: 'The new composition API is awesome!',
      isCompleted: false,
    },
    {
      id: '3-' + uniqueId(),
      title: 'Implement search function',
      desc: '',
      isCompleted: false,
    },
    {
      id: '4-' + uniqueId(),
      title: 'Walk Philly',
      desc: 'Bring plastic bag',
      isCompleted: false,
    },
    {
      id: '5-' + uniqueId(),
      title: 'Create custom color scheme',
      desc: 'For both light and dark themes',
      isCompleted: false,
    },
    {
      id: '6-' + uniqueId(),
      title: 'Update repo README',
      desc: 'Should include detailed instructions for running the application (both package manager & docker)',
      isCompleted: true,
    },
    {
      id: '7-' + uniqueId(),
      title: 'Deploy app',
      desc: '',
      isCompleted: true,
    },
    {
      id: '8-' + uniqueId(),
      title: 'Implement pagination',
      desc: 'because i overlooked the requirement.',
      isCompleted: true,
    },
    {
      id: '9-' + uniqueId(),
      title: 'Define components in different styles',
      desc: 'Vue2 style, setup, script setup, event & props registrations.',
      isCompleted: true,
    },
    {
      id: '10-' + uniqueId(),
      title: 'Play with Snackbar',
      desc: '',
      isCompleted: true,
    },
    {
      id: '11-' + uniqueId(),
      title: 'Implement UI library',
      desc: 'Vuetify is like MUI but Vue.',
      isCompleted: true,
    },
    {
      id: '12-' + uniqueId(),
      title: 'Dockerize app',
      desc: 'So developers can run the same source code as indended',
      isCompleted: true,
    },
    {
      id: '13-' + uniqueId(),
      title: 'Bundle app with Vite',
      desc: '',
      isCompleted: true,
    },
  ];
}
