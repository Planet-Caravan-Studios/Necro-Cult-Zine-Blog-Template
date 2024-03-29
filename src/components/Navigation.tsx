import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts/") ? "active" : null}>Blog</a>
            </Link>
          </li>
        </ul>

        
      </div>
    </>
  );
}
