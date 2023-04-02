import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <img
        src={'https://media.tenor.com/SshcJak1sYAAAAAj/star-wars-star.gif'}
      />
      <h1>Загрузка...</h1>
    </div>
  );
};
