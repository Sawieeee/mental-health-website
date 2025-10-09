import { cookies } from "next/headers";
import NavbarClient from "./NavbarClient";

export default async function Navbar() {
  const isLoggedIn = Boolean((await cookies()).get("auth")?.value);
  return <NavbarClient isLoggedIn={isLoggedIn} />;
}
