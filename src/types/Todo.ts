export interface Todo {
  id: string;
  collectionId: string;
  timestamp: number;
  body: string;
  isCompleted: boolean;
  isImportant: boolean;
}
