import React from "react";
import logo from "../assets/logo1.png";

const posts = [
  {
    id: 1,
    name: "post 1",
    img: logo,
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi aspernatur ratione est cumque enim illum natus neque quas eum fuga nisi quam aperiam nihil, nam nostrum sit dignissimos repudiandae!",
  },
  {
    id: 2,
    name: "post 2",
    img: logo,
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi aspernatur ratione est cumque enim illum natus neque quas eum fuga nisi quam aperiam nihil, nam nostrum sit dignissimos repudiandae!",
  },
  {
    id: 3,
    name: "post 3",
    img: logo,
    description:
      "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi aspernatur ratione est cumque enim illum natus neque quas eum fuga nisi quam aperiam nihil, nam nostrum sit dignissimos repudiandae!",
  },
];

const Home = () => {
  return (
    <div className="home flex justify-center items-center">
      <div className="parent ">
        {posts.map((post) => (
          <div
            className="grid grid-cols-2 py-[25px] items-center gap-6 max-w-[1200px] "
            key={post.id}
          >
            <div>
              <h1 className="text-4xl font-bold py-[10px] ">{post.name}</h1>
              <p className="py-[10px]">{post.description}</p>
              <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-teal-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">
                  Read more.
                </span>
              </button>
            </div>
            <div>
              <img src={logo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
