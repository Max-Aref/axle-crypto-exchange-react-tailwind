import React from "react";

/**
 * ErrorBoundary Component
 * Catches React errors and displays a user-friendly fallback UI
 * Critical for production stability
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // Send to error tracking service (e.g., Sentry)
    // Sentry.captureException(error, { contexts: { react: { errorInfo } } });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-darkblue text-white'>
          <div className='container mx-auto px-4 text-center max-w-[600px]'>
            {/* Error Icon */}
            <div className='mb-8'>
              <div className='text-6xl mb-4'>⚠️</div>
              <h1 className='text-4xl font-bold mb-4'>
                Oops! Something went wrong
              </h1>
              <p className='text-lg text-gray mb-8'>
                We're sorry for the inconvenience. Our team has been notified
                and is working on a fix.
              </p>
            </div>

            {/* Error Details (Dev Only) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className='mb-8 p-4 bg-red-900/20 border border-red-500 rounded-lg text-left'>
                <p className='font-mono text-sm break-words'>
                  <strong>Error:</strong> {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button
                onClick={this.handleReset}
                className='btn px-8 bg-blue hover:bg-blue-hover'
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className='btn px-8 bg-white/10 hover:bg-white/20'
              >
                Go to Home
              </button>
            </div>

            {/* Help Text */}
            <p className='mt-8 text-sm text-gray'>
              If the problem persists, please{" "}
              <a
                href='mailto:support@axle.com'
                className='text-blue hover:underline'
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
