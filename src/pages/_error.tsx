import NextErrorComponent, { ErrorProps } from "next/error";

const ErrorPage = (props: ErrorProps) => {
  return <NextErrorComponent {...props} />;
};

ErrorPage.getInitialProps = NextErrorComponent.getInitialProps;

export default ErrorPage;
