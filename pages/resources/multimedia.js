import React from 'react'

// Mock data for multimedia content. In a real application, this would come from a CMS or API.
const multimediaData = [
  {
    id: 1,
    title: 'Our Community in Action: Summer 2023',
    description: 'A look into our summer programs and the positive impact they have on local youth.',
    thumbnailUrl: '/assets/garden-project.png',
    contentUrl: 'https://www.youtube.com/watch?v=example', // Replace with your actual video URL
    type: 'Video',
  },
  {
    id: 2,
    title: '2023 Annual Gala Highlights',
    description: 'A photo gallery from our most successful fundraising event of the year.',
    thumbnailUrl: '/assets/garden-project.png',
    contentUrl: '/gallery/annual-gala-2023', // Example link to a gallery page
    type: 'Photo Gallery',
  },
  {
    id: 3,
    title: 'Interview with Our Director',
    description: 'Our director discusses the future vision and upcoming projects for Sun Youth.',
    thumbnailUrl: '/assets/garden-project.png',
    contentUrl: 'https://www.youtube.com/watch?v=example2', // Replace with your actual video URL
    type: 'Video',
  },
  {
    id: 4,
    title: 'Youth Art Exhibition 2023',
    description: 'Explore the incredible artwork created by participants in our youth art program.',
    thumbnailUrl: '/assets/garden-project.png',
    contentUrl: '/gallery/youth-art-2023', // Example link to a gallery page
    type: 'Photo Gallery',
  },
];

// It's a convention in React to name components with PascalCase.
function MultimediaPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Multimedia Gallery</h1>
        <p style={styles.subtitle}>
          Watch videos and browse photo galleries of our latest events and activities.
        </p>
      </header>

      <main style={styles.grid}>
        {multimediaData.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={item.thumbnailUrl} alt={`Thumbnail for ${item.title}`} style={styles.cardImage} />
            </div>
            <div style={styles.cardContent}>
              <span style={styles.cardCategory}>{item.type}</span>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDescription}>{item.description}</p>
              <a href={item.contentUrl} target="_blank" rel="noopener noreferrer" style={styles.viewLink}>
                {item.type === 'Video' ? 'Watch Video' : 'View Gallery'}
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
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
  imageContainer: { position: 'relative' },
  cardImage: { width: '100%', height: '200px', objectFit: 'cover', display: 'block' },
  cardContent: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  cardCategory: { color: '#4f46e5', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' },
  cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' },
  cardDescription: { color: '#6b7280', flexGrow: 1, marginBottom: '1rem' },
  viewLink: { color: '#fff', backgroundColor: '#b20933', padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none', textAlign: 'center', fontWeight: '500', transition: 'background-color 0.2s' },
};

export default MultimediaPage;