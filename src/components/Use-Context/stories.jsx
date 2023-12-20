import { UseContext, Container } from '.';

export default {
  title: 'UseContext',
  component: UseContext,
  args: {},
};
export const Template = () => {
  return (
    <div>
      <Container>
        <UseContext />
      </Container>
    </div>
  );
};
