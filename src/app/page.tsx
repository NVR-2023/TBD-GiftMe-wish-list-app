import GiftMeLogo from "./_components/Common/GiftMeLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>GiftMe next.js App in development</div>
      <div>
        <GiftMeLogo height="200px" width="200px" />
      </div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            Daisy UI connected
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Card component without image
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>Test</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">UI</div>
              <div className="badge badge-outline">TailwindCSS</div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full flex items-center justify-evenly font-mono text-sm lg:w-auto">
        <Link className="text-green-400 pe-9" href="/wishlists">
          Wishlists
        </Link>
        <Link className="text-blue-400 pe-9" href="/groups">
          Groups
        </Link>
        <Link className="text-red-400" href="/notifications">
          Notifications
        </Link>
      </div>
    </main>
  );
}
