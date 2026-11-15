import { ChefHat, HandHeart, Mic, Users, Music, Gamepad2, Trophy } from "lucide-react";
export const activities = [
  { Icon: ChefHat, title: "Cooking", short: "Pots on fire, recipes shared across cultures.", long: "Cooking teams prepare meals on site, bringing different recipes and traditions to one shared space." },
  { Icon: HandHeart, title: "Food sharing", short: "Everyone eats. Plates passed from hand to hand.", long: "The food cooked on the day is shared with attendees, because breaking bread together builds bonds." },
  { Icon: Mic, title: "Lectures", short: "Talks on unity, peace and community.", long: "Short talks on unity, communal peace and social development in our communities." },
  { Icon: Users, title: "Panel session", short: "Open conversations about living together.", long: "A panel conversation exploring how neighbours can live, work and celebrate together in peace." },
  { Icon: Music, title: "Music", short: "Sounds that get the whole crowd moving.", long: "Music throughout the day to keep the festive holiday spirit alive." },
  { Icon: Gamepad2, title: "Games", short: "Fun for families, friends and neighbours.", long: "Games for families, friends and neighbours to play and connect." },
  { Icon: Trophy, title: "Awards", short: "Celebrating people who build peace.", long: "Awards recognising contributions to the festival and to peace in the community." },
];
const tones = ["bg-primary text-primary-foreground", "bg-accent text-accent-foreground", "bg-highlight text-highlight-foreground"];
export const toneFor = (i: number) => tones[i % 3];
