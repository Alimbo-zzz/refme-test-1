import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "~@/styles/global/index.scss";`, // Автоматически добавляет миксины
  },
};

export default nextConfig;
