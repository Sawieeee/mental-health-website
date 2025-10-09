import { cookies } from "next/headers";
import NavbarClient from "./NavbarClient";

export default function Navbar() {
  const isLoggedIn = Boolean(cookies().get("auth")?.value);
  return <NavbarClient isLoggedIn={isLoggedIn} />;
}
