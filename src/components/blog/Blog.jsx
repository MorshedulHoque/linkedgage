import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          publishedAt,
          "authorName": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-black py-10 px-5 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-5">Blog Posts</h2>
        <h3 className="text-xl text-gray-400 mb-10">Welcome to my blog posts page!</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allPostsData &&
            allPostsData.map((post) => (
              <Link to={"/blog/" + post.slug.current} key={post.slug.current} className="block">
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    <img 
                      src={post.mainImage.asset.url} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-semibold text-lg text-gray-900 mb-2">{post.title}</h2>
                    <div className="flex items-center mt-2 text-gray-600">
                      {post.authorImage && (
                        <img
                          src={urlFor(post.authorImage).width(50).height(50).url()}
                          alt={post.authorName}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      )}
                      <p className="text-gray-600">
                        By {post.authorName} | {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
