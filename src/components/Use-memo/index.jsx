import P from 'prop-types';
import * as Styled from './styled';
import { useEffect, useMemo, useState, useRef } from 'react';

const Posts = ({ post, handleClick }) => {
  console.log('Filho renderizado');

  return (
    <Styled.Container key={post.id}>
      <Styled.SubTitle onClick={() => handleClick(post.title)}>
        {post.title}
      </Styled.SubTitle>
      <Styled.Paragraph>{post.body}</Styled.Paragraph>
    </Styled.Container>
  );
};

Posts.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

export const Usememo = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 3000);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);

  const handleClick = (value) => {
    setValue(value);
  };

  console.log('Pai Renderizado');

  return (
    <Styled.Container>
      <Styled.Input
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="search"
      />
      {!!value && <Styled.Title>Valor digitado: {value}</Styled.Title>}

      <Styled.Title>{children}</Styled.Title>
      {useMemo(
        () =>
          posts.length > 0 ? (
            posts.map((post) => (
              <Posts key={post.id} post={post} handleClick={handleClick} />
            ))
          ) : (
            <Styled.Title>Seus Posts estão sendo carregados</Styled.Title>
          ),
        [posts],
      )}
    </Styled.Container>
  );
};

Usememo.propTypes = {
  children: P.node.isRequired,
};
