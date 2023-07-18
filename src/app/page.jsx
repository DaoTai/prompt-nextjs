import { Feed } from "@components";

export default function Home() {
  return (
    <div className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Help
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center pl-2">I love you</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quod sint
        perferendis mollitia fugiat commodi, qui aperiam iure, assumenda optio
        consequuntur est eius in aliquam dignissimos. Eligendi natus laudantium
        perferendis.
      </p>
      {/* Feed */}
      <Feed />
    </div>
  );
}
