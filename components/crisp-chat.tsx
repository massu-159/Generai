"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("399784ec-6af2-4b38-a84c-0bd2a1b2a1c5");
  }, []);

  return null;
};
