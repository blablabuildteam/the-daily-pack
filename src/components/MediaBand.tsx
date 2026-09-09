import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  priority?: boolean;
  videoSrc?: string;
};

export function MediaBand({ src, alt = "", priority = false, videoSrc }: Props) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-beige-2 md:aspect-[21/9]">
      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={src}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
        />
      )}
    </div>
  );
}
