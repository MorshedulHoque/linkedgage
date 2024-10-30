import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Helmet } from "react-helmet";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const projectId = "ywx3dlmi";
const dataset = "production";

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          metaDescription,
          metaTags,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          publishedAt,
          body,
          "name": author->name,
          "authorImage": author->image
        }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div className="bg-black flex justify-center items-center h-screen text-white">Loading...</div>;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-5">
      <div className="max-w-2xl w-full text-white">
        <Helmet>
          <title>{postData.title}</title>
          <meta name="description" content={postData.metaDescription || 'Default description'} />
          {postData.metaTags && postData.metaTags.map((tag, index) => (
            <meta key={index} name="keywords" content={tag} />
          ))}
        </Helmet>
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3">{postData.title}</h1>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={urlFor(postData.authorImage).width(100).url()}
              alt="Author"
            />
            <p>
              Written by <strong>{postData.name}</strong> | {new Date(postData.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={urlFor(postData.mainImage).width(800).url()}
            alt="Post Main Image"
          />
        </div>
        <article className="prose lg:prose-lg mx-auto custom-prose">
          <BlockContent
            blocks={postData.body}
            projectId={projectId}
            dataset={dataset}
          />
        </article>
      </div>
    </div>
  );
}
