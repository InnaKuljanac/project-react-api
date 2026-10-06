import { getErrorMessage, type FallbackProps } from "react-error-boundary"

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="mx-auto my-12 max-w-lg rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-rose-800">Något gick fel</h2>
      <p className="mt-3 break-words text-sm leading-6 text-rose-700">{getErrorMessage(error)}</p>
      <button
        className="mt-6 rounded-lg bg-rose-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
        onClick={resetErrorBoundary}>
        Försök igen
      </button>
    </div>
  )
}

export default ErrorFallback
