import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "../components/BlogPosts.css"

const BlogPosts = () => {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [assets, setAssets] = useState(null); // state to hold the assets data

  useEffect(() => {
    // fetch the posts
    axios
      .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}&content_type=blogPost`)
      .then(response => {
        setPosts(response.data.items);
        
        // fetch the assets
        axios
          .get(`https://cdn.contentful.com/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/environments/master/assets?access_token=${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`)
          .then(response => {
            setAssets(response.data.items);
          })
          .catch(error => {
            console.log(error);
            setError(error.message);
          });
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!posts || !assets) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map(post => {
        // find the associated asset for this post
        const asset = assets.find(asset => asset.sys.id === post.fields.featuredImage.sys.id);
        return (
          <div key={post.sys.id}>
            {console.log(post)}
            <div className="post-image">
              <img
                src={asset.fields.file.url} // use the asset URL here
                alt={post.fields.title}
              />
            </div>
            <h1>{post.fields.title}</h1>
            <p>{post.fields.shortDescription}</p>
            <div></div>
            <div>{documentToReactComponents(post.fields.content)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;