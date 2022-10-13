import reactTestRenderer from 'react-test-renderer';
import Todo from '../Todo';

test('Todo - should create snapshot', () => {
  const component = reactTestRenderer.create(
    <Todo
      todos={[
        { title: 'item1', description: 'des item 1' },
        { title: 'item2', description: 'desc item 2' },
      ]}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
