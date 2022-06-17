export default function Footer({ copyright, reports }) {
  return <footer className="px-8 py-4 bg-emerald-500">
    <p>&copy;{copyright}</p>
    {reports.length > 0 &&
      <p>{reports.length} Locations World Wide</p>
    }
  </footer>


}