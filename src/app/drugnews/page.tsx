import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

const newsData = [
    {
        id: 1,
        title: "New Breakthrough in Cancer Treatment",
        description:
            "Researchers have developed a revolutionary drug that shows promising results in treating advanced cancer stages.",
        image: "https://via.placeholder.com/400x200?text=Cancer+Breakthrough",
        source: "Healthline",
        date: "November 18, 2024",
    },
    {
        id: 2,
        title: "FDA Approves New Diabetes Medication",
        description:
            "The FDA has approved a new medication that significantly reduces the risk of complications for Type-2 diabetes patients.",
        image: "https://via.placeholder.com/400x200?text=Diabetes+Medication",
        source: "FDA News",
        date: "November 16, 2024",
    },
    {
        id: 3,
        title: "Global Recall of Contaminated Drugs",
        description:
            "Several batches of blood pressure medications have been recalled globally due to contamination concerns.",
        image: "https://via.placeholder.com/400x200?text=Drug+Recall",
        source: "WHO",
        date: "November 14, 2024",
    },
];

const DrugNews = () => {
    return (
        <DefaultLayout>

       
        <div className="min-h-screen bg-gray-100 p-6 dark:bg-[#121212]">
            {/* Header */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                Drug News Feed
            </h1>

            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((news) => (
                    <div
                        key={news.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-48 object-cover"
                        />
                        {/* Content */}
                        <div className="p-4 text-black">
                            <h2 className="text-lg font-bold  mb-2">
                                {news.title}
                            </h2>
                            <p className="text-sm text-gray-600 mb-4">{news.description}</p>
                            <div className="text-sm text-gray-500 flex justify-between">
                                <span>{news.source}</span>
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </DefaultLayout>
    );
};

export default DrugNews;
