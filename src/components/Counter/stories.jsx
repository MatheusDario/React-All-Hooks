import { Counter } from '.';

export default {
  title: 'Counter',
  component: Counter,
  args: {
    children: 'Counter',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Counter {...args} />
    </div>
  );
};
