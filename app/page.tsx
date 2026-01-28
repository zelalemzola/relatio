import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center text-center space-y-8 p-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Re<span className="text-blue-600">la</span>
            <span className="text-pink-500">t</span>io
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Relationship Advice Quiz App
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/quiz"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Quiz
          </Link>
          <p className="text-sm text-gray-500">
            Take a 3-minute quiz to get personalized relationship advice
          </p>
        </div>
      </main>
    </div>
  );
}
