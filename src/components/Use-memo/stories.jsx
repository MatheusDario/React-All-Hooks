import { Usememo } from '.';

export default {
  title: 'Usememo',
  component: Usememo,
  args: {
    children: 'Utilizando o Hook useMemo e useRef',
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Usememo {...args} />
    </div>
  );
};
