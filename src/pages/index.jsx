import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-[var(--ifm-color-primary-lightest)] dark:border-[var(--ifm-color-primary-darkest)] z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">
            Mead Making Wiki
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/docs/intro" className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] hover:text-[var(--ifm-color-primary-darker)] dark:hover:text-[var(--ifm-color-primary-light)] transition-colors">
              Documentation
            </Link>
            <Link to="/blog" className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] hover:text-[var(--ifm-color-primary-darker)] dark:hover:text-[var(--ifm-color-primary-light)] transition-colors">
              Blog
            </Link>
            <a 
              href="https://reddit.com/r/mead" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] hover:text-[var(--ifm-color-primary-darker)] dark:hover:text-[var(--ifm-color-primary-light)] transition-colors"
            >
              r/mead
            </a>
            <a 
              href="https://discord.gg/mead" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] hover:text-[var(--ifm-color-primary-darker)] dark:hover:text-[var(--ifm-color-primary-light)] transition-colors"
            >
              Discord
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function HomepageHeader() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-10 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)] leading-tight">
          Welcome to the Mead Making Wiki
        </h1>
        <p className="text-2xl mb-12 text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] leading-relaxed max-w-3xl mx-auto">
          Your comprehensive guide to the ancient art of mead making. From traditional recipes to modern techniques,
          discover everything you need to know about crafting your own honey wine.
        </p>
        <div className="flex gap-6 justify-center">
          <Link 
            to="/docs/intro" 
            className="px-8 py-4 bg-[var(--ifm-color-primary)] !text-white rounded-xl hover:bg-[var(--ifm-color-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg font-semibold"
          >
            Get Started
          </Link>
          <Link 
            to="/blog" 
            className="px-8 py-4 border-2 border-[var(--ifm-color-primary)] text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)] rounded-xl hover:bg-[var(--ifm-color-primary-lightest)] dark:hover:bg-[var(--ifm-color-primary-darkest)] transition-all duration-300 text-lg font-semibold"
          >
            Latest Articles
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({title, description, icon}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--ifm-color-primary-lightest)] dark:border-[var(--ifm-color-primary-darkest)]">
      <div className="text-5xl mb-6">{icon}</div>
      <h2 className="text-2xl font-bold mb-4 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">{title}</h2>
      <p className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] text-lg leading-relaxed">{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className="container mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">
        Getting Started with Mead Making
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <FeatureCard
          icon="🍯"
          title="Basic Equipment"
          description="Learn about the essential tools and equipment needed to start your mead making journey."
        />
        <FeatureCard
          icon="📝"
          title="First Recipe"
          description="Follow our beginner-friendly traditional mead recipe to create your first batch."
        />
        <FeatureCard
          icon="🔬"
          title="Understanding Process"
          description="Master the fundamentals of fermentation, yeast selection, and proper sanitation."
        />
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">
          Join Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[var(--ifm-color-primary-lightest)] dark:border-[var(--ifm-color-primary-darkest)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">r/mead Community</h3>
            <p className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] text-lg mb-6 leading-relaxed">
              Connect with thousands of mead makers, share your experiences, and get advice from experienced brewers.
            </p>
            <div className="flex justify-end">
              <a 
                href="https://reddit.com/r/mead" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-[var(--ifm-color-primary)] !text-white rounded-xl hover:bg-[var(--ifm-color-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg font-semibold"
              >
                Join r/mead
              </a>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[var(--ifm-color-primary-lightest)] dark:border-[var(--ifm-color-primary-darkest)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">Discord Server</h3>
            <p className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] text-lg mb-6 leading-relaxed">
              Join our active Discord community for real-time discussions, troubleshooting, and mead making tips.
            </p>
            <div className="flex justify-end">
              <a 
                href="https://discord.gg/mead" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 bg-[var(--ifm-color-primary)] !text-white rounded-xl hover:bg-[var(--ifm-color-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg font-semibold"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularRecipes() {
  return (
    <section className="container mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">
        Popular Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            title: "Traditional Mead",
            description: "A classic honey wine recipe perfect for beginners",
            difficulty: "Beginner",
          },
          {
            title: "Melomel",
            description: "Fruit-infused mead with rich, complex flavors",
            difficulty: "Intermediate",
          },
          {
            title: "Metheglin",
            description: "Spiced mead with herbs and spices",
            difficulty: "Intermediate",
          },
        ].map((recipe, idx) => (
          <div key={idx} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[var(--ifm-color-primary-lightest)] dark:border-[var(--ifm-color-primary-darkest)]">
            <h3 className="text-2xl font-bold mb-4 text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)]">{recipe.title}</h3>
            <p className="text-[var(--ifm-color-primary-dark)] dark:text-[var(--ifm-color-primary-lighter)] text-lg mb-6 leading-relaxed">{recipe.description}</p>
            <div className="flex justify-between items-center">
              <span className="px-4 py-2 bg-[var(--ifm-color-primary-lightest)] dark:bg-[var(--ifm-color-primary-darkest)] text-[var(--ifm-color-primary-darker)] dark:text-[var(--ifm-color-primary-light)] rounded-full text-sm font-medium">
                {recipe.difficulty}
              </span>
              <Link 
                to={`/docs/recipes/${recipe.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="px-6 py-3 bg-[var(--ifm-color-primary)] !text-white rounded-xl hover:bg-[var(--ifm-color-primary-dark)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg font-semibold"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Mead Making Wiki"
      description="Your comprehensive guide to mead making">
      <div className="fixed inset-0 bg-gradient-to-b from-[var(--ifm-color-primary-lightest)] via-white to-[var(--ifm-color-primary-lightest)] dark:from-[var(--ifm-color-primary-darkest)] dark:via-gray-800 dark:to-[var(--ifm-color-primary-darkest)] -z-10" />
      <div className="relative min-h-screen">
        <Header />
        <HomepageHeader />
        <main>
          <HomepageFeatures />
          <CommunitySection />
          <PopularRecipes />
        </main>
      </div>
    </Layout>
  );
}
