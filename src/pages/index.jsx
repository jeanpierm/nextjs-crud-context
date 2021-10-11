import { useRouter } from 'next/router';
import { VscTrash } from 'react-icons/vsc';
import Layout from '../components/Layout';
import { useTasks } from '../context/taskContext';

const Home = () => {
  const router = useRouter();
  const { tasks, deleteTask } = useTasks();

  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>There are no tasks</h2>
        ) : (
          <div className="w-7/12">
            {tasks.map((task, i) => (
              <div
                key={task.id}
                onClick={() => router.push(`/edit/${task.id}`)}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start items-center"
              >
                <span className="text-5xl mr-5">{i + 1}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                    <button
                      className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded inline-flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id);
                      }}
                    >
                      <VscTrash className="mr-2" />
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
