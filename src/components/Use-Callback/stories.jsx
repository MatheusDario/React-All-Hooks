import { Callback } from '.';

export default {
  title: 'Callback',
  component: Callback,
  args: {
    children: 'Callback',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Callback {...args} />
    </div>
  );
};
