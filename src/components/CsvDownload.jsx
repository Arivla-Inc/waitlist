"use client";
import json2csv from "json2csv";

const CsvDownload = ({ dataArray }) => {
  // const [dataArray] = useState([
  //   { name: 'John', age: 30 },
  //   { name: 'Jane', age: 25 },
  //   { name: 'Doe', age: 35 },
  // ]);

  const handleDownload = () => {
    // Convert array data to CSV format
    const csvData = json2csv.parse(dataArray);

    // Create a Blob object with the CSV data
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a URL for the Blob object
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.csv";

    // Append the <a> element to the document body and click it
    document.body.appendChild(a);
    a.click();

    // Remove the <a> element from the document body
    document.body.removeChild(a);

    // Revoke the URL to release the Blob object
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-3 transition-all bg-black hover:opacity-80"
    >
      <span className="text-sm text-white">Download .CSV</span>
    </button>
  );
};

export default CsvDownload;
