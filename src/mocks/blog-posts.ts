export interface Post {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
}

export const posts:Post[] = [
  {
    slug: 'test',
    date: '2023-07-01',
    title: 'Test',
    summary:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere libero, ipsa quia maiores adipisci fuga ullam obcaecati voluptas, laborum nobis tempora nam rem illum eligendi reiciendis veritatis aspernatur distinctio corporis.',
    tags: ['test', 'test2', 'test3'],
  },
  {
    slug: 'test2',
    date: '2024-07-01',
    title: 'Test',
    summary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus, nemo veniam nobis sit numquam quasi maiores quo repudiandae laborum nam voluptates animi dolores reprehenderit dolorum eum, minima aut culpa, minus quos! Similique et facilis, doloremque dolor sint assumenda accusantium consectetur dolorem dolores ratione nesciunt repudiandae nemo neque, explicabo nobis.',
    tags: ['test', 'test2', 'test3'],
  },
];
