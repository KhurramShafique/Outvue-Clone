import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Outbound strategy, product updates, and playbooks for teams running personalized video at scale.",
};

export default function BlogPage() {
  return (
    <section className="section pt-40 sm:pt-48">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center">
          <Badge>Blog</Badge>
        </div>
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
          Notes on outbound, video, and pipeline
        </h1>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.1}>
            <Link
              href={`/blog/${post.slug}`}
              className="group glass glass-hover flex h-full flex-col rounded-3xl p-7"
            >
              <span className="eyebrow">{post.category}</span>
              <h2 className="mt-4 font-display text-lg font-semibold text-white">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                <span>
                  {post.date} · {post.readTime}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
