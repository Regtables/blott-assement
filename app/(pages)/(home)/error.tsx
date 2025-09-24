'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="px-mobile-x lg:px-desktop-x text-center py-20">
      <h2 className="text-[80px] font-albra">Failed to load news</h2>
      <p className="mb-6 font-helvetica text-2xl">Something went wrong loading the latest news.</p>
      <button
        onClick={reset}
        className="px-6 py-2 bg-white text-black hover:bg-gray-200 rounded-md transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}