import React from 'react'

// Mock data for publications. In a real application, you would likely fetch this
// from a CMS or an API.
const publicationsData = [
  {
    id: 1,
    title: 'Annual Report 2023',
    description: 'A comprehensive overview of our activities and financial performance in 2023.',
    // It's best to place images in the `public` directory
    imageUrl: '/assets/garden-project.png',
    fileUrl: '/files/annual-report-2023.pdf',
    category: 'Annual Report',
  },
  {
    id: 2,
    title: 'Summer Program Guide 2023',
    description: 'Discover the exciting programs and activities we have planned for the youth this summer.',
    imageUrl: '/assets/garden-project.png',
    fileUrl: '/files/summer-guide-2023.pdf',
    category: 'Brochure',
  },
  {
    id: 3,
    title: 'Quarterly Newsletter - Q2 2023',
    description: 'The latest news, stories, and updates from our community for the second quarter.',
    imageUrl: '/assets/garden-project.png',
    fileUrl: '/files/newsletter-q2-2023.pdf',
    category: 'Newsletter',
  },
  {
    id: 4,
    title: 'Annual Report 2022',
    description: 'A look back at our achievements and milestones from the year 2022.',
    imageUrl: '/assets/garden-project.png',
    fileUrl: '/files/annual-report-2022.pdf',
    category: 'Annual Report',
  },
];

// It's a convention in React to name components with PascalCase.
function PublicationPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Our Publications</h1>
        <p style={styles.subtitle}>
          Explore our annual reports, newsletters, and other documents.
        </p>
      </header>

      <main style={styles.grid}>
        {publicationsData.map((pub) => (
          <div key={pub.id} style={styles.card}>
            <img src={pub.imageUrl} alt={`Cover for ${pub.title}`} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <span style={styles.cardCategory}>{pub.category}</span>
              <h3 style={styles.cardTitle}>{pub.title}</h3>
              <p style={styles.cardDescription}>{pub.description}</p>
              <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer" style={styles.downloadLink}>
                Download PDF
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
  cardImage: { width: '100%', height: '200px', objectFit: 'cover' },
  cardContent: { padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 },
  cardCategory: { color: '#4f46e5', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' },
  cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' },
  cardDescription: { color: '#6b7280', flexGrow: 1, marginBottom: '1rem' },
  downloadLink: { color: '#fff', backgroundColor: '#b20933', padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none', textAlign: 'center', fontWeight: '500', transition: 'background-color 0.2s' },
};

export default PublicationPage;