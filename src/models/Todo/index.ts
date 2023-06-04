interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export class Todo implements TodoInterface {
  id: number;
  userId: number;
  title: string;
  body: string;

  constructor(id: number, userId: number, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}

export type TodoModel = TodoInterface;
export type CreateTodoModel = Omit<TodoInterface, 'id'>;
export type UpdateTodoModel = TodoInterface;
