import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <div className="flex flex-col items-center lg:flex-row bg-[#282929] dark:bg-slate-800">
          <div className="p-10 flex flex-col bg-[#282929] dark:bg-slate-800 text-white space-y-5">
            <h1 className="text-5xl font-bold">
              Welcome to DropBox
              <br />
              <br />
              Storing Everything for you and your business needs. All in one
              place
            </h1>
            <p className="pb-20">
              Elevate your productivity with Next.JS Dropbox: the ultimate
              solution for storing, sharing, and collaborating on all your files
              with help of FIREBASE. Seamlessly access your data from anywhere,
              anytime, and experience the unmatched security and reliability
              that sets Clerk Authentication apart. Transform the way you work
              and unlock the full potential of your business with Dropbox
              replicate at your fingertips.
              <br /> Innovation starts with you, Be the game changer.
            </p>

            <Link
              href="/dashboard"
              className="cursor-pointer bg-cyan-600 w-fit p-4 rounded-xl"
            >
              Try it for free
            </Link>
          </div>
          <div className="bg-[#1E19195] dark:bg-slate-800 h-full p-5">
            <video className="rounded-lg" autoPlay loop muted>
              <source
                src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dash/dbx-header-blur-1920x1080.mp4"
                type="video/mp4"
              />
              Your Browser does not support your video tag
            </video>
          </div>
        </div>
        <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
        <p className="text-center">
          This video is made for informational and educational purpose only. We
          do not own or affiliate with DropBox or/and any of its subsidiaries in
          any form. Copyright Disclaimer under section 107 of the copyright Act
          1976, allowance is made for &quot;fair use&quot; of this video for
          educational purpose
        </p>
      </div>
    </main>
  );
}
