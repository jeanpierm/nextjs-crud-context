import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useTasks } from '../context/taskContext';
import { useForm } from '../hooks/useForm';

const TaskFormPage = () => {
  const router = useRouter();
  const [task, handleChange, reset] = useForm({ title: '', description: '' });
  const { createTask, updateTask, tasks } = useTasks();
  const { id } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateTask(id, task);
    } else {
      createTask(task);
    }
    router.push('/');
  };

  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === id);
      reset(task);
    }
  }, []);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4">
          <h1 className="text-3xl mb-7">
            {id ? 'Edit a task' : 'Create a task'}
          </h1>
          <input
            className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
            type="text"
            placeholder="Write a title"
            onChange={handleChange}
            value={task.title}
            name="title"
          />
          <textarea
            className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
            rows="2"
            placeholder="Write a description"
            onChange={handleChange}
            value={task.description}
            name="description"
          ></textarea>
          <button
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-sm disabled:opacity-30"
            disabled={!task.title}
          >
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default TaskFormPage;
