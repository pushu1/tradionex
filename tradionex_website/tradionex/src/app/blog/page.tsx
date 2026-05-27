import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 dark:border-gray-800 pb-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">Insights & News</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-light">
              Latest industry updates, market analysis, and corporate news from Tradionex.
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            No published blog posts yet. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6 overflow-hidden relative">
                  {post.imageUrl ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                  )}
                </div>
                <div className="flex items-center text-sm mb-3">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{post.author || "Tradionex Team"}</span>
                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                  <span className="text-gray-500 dark:text-gray-400">{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                  {post.content.substring(0, 150)}...
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Read Article <ArrowRight className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
