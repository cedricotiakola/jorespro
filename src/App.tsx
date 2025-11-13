import { Download } from 'lucide-react';
import CVContent from './components/CVContent';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 print:py-0">
      <div className="max-w-4xl mx-auto px-4 print:px-0">
        <button
          onClick={handlePrint}
          className="mb-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors print:hidden"
        >
          <Download size={20} />
          Télécharger en PDF
        </button>

        <CVContent />
      </div>
    </div>
  );
}

export default App;
