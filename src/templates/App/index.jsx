import * as Styled from './styles';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';

export const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        <Styled.Container>
          <Posts />
        </Styled.Container>
      </PostsProvider>
    </CounterProvider>
  );
};
