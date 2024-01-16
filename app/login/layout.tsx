import { AspectRatio } from "@/components/ui/aspect-ratio";
import BlurImage from "@/components/widgets/BlurImage";
import { Link } from "@nextui-org/link";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <BlurImage
          src="/images/auth-layout.jpg"
          alt="A skateboarder doing a high drop"
          className="relative w-full inset-0 object-cover z-10 grayscale"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link
          href="/"
          className="absolute left-8 top-6 z-20 flex items-center text-lg tracking-tight"
        >
          <span>Piclogue</span>
        </Link>
        <main className="container z-20 absolute top-1/2 left-[calc(50%-14.6rem)] col-span-1 flex -translate-y-1/2 items-center">
          {children}
        </main>
        {/* <div className="absolute bottom-6 left-1/2 z-20 text-base">
      Photo by{" "}
      <a
        href="https://unsplash.com/ja/@pixelperfektion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="hover:underline"
      >
        pixelperfektion
      </a>
      {" on "}
      <a
        href="https://unsplash.com/photos/OS2WODdxy1A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className="hover:underline"
      >
        Unsplash
      </a>
    </div> */}
      </AspectRatio>
    </div>
  );
};

export default LoginLayout;
