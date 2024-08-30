import type { Metadata } from "next";
import LoginPage from "./loginpage";

export const metadata: Metadata = {
  title: "Login Page",
};

export default function Page() {
  return <LoginPage />;
}
