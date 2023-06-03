import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FeaturedPost = ({ post }) => {
    // extract the associated asset for this post
    const asset = post.fields.featuredImage;
    return (
      <div>
        <img
          src={asset.fields.file.url} // use the asset URL here
          alt={post.fields.title}
        />
        <h2>{post.fields.title}</h2>
        <p>{post.fields.shortDescription}</p>
      </div>
    );
  };
  
  // Use this component elsewhere in your application like so:
  // <FeaturedPost post={yourFeaturedPostHere} />
  