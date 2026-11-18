import { useState, useEffect } from 'react'

function Reading() {

  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Metamorphosis',
      author: 'Franz Kafka',
      totalPages: 100,
      pagesRead: 0,
    },
    {
      id: crypto.randomUUID(),
      title: '1984',
      author: 'George Orwell',
      totalPages: 200,
      pagesRead: 0,
    },
    {
      id: crypto.randomUUID(),
      title: 'Animal Farm',
      author: 'George Orwell',
      totalPages: 150,
      pagesRead: 0,
    },
    {
      id: crypto.randomUUID(),
      title: 'The Stranger',
      author: 'Albert Camus',
      totalPages: 100,
      pagesRead: 0,
    }
  ]);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  books.map(book => {
    const progress = (book.pagesRead / book.totalPages) * 100;
  });

  return (
    <main>
      <Header>
        <h1>Welcome back</h1>
      </Header>

      <section className='AddingBooksInterface'>

      </section>

      <section className='AddedBooks'>

      </section>
    </main>
  );
}

export default Reading
