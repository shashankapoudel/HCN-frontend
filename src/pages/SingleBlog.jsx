import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BASE_URL from "../config/api";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBlog = async () => {
    try {
      const res = await fetch(`${BASE_URL}/blog/${id}`);
      const data = await res.json();

      if (data.success) {
        setBlog(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8">
      <Link to="/blogs" className="text-[#bb2821] hover:underline">
        ← Back to Blogs
      </Link>

      <h1 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">{blog.title}</h1>

      <img
        src={blog.images?.[0]}
        alt={blog.title}
        className="w-full rounded-lg mb-6"
      />

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </div>
  );
};

export default SingleBlog;
