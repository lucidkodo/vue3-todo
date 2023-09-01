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
      title: 'Walk Philly',
      desc: 'Bring plastic bag',
      isCompleted: false,
    },
  ];
}
