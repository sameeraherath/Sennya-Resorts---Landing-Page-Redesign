import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Beauty of Nature",
    description: "Exploring the breathtaking landscapes around the world.",
    link: "#",
  },

  {
    id: 2,
    title: "Healthy Living Tips",
    description: "Simple tips to maintain a healthy lifestyle.",
    link: "#",
  },

  {
    id: 3,
    title: "Tech Innovations",
    description: "Latest updates on technology and innovation.",
    link: "#",
  },

  {
    id: 4,
    title: "Fitness Journey",
    description: "How I started my fitness journey and tips for beginners.",
    link: "#",
  },

  {
    id: 5,
    title: "Culinary Adventures",
    description: "Exploring unique and exotic foods from around the world.",
    link: "#",
  },

  {
    id: 6,
    title: "Photography Tips",
    description: "Beginner-friendly tips to improve your photography skills.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="py-16 mx-4 md:mx-8 lg:mx-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-700 py-8">
          Blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-sm transition duration-300 py-8 px-8 mb-8"
            >
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 text-left">{post.description}</p>
              <a
                href={post.link}
                className="text-green-700 hover:text-green-500"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
