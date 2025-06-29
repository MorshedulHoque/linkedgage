import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import client from './contentfulClient';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Helmet } from 'react-helmet';
import { BeatLoader } from 'react-spinners';

function BlogPost() {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Wrap fetchPost with useCallback to prevent unnecessary re-renders
    const fetchPost = useCallback(async () => {
        try {
            const response = await client.getEntries({
                'fields.slug': slug,
                content_type: 'blogPage',
            });
            if (response.items.length > 0) {
                setPost(response.items[0]);
            } else {
                throw new Error('Post not found');
            }
        } catch (err) {
            console.error('Error fetching post:', err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [slug]); // The fetchPost function now depends on 'slug'

    useEffect(() => {
        fetchPost();
    }, [fetchPost]); // Now, fetchPost is in the dependency array

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><BeatLoader color="#36D7B7" /></div>;
    if (error) return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Error fetching post: {error.message}</p>
            <button onClick={fetchPost} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', cursor: 'pointer' }}>Retry</button>
        </div>
    );
    if (!post) return <div>No post found</div>;

    const options = {
        renderMark: {
            [MARKS.CODE]: (text) => <code className="inline-code">{text}</code>,
            [MARKS.BOLD]: (text) => <strong className="text-white">{text}</strong>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                const isOnlyStrongText =
                    node.content.length === 1 &&
                    node.content[0].nodeType === 'text' &&
                    node.content[0].marks.some(mark => mark.type === MARKS.BOLD);
                return <p className={isOnlyStrongText ? "" : "mb-4"}>{children}</p>;
            },
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                    src={node.data.target.fields.file.url}
                    alt={node.data.target.fields.title || 'Embedded Asset'}
                    className="blog-post-image"
                />
            ),
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-4 mt-8 text-white">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-4 mt-8 text-white">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-4 mt-8 text-white">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-bold mb-4 mt-8 text-white">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-bold mb-4 mt-8 text-white">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-bold mb-4 mt-8 text-white">{children}</h6>,
            [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside ml-6">{children}</ul>,
            [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside ml-6">{children}</ol>,
            [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
            [BLOCKS.CODE]: (node, children) => <pre className="code-block">{children}</pre>,
        },
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-black">
            <style>
                {`
                    .blog-content ol, .blog-content ul {
                        list-style-position: outside;
                        padding-left: 20px;
                        margin: 0;
                    }
                    .blog-content ol {
                        list-style-type: decimal;
                    }
                    .blog-content ul {
                        list-style-type: disc;
                    }
                    .blog-content li {
                        margin: 0;
                        padding-left: 0.5rem;
                    }
                    .richText {
                        white-space: pre-wrap;
                        color: #c8c8c8;
                    }
                    hr {
                        margin-top: 20px;
                        margin-bottom: 20px;
                        border: none;
                        height: 2px;
                        background-color: #ccc;
                    }
                    /* Code block styling */
                    .code-block {
                        background: linear-gradient(145deg, #2a2a2a, #3a3a3a);
                        color: #e1e1e1;
                        padding: 16px 20px;
                        border-radius: 8px;
                        font-family: 'Courier New', monospace;
                        font-size: 0.95em;
                        margin: 16px 0;
                        overflow-x: auto;
                        border-left: 4px solid #f39c12;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
                        line-height: 1.6;
                    }
                    /* Inline code styling */
                    .inline-code {
                        background-color: #333;
                        color: #e1e1e1;
                        padding: 4px 6px;
                        border-radius: 4px;
                        font-family: 'Courier New', monospace;
                        margin: 0 2px;
                    }
                    /* Blockquote styling */
                    blockquote {
                        padding: 16px 20px 0 20px;
                        margin: 20px 0;
                        border-left: 5px solid #ccc;
                        background-color: #2a2a2a;
                        color: #e1e1e1;
                        font-style: italic;
                        overflow: hidden;
                    }
                    /* Override paragraph margin in blockquotes */
                    blockquote p {
                        margin-bottom: 0;  /* Remove bottom margin inside blockquotes */
                    }   
                    .blog-post-image {
                        width: 40%;             /* Set the width to 50% of the container */
                        height: auto;           /* Maintain aspect ratio */
                        display: block;         /* Allows margin to be applied correctly */
                        margin: 20px auto;      /* Center the image horizontally and add vertical spacing */
                    }         
                `}
            </style>
            <div className="max-w-4xl mx-auto rounded-lg shadow-md p-6 blog-content text-justify bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px]" data-aos="fade" data-aos-duration="1000">
                <Helmet>
                    <title>{post.fields.title}</title>
                    <meta name="description" content={post.fields.metaDescription || 'Default blog description'} />
                    <meta property="og:title" content={post.fields.title} />
                    <meta property="og:description" content={post.fields.metaDescription || 'Default blog description'} />
                    <meta property="og:image" content={post.fields.featuredImage.fields.file.url} />
                    <meta property="og:type" content="article" />
                </Helmet>
                {post.fields.featuredImage && (
                    <img
                        src={post.fields.featuredImage.fields.file.url}
                        alt={post.fields.title}
                        className="w-full h-64 object-cover rounded-md mb-6"
                        loading="lazy"
                    />
                )}
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-lightBlue text-center">{post.fields.title}</h1>
                <p className="text-sm mb-6 pt-2 text-white text-center">
                    By <strong>{post.fields.author}</strong> on <strong>{new Date(post.fields.createdDate).toLocaleDateString()}</strong>
                    <span className="block w-1/12 mx-auto border-b-2 border-lightBlue mt-1"></span>
                </p>

                <div className="leading-relaxed richText text-slate-50">
                    {documentToReactComponents(post.fields.body, options)}
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
