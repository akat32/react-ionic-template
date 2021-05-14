import React from 'react';
// import Error from 'pages/Error/Error';

interface PropsTypes {
}

interface StateTypes {
  hasError: Boolean,
  error: any
}

class ErrorBoundary extends React.Component<PropsTypes, StateTypes> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = { 
      hasError: false, 
      error: ''
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error };
  }

  render() {
    if (this.state.hasError) {
      return <div>{this.state.error.toString()}</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;