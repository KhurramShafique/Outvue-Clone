import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="section max-w-3xl pt-40 sm:pt-48">
      <FadeIn>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
        <span className="eyebrow mt-8 block">{post.category}</span>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-white/40">
          {post.date} · {post.readTime}
        </p>
        <div className="mt-10 space-y-5 text-white/70 leading-relaxed">
          <p>{post.excerpt}</p>
          <p>
            This is placeholder long-form content for the Outvue blog. Replace this section with
            your CMS-driven article body, images, and pull quotes when you connect a content
            source such as Contentful, Sanity, or MDX files.
          </p>
        </div>
      </FadeIn>
    </article>
  );
}
