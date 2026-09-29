import React from 'react'
import assets from '../assets/assets'

const Resources = () => {
  const featuredPost = {
    image: assets.res1, // Placeholder since specific images aren't in assets
    tag: "Career",
    readTime: "5 min read",
    title: "Unlock Your Potential with Career Coaching",
    text: "Get expert guidance to advance your carer and achieve your gols",
    linkText: "Read more"
  };

  const sidePosts = [
    {
      id: 1,
      image: assets.res2,
      tag: "Career",
      readTime: "5 min read",
      title: "Master the Art of Resume Writing",
      linkText: "Read more"
    },
    {
      id: 2,
      image: assets.res3,
      tag: "Career",
      readTime: "5 min read",
      title: "Ace Your Job Interviews with Confidence",
      linkText: "Read more"
    },
    {
      id: 3,
      image: assets.res4,
      tag: "Career",
      readTime: "5 min read",
      title: "Uncover Effective Job Search Strategies",
      linkText: "Read more"
    }
  ];
  const latestPosts = [
    {
      id: 1,
      image: assets.res5, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "How to Find Your Dream Job",
      text: "Discover actionable tips and strategies to land your dream job.",
      linkText: "Read more"
    },
    {
      id: 2,
      image: assets.res6, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "Navigating Career Transitions Successfully",
      text: "Learn how to smoothly transition to a new career path.",
      linkText: "Read more"
    },
    {
      id: 3,
      image: assets.res7, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "Building Essential Skills for Career Growth",
      text: "Develop the skills you need to advance in your chosen career.",
      linkText: "Read more"
    },
    {
      id: 4,
      image: assets.res8, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "Finding Work-Life Balance in a Demanding Career",
      text: "Discover strategies to achieve work-life balance and avoid burnout.",
      linkText: "Read more"
    },
    {
      id: 5,
      image: assets.res9, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "Maximizing Your Potential in the Workplace",
      text: "Learn how to excel in your current job and reach new heights.",
      linkText: "Read more"
    },
    {
      id: 6,
      image: assets.res10, // Placeholder
      tag: "Career",
      readTime: "5 min read",
      title: "Overcoming Career Challenges with Resilience",
      text: "Discover strategies to bounce back from setbacks and thrive.",
      linkText: "Read more"
    }
  ];

  return (
    <div id='resources' className='px-4 sm:px-12 lg:px-24 py-20 bg-[#f8f8f8]'>
      <div className='mb-12'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-black mb-6 leading-12'>
          Discover Our Featured<br/>
          Resources
        </h1>
        <p className='text-gray-600 text-lg'>
          Explore our top eBooks Worksheets, and Templates.
        </p>
      </div>

      <h2 className='text-2xl font-semibold text-black hover:text-primary transition-colors mb-2'>Browse Featured Blog Posts</h2>

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-6 items-start'>
        
        {/* Left side: Main Featured */}
        <div className='w-full lg:w-[55%] flex flex-col group cursor-pointer'>
          <div className='overflow-hidden rounded-md bg-white shadow-md border-4 border-white mb-6'>
            <img 
              src={featuredPost.image} 
              alt="Featured" 
              className='w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105' 
            />
          </div>
          <div className='flex items-center gap-4 mb-4 text-sm'>
            <span className='bg-primary/10 px-2 py-1 border border-gray-400 rounded-sm text-gray-700 font-medium'>
              {featuredPost.tag}
            </span>
            <span className='text-gray-500'>{featuredPost.readTime}</span>
          </div>
          <h3 className='text-3xl font-bold text-black mb-4 group-hover:text-primary transition-colors'>
            {featuredPost.title}
          </h3>
          <p className='text-gray-600 mb-6'>
            {featuredPost.text}
          </p>
          <a href="#" className='text-gray-600 font-medium hover:text-primary flex items-center gap-2 text-sm'>
            {featuredPost.linkText} <span className='text-lg leading-none'>›</span>
          </a>
        </div>

        {/* Right side: 3 smaller posts */}
        <div className='w-full lg:w-[45%] flex flex-col gap-8 lg:gap-6'>
          {sidePosts.map((post) => (
            <div key={post.id} className='flex flex-col sm:flex-row gap-6 group cursor-pointer items-center sm:items-start'>
              <div className='w-full sm:w-[40%] lg:w-[45%] shrink-0 overflow-hidden rounded-md bg-white shadow-md border-4 border-white'>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className='w-full h-48 sm:h-40 lg:h-44 object-cover transition-transform duration-500 group-hover:scale-105' 
                />
              </div>
              <div className='flex flex-col justify-center py-2 w-full'>
                <div className='flex items-center gap-4 mb-3 text-sm'>
                  <span className='px-2 py-1 border border-gray-400 rounded-sm text-gray-700 font-medium bg-primary/10'>
                    {post.tag}
                  </span>
                  <span className='text-gray-500'>{post.readTime}</span>
                </div>
                <h3 className='text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black mb-4 group-hover:text-primary transition-colors leading-snug'>
                  {post.title}
                </h3>
                <a href="#" className='text-gray-600 font-medium hover:text-primary flex items-center gap-2 mt-auto text-sm'>
                  {post.linkText} <span className='text-lg leading-none'>›</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Latest Blog Posts Section */}
      <h2 className='text-2xl font-bold text-black mb-8 mt-20'>Browse Latest Blog Posts</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {latestPosts.map((post) => (
          <div key={post.id} className='flex flex-col group cursor-pointer'>
            <div className='overflow-hidden rounded-md bg-white shadow-md border-4 border-white mb-6'>
              <img 
                src={post.image} 
                alt={post.title} 
                className='w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105' 
              />
            </div>
            <div className='flex items-center gap-4 mb-4 text-sm'>
              <span className='px-2 py-1 border border-gray-400 rounded-sm text-gray-800 font-medium bg-primary/10'>
                {post.tag}
              </span>
              <span className='text-gray-500'>{post.readTime}</span>
            </div>
            <h3 className='text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors leading-snug'>
              {post.title}
            </h3>
            <p className='text-gray-600 mb-6 text-sm'>
              {post.text}
            </p>
            <a href="#" className='text-gray-600 font-medium hover:text-primary flex items-center gap-2 mt-auto text-sm'>
              {post.linkText} <span className='text-lg leading-none'>›</span>
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Resources
