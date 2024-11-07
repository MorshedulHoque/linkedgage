// src/Blog.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import client from './contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BeatLoader } from 'react-spinners'; // Import the BeatLoader component

function Blog() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        if (slug) {
          const response = await client.getEntries({
            content_type: 'blogPage',
            'fields.slug': slug,
          });
          if (response.items.length > 0) {
            setPost(response.items[0]);
          } else {
            throw new Error('Post not found');
          }
        } else {
          const response = await client.getEntries({ content_type: 'blogPage' });
          setPosts(response.items);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><BeatLoader color="#36D7B7" /></div>;
  if (error) return <div>Error fetching content: {error.message}</div>;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Inline CSS for the animated lines with faded effect */}
      <style>{`
        .lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 90vw;
          height: 100%;
          margin: auto;
          z-index: 0; /* Background layer */
        }
        .line {
          position: absolute;
          width: 1px;
          height: 100%;
          top: 0;
          background: rgba(255, 255, 255, 0.05); /* Reduced opacity for fading effect */
          overflow: hidden;
        }
        .line::after {
          content: '';
          display: block;
          position: absolute;
          height: 15vh;
          width: 100%;
          top: -50%;
          left: 0;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 75%, rgba(255, 255, 255, 0.1) 100%);
          animation: drop 7s infinite cubic-bezier(0.4, 0.26, 0, 0.97);
        }
        .line:nth-child(1) {
          left: 10%;
        }
        .line:nth-child(1)::after {
          animation-delay: 1s;
        }
        .line:nth-child(2) {
          left: 30%;
        }
        .line:nth-child(2)::after {
          animation-delay: 1.5s;
        }
        .line:nth-child(3) {
          left: 50%;
        }
        .line:nth-child(3)::after {
          animation-delay: 2s;
        }
        .line:nth-child(4) {
          left: 70%;
        }
        .line:nth-child(4)::after {
          animation-delay: 2.5s;
        }
        .line:nth-child(5) {
          left: 90%;
        }
        .line:nth-child(5)::after {
          animation-delay: 3s;
        }
        @keyframes drop {
          0% {
            top: -50%;
          }
          100% {
            top: 110%;
          }
        }
      `}</style>

      {/* Background lines */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10">
        {slug && post ? (
          <div className="container mx-auto px-4 py-8">
            {post.fields.category && (
              <p className="text-sm text-gray-400 mb-2 uppercase bg-gray-700 py-1 px-2 inline-block rounded">
                {post.fields.category}
              </p>
            )}
            <h1 className="text-3xl font-bold mb-4">{post.fields.title}</h1>
            <p className="pt-2">
              By <strong>{post.fields.author}</strong> on {new Date(post.fields.createdDate).toLocaleDateString()}
            </p>
            <div className="mt-4">{documentToReactComponents(post.fields.body)}</div>
            {post.fields.featuredImage && (
              <img src={post.fields.featuredImage.fields.file.url} alt={post.fields.title} className="mt-4" />
            )}
          </div>
        ) : (
          <div className="container mx-auto px-2 py-8 max-w-7xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="1000"> {/* Increased gap for more space */}
              {posts.map((post) => (
                <div className='rounded-lg border-2 border-white p-2'>
                  <div key={post.sys.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden ">
                    {/* Added border here */}
                    <Link to={`/blog/${post.fields.slug}`}>
                      {post.fields.featuredImage && (
                        <div className="overflow-hidden rounded-t-lg">
                          <img 
                            src={post.fields.featuredImage.fields.file.url} 
                            alt={post.fields.title} 
                            className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-t-lg"
                          />
                        </div>
                      )}
                      <div className="p-4 rounded-b-lg">
                        {post.fields.category && (
                          <p className="text-sm text-slate-100 mb-2 uppercase bg-gray-700 py-1 px-2 inline-block rounded">
                            {post.fields.category}
                          </p>
                        )}
                        <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
                        <p className="text-sm text-slate-100 mb-4 pt-2">
                          By <strong>{post.fields.author}</strong> | {new Date(post.fields.createdDate).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">{post.fields.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )}
      </div>
    </div>
  );
}

export default Blog;
