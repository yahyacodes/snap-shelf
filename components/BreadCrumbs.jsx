const Breadcrumbs = () => {
  return (
    <nav className="text-sm mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex text-gray-600">
        <li>
          <a href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </a>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="text-gray-500">Snippets</li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
