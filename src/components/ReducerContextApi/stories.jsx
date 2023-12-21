import { ReducerContext } from '.';

export default {
  title: 'ReducerContext',
  component: ReducerContext,
  args: {
    children: 'ReducerContext',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <ReducerContext {...args} />
    </div>
  );
};
