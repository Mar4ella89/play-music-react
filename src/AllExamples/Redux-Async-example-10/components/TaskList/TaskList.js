import { useSelector } from 'react-redux';

import { selectTasks, selectStatusFilter } from '../../redux/selectors';
import { Task } from '../Task/Task';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';

import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(selectTasks);
  // Получаем значение фильтра из состояния Redux
  const statusFilter = useSelector(selectStatusFilter);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
