import React from "react";
import test from "../assets/test.jpg";

const posts = [
  {
    id: 1,
    name: "suresh",
    img: { test },
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum eveniet quasi obcaecati quos at dolore alias sequi minus molestiae harum laudantium, nisi laborum! Earum sint nostrum illum soluta enim.",
  },
  {
    id: 3,
    name: "post 2",
    img: { test },
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi aspernatur ratione est cumque enim illum natus neque quas eum fuga nisi quam aperiam nihil, nam nostrum sit dignissimos repudiandae!",
  },
  {
    id: 4,
    name: "post 2",
    img: { test },
    desc: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi aspernatur ratione est cumque enim illum natus neque quas eum fuga nisi quam aperiam nihil, nam nostrum sit dignissimos repudiandae!",
  },
];

console.log(posts);

const Menu = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Other posts you may like.</h1>
        <div>
          {posts.map((post) => (
            <div key={post.id} className="py-[20px] flex flex-col gap-y-[10px]">
              <img className="rounded-md " src={test} alt="" />
              <h1 className="text-2xl font-bold">{post.name}</h1>
              <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-gray-100 text-lg shadow">
                <div class="absolute inset-0 w-3 bg-teal-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">
                  Read more.
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
