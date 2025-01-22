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

export type PropsTodoForm = {
  handleClick?: (e: { preventDefault: () => void }) => void;
  inputNameFormRef: any;
  visibleTodo?: boolean;
  setVisibleTodo?: React.Dispatch<React.SetStateAction<boolean>>;
};
export type PropsButton = {
  children?: React.ReactNode;
  filterName?: FilterValueType;
  onClick?: () => void;
};
