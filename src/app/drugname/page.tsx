import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

interface Drug {
  id: number;
  name: string;
  reason: string;
}

const bannedDrugs: Drug[] = [
  { id: 1, name: "Ranitidine", reason: "Carcinogenic impurity" },
  { id: 2, name: "Nimesulide", reason: "Hepatotoxicity" },
  { id: 3, name: "FDC of Metformin and Rosiglitazone", reason: "Adverse cardiovascular effects" },
];

const nonBannedDrugs: Drug[] = [
  { id: 1, name: "Paracetamol", reason: "Safe under recommended dosage" },
  { id: 2, name: "Ibuprofen", reason: "Safe for pain relief" },
  { id: 3, name: "Amoxicillin", reason: "Effective antibiotic" },
];

const DrugName: React.FC = () => {
  return (
    <DefaultLayout>

    
      <div className="min-h-screen bg-gray-100 p-6  dark:bg-[#121212]">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Indian Government Drug Status
      </h1>

      {/* Tables Section */}
        <div className="flex flex-col md:flex-row gap-8 text-black ">
        {/* Banned Drugs */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-rose-500 text-black text-center py-3">
            <h2 className="text-xl font-semibold">Banned Drugs</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead className="bg-red-100 text-red">
              <tr>
                <th className="px-6 py-3 border-b">#</th>
                <th className="px-6 py-3 border-b">Drug Name</th>
                <th className="px-6 py-3 border-b">Reason</th>
              </tr>
            </thead>
            <tbody>
              {bannedDrugs.map((drug, index) => (
                <tr
                  key={drug.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-red"
                    } hover:bg-red-100`}
                >
                  <td className="px-6 py-4 border-b">{drug.id}</td>
                  <td className="px-6 py-4 border-b">{drug.name}</td>
                  <td className="px-6 py-4 border-b">{drug.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Non-Banned Drugs */}
        <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-500 text-white text-center py-3">
            <h2 className="text-xl font-semibold">Non-Banned Drugs</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="px-6 py-3 border-b">#</th>
                <th className="px-6 py-3 border-b">Drug Name</th>
                <th className="px-6 py-3 border-b">Reason</th>
              </tr>
            </thead>
            <tbody>
              {nonBannedDrugs.map((drug, index) => (
                <tr
                  key={drug.id}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-green-500"
                    } hover:bg-green-100`}
                >
                  <td className="px-6 py-4 border-b">{drug.id}</td>
                  <td className="px-6 py-4 border-b">{drug.name}</td>
                  <td className="px-6 py-4 border-b">{drug.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center space-y-4 pt-20">
          <p className="text-lg text-gray-700 font-medium">
            Click the link below to search for drug details like Molecule Structure and other information.
          </p>
          <h2>
            <Link
              href="/research"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              Go for Search
            </Link>
          </h2>
        </div>

    </div>
    </DefaultLayout>
  );
};

export default DrugName;
