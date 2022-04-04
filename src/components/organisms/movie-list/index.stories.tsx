import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { MovieList } from './index';
import { MovieProps } from './types';

export const dataFake: MovieProps[] = [
  {
    id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    title: 'Castle in the Sky',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    release_date: '1986',
  },
  {
    id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
    title: 'Grave of the Fireflies',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qG3RYlIVpTYclR9TYIsy8p7m7AT.jpg',
    description:
      'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.',
    release_date: '1988',
  },
];

storiesOf('organisms/movie-list', module)
  .add('empty', () => <MovieList data={[]} cbActiveSlide={() => {}} />)
  .add('data', () => <MovieList data={dataFake} cbActiveSlide={() => {}} />);
