import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { useChangeBgColor } from "src/hooks/useChangeBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useChangeBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
}
