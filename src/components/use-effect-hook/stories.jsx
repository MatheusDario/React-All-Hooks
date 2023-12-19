import { Hookuseefect } from '.';

export default {
  title: 'Hookuseefect',
  component: Hookuseefect,
  args: {
    children: 'Hook do useEffect',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Hookuseefect {...args} />
    </div>
  );
};
