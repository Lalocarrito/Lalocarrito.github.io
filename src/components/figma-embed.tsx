"use client";

const FigmaEmbed = ({ src, title }: { src: string; title?: string }) => {
  const embed = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
    src
  )}`;
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-background/50">
      <div className="relative w-full" style={{ paddingBottom: "62%" }}>
        <iframe
          src={embed}
          title={title ?? "Prototipo de Figma"}
          className="absolute inset-0 h-full w-full"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FigmaEmbed;
