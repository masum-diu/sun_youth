import React from 'react'

// Mock data for news/blog posts. In a real application, this would come from a CMS or API.
const newsData = [
  {
    id: 1,
    title: 'Community Garden Project a Huge Success',
    excerpt: 'Our new community garden has brought together volunteers of all ages, producing fresh vegetables for local families and fostering a sense of community.',
    imageUrl: '/assets/garden-project.png',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    slug: 'community-garden-success', // Used for the URL, e.g., /news/community-garden-success
  },
  {
    id: 2,
    title: 'Sun Youth Awarded Grant for After-School Programs',
    excerpt: 'We are thrilled to announce that we have received a generous grant to expand our after-school tutoring and sports activities for the upcoming year.',
    imageUrl: '/assets/garden-project.png',
    author: 'John Smith',
    date: 'October 15, 2023',
    slug: 'grant-for-after-school-programs',
  },
  {
    id: 3,
    title: 'A Look Back at Our Summer Camp Adventures',
    excerpt: 'From hiking and swimming to arts and crafts, our summer camp was filled with unforgettable moments. See the highlights and hear from our campers.',
    imageUrl: '/assets/garden-project.png',
    author: 'Emily White',
    date: 'September 28, 2023',
    slug: 'summer-camp-adventures-2023',
  },
];

// It's a convention in React to name components with PascalCase.
function NewsBlogsPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>News & Blog</h1>
        <p style={styles.subtitle}>
          Stay up to date with our latest stories, announcements, and community highlights.
        </p>
      </header>

      <main style={styles.grid}>
        {newsData.map((post) => (
          <div key={post.id} style={styles.card}>
            <img src={post.imageUrl} alt={`Image for ${post.title}`} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <div style={styles.cardMeta}>
                <span>By {post.author}</span>
                <span style={styles.dot}>•</span>
                <span>{post.date}</span>
              </div>
              <h3 style={styles.cardTitle}>{post.title}</h3>
              <p style={styles.cardExcerpt}>{post.excerpt}</p>
              <a href={`/news/${post.slug}`} style={styles.readMoreLink}>
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    padding: '2rem',
    backgroundColor: '#f9fafb',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: '#6b7280',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1700px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  cardImage: { width: '100%', height: '200px', objectFit: 'cover' },
  cardContent: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  cardMeta: { display: 'flex', alignItems: 'center', color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.75rem' },
  dot: { margin: '0 0.5rem' },
  cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.75rem 0', color: '#111827' },
  cardExcerpt: { color: '#4b5563', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.6' },
  readMoreLink: { color: '#b20933', textDecoration: 'none', fontWeight: '600', alignSelf: 'flex-start' },
};

export default NewsBlogsPage;