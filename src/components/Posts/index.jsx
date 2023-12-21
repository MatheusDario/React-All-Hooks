import { useContext, useEffect, useRef } from 'react';
import * as Styled from './styled';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <Styled.Container>
      {postsState.loading && (
        <Styled.Title>Os Posts estão Carregando...</Styled.Title>
      )}
      <Styled.Title>Counter: {counterState.counter}</Styled.Title>
      <Styled.Button onClick={() => incrementCounter(counterDispatch)}>
        Incremente Counter
      </Styled.Button>
      <Styled.Button onClick={() => decrementCounter(counterDispatch)}>
        Decremente Counter
      </Styled.Button>
      {postsState.posts.map((post) => (
        <Styled.Container key={post.id}>
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.Content>{post.body}</Styled.Content>
        </Styled.Container>
      ))}
    </Styled.Container>
  );
};
