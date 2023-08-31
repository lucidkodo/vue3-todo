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
  return [
    {
      id: '1-' + uniqueId(),
      title: 'Learn Vue3 API',
      desc: '',
      isCompleted: true,
    },
    {
      id: '2-' + uniqueId(),
      title: 'Walk Philly',
      desc: 'Bring plastic bag',
      isCompleted: false,
    },
    {
      id: '3-' + uniqueId(),
      title: 'Buy new keyboard',
      desc: '',
      isCompleted: false,
    },
  ];
}
