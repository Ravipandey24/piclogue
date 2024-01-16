"use client";

import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";

function UIProvider({ children }: { children: React.ReactNode }) {
  // Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
}
export default UIProvider;
