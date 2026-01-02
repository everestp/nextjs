import { Heart, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div  className="max-w-6xl mx-auto px-4 py-12">


    {/* Hero Section */}
<div className="text-center mb-16">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
  Welcome to my Website
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        This  is the simple website built with the nextjks and tailwindcss for the learning puporse
    </p>
    <div className="space-x-4">
    <button>
        Get Started
    </button>
    <button className="bordfer border-gray-300">
 Learn More
    </button>
    </div>
</div>

{/* Feature Section */}

    <div className="grid md:grid-cols-3 gap-8 mb-16">
    {/* next icon */}
<div className="text-center p-6 bg-white rounded-lg shadow-sm border  border-gray-200">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center  justify-center mx-auto mb-4">
 <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
</div>
<h3 className="text-xl font-semibold text-gray-900"></h3>
<p className="italic text-gray-600 ">Built With Modern Tech for Optimal</p>
</div>
{/* next icon */}
<div className="text-center p-6 bg-white rounded-lg shadow-sm border  border-gray-200">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center  justify-center mx-auto mb-4">

              <ThumbsUpIcon className="text-green-500"/>
</div>
<h3 className="text-xl font-semibold text-gray-900"></h3>
<p>Built With Modern Tech for Optimal</p>
</div>

{/* next icon */}

<div className="text-center p-6 bg-white rounded-lg shadow-sm border  border-gray-200">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center  justify-center mx-auto mb-4">
<Heart/>
</div>
<h3 className="text-xl font-semibold text-gray-900"></h3>
<p>Built With Modern Tech for Optimal</p>
</div>

</div>


    </div>
  );
}
