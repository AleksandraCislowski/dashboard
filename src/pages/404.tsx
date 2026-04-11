import NextErrorComponent from "next/error";

const NotFoundPage = () => {
  return <NextErrorComponent statusCode={404} />;
};

export default NotFoundPage;
