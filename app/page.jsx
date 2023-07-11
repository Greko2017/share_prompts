import Feed from "@/components/Feed"

const Home = () => {
    return (
      <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
              Discover & Share
              <br className="max-width:50px sm:hidden"/>
              <span className="orange_gradient text-center"> AI-Powered  Prompts</span>
          </h1>
          <p className="desc text-center">
            The Prompt Discovery and Sharing App is a great way to find inspiration 
            for your creative projects. Whether you're a writer, a coder, 
            or just someone who enjoys creative thinking, this app can help 
            you come up with new ideas.
          </p>
          
          <Feed />
      </section>
    )
  }
  
  export default Home
  