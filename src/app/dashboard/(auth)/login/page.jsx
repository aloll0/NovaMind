"use client";

import { Suspense } from "react";
import Login from "./Login";

export const dynamic = "force-dynamic"; 

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Login />
    </Suspense>
  );
}
