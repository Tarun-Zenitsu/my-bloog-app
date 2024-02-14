export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Tarun' Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to my digital domain! I'm Tarun, a full-stack developer deeply passionate 
            about technology and its endless possibilities. With expertise in both frontend and 
            backend development, I craft intuitive interfaces and robust systems using modern 
            tools and frameworks like React, Next.js, TypeScript, and Tailwind CSS.
            </p>

            <p>
            Beyond writing code, I'm dedicated to staying ahead of the curve in the fast-paced 
            tech landscape. Through my blog, I share insights on cutting-edge trends and 
            innovative solutions, covering everything from database management with PostgreSQL 
            and MongoDB to containerization with Docker.
            </p>

            <p>
            I'm not just about technology; I'm also about community. My aim is to foster a 
            supportive environment where collaboration and knowledge sharing thrive. Whether you're a 
            seasoned developer or a curious newcomer, my blog is a space for meaningful discussions and empowering insights.
            </p>
            <p>
            Join me on this exciting journey through the world of technology. Let's explore, learn, and grow together, 
            making each line of code count.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
