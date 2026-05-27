import { prisma } from "@/lib/prisma";
import GalleryManager from "./GalleryManager";

export const dynamic = 'force-dynamic';

export default async function GalleryAdminPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <GalleryManager initialImages={images} />;
}
