export interface TodoItem {
  id: string;
  title: string;
  desc: string;
  isCompleted: boolean;
}

// Event interfaces
export interface TodoEvent {
  (event: 'done', id: TodoItem['id']): void;
  (event: 'restore', id: TodoItem['id']): void;
  (event: 'delete', id: TodoItem['id']): void;
}

export interface ColumnEvent extends TodoEvent {
  (event: 'clear', column: string): void;
}
