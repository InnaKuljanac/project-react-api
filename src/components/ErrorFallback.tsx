import { getErrorMessage, type FallbackProps } from "react-error-boundary"

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="mx-auto my-12 max-w-lg rounded-2xl border border-(--color-error) bg-(--color-card) p-8 text-center shadow-sm">
      <h2 className="text-xl font-bold text-(--color-error)">Något gick fel</h2>
      <p className="mt-3 wrap-break-word text-sm leading-6 text-(--color-text-secondary)">{getErrorMessage(error)}</p>
      <button
        className="mt-6 rounded-lg bg-(--color-primary-dark) px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-dark)"
        onClick={resetErrorBoundary}>
        Försök igen
      </button>
    </div>
  )
}

export default ErrorFallback
