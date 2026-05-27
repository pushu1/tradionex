import { prisma } from "@/lib/prisma";
import GalleryView from "./GalleryView";

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryView initialImages={images} />
      </div>
    </div>
  );
}
