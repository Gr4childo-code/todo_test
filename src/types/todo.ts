export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}
export type FilterValueType = 'All' | 'Completed' | 'Active';
export interface RefObject<T> {
  value: any;
  readonly current: T | null;
}
export type PropsTodo = {
  TODOS?: Array<Todo> | null;
  removeTodo?: () => void;
  changeFilter?: (value: FilterValueType) => void;
  changeChecked?: (id: string) => void;
  handleClick?: (e: { preventDefault: () => void }) => void;
  inputNameFormRef?: any;
  filterName?: FilterValueType;
  left?: number | null;
};
export type PropsButton = {
  text?: string;
  filterName?: FilterValueType;
  onClick?: () => void;
};
