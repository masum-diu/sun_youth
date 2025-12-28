import React from 'react'

// In a real application, this data might come from a shared source or a dedicated API endpoint.
// For this example, we'll use a filtered version of the publications data.
const reportData = [
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
    id: 4,
    title: 'Annual Report 2022',
    description: 'A look back at our achievements and milestones from the year 2022.',
    imageUrl: '/assets/garden-project.png',
    fileUrl: '/files/annual-report-2022.pdf',
    category: 'Annual Report',
  },
];

// It's a convention in React to name components with PascalCase.
function ReportPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Annual Reports</h1>
        <p style={styles.subtitle}>
          Review our yearly progress, achievements, and financial statements.
        </p>
      </header>

      <main style={styles.grid}>
        {reportData.map((report) => (
          <div key={report.id} style={styles.card}>
            <img src={report.imageUrl} alt={`Cover for ${report.title}`} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{report.title}</h3>
              <p style={styles.cardDescription}>{report.description}</p>
              <a href={report.fileUrl} target="_blank" rel="noopener noreferrer" style={styles.downloadLink}>
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
  cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' },
  cardDescription: { color: '#6b7280', flexGrow: 1, marginBottom: '1rem' },
  downloadLink: {
    color: '#fff',
    backgroundColor: '#b20933',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};

export default ReportPage;