import { prisma } from "@/lib/prisma";
import BlogManager from "./BlogManager";

export const dynamic = 'force-dynamic'; // Ensures this page isn't statically cached with old data

export default async function BlogAdminPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" }
  });

  return <BlogManager initialPosts={posts} />;
}
