import * as React from "react";

export interface ErrorBoundaryProps {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryProps {
    return { hasError: true };
  }

  public render(): React.ReactElement | React.ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something is wrong</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
