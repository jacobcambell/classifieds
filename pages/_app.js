import "../styles/globals.css";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import QueryProvider from "../components/QueryProvider/QueryProvider";

function MyApp({ Component, pageProps }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </QueryProvider>
  );
}

export default MyApp;
