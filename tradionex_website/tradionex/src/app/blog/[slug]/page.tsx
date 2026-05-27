import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-24 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center text-sm mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
          <span className="font-semibold text-blue-600 dark:text-blue-400">{post.author || "Tradionex Team"}</span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
          <span className="text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        {post.imageUrl && (
          <div className="aspect-[21/9] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-12 overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none prose-blue">
          {/* We are storing raw text in this simple version, but if it was HTML/Markdown we would render it differently. 
              Since it's a simple textarea on the admin panel, we'll split by newline and render paragraphs. */}
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() ? (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {paragraph}
              </p>
            ) : <br key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
