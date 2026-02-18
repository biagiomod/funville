export interface Place {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  emoji: string;
  gradient: string;
  gameEmojis: [string, string, string, string]; // exactly 4 pairs
}

export const places: Place[] = [
  {
    slug: "candy-castle",
    name: "Candy Castle",
    tagline: "Sweet dreams are made of this",
    description:
      "A magnificent castle built entirely from sugar bricks, chocolate mortar, and rainbow lollipop towers. Inside you'll find rivers of caramel, rooms full of gummies, and a cotton-candy throne room fit for royalty.",
    emoji: "🍭",
    gradient: "linear-gradient(135deg, #ff6eb4 0%, #ff9a9e 100%)",
    gameEmojis: ["🍭", "🍬", "🍫", "🧁"],
  },
  {
    slug: "robot-arcade",
    name: "Robot Arcade",
    tagline: "Level up with friendly bots",
    description:
      "Funville's most electrifying attraction! Rows of buzzing arcade machines operated by cheerful robots. Challenge them to dance-offs, puzzle battles, or just enjoy their light shows. Every game ends with a high five from a metal pal.",
    emoji: "🤖",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    gameEmojis: ["🤖", "🎮", "👾", "🕹️"],
  },
  {
    slug: "cupcake-cafe",
    name: "Cupcake Café",
    tagline: "Taste the magic, one bite at a time",
    description:
      "The sweetest café in all of Funville, famous for its impossibly tall frosting swirls and surprise filling flavours. The baker — a very cheerful snail — bakes a new secret flavour every single day.",
    emoji: "🧁",
    gradient: "linear-gradient(135deg, #f9a825 0%, #ff7043 100%)",
    gameEmojis: ["🧁", "🍰", "🎂", "🍩"],
  },
  {
    slug: "ferris-wheel",
    name: "Ferris Wheel",
    tagline: "See Funville from the clouds",
    description:
      "The giant rainbow Ferris Wheel towers over Funville and offers a breathtaking view of the entire town. On a clear day you can see all the way to the Candy Mountains. Each gondola plays a different cheerful tune.",
    emoji: "🎡",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    gameEmojis: ["🎡", "🎢", "🎪", "🎠"],
  },
  {
    slug: "fountain-park",
    name: "Fountain Park",
    tagline: "Where rainbows touch the ground",
    description:
      "At the heart of Funville lies the Fountain Park, where dancing fountains shoot water in time to music and the spray creates tiny rainbows all afternoon. Perfect for splashing around or just sitting on the rainbow benches.",
    emoji: "⛲",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    gameEmojis: ["🌈", "🌸", "💧", "⭐"],
  },
  {
    slug: "story-library",
    name: "Story Library",
    tagline: "Every book is an adventure",
    description:
      "The Story Library is an enchanted building where the books whisper their stories aloud. Giant reading cushions float between the shelves, and a wise old owl will recommend the perfect story just for you.",
    emoji: "📚",
    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    gameEmojis: ["📚", "🔮", "⭐", "🦄"],
  },
];

export function getPlace(slug: string): Place | undefined {
  return places.find((p) => p.slug === slug);
}
