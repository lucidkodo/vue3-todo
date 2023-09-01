import { TodoItem } from './types';

/**
 * Simple ID generator using the epoch time
 *
 * @returns total ms since epoch in string
 */
export function uniqueId(): string {
  return new Date().getTime().toString();
}

export function getDefaultTodos(): TodoItem[] {
  // postfix default item or else they are not unique.
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
