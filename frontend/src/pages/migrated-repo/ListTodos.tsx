import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';

interface Todo {
  name: string;
  category: string;
}

interface ListTodosResponse {
  name: string;
  todos: Todo[];
  errorMessage?: string;
}

const ListTodos: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/list-todos.do', {
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ListTodosResponse = await response.json();
        setName(data.name);
        setTodos(data.todos);
        setErrorMessage(data.errorMessage ?? '');
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <h1>Todos for {name}</h1>
        {loading && <p>Loading...</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {!loading && !errorMessage && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.name}>
                {todo.name} - {todo.category}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ListTodos;