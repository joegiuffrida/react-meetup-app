import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore the full React Course" />
    </div>
  );
};

export default App;
