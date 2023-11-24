import bullsEye from "../../assets/GameHub Resources/Emojis/bulls-eye.webp";
import thumbsUp from "../../assets/GameHub Resources/Emojis/thumbs-up.webp";
import meh from "../../assets/GameHub Resources/Emojis/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

const Emoji = ({ rating }: { rating: number }) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
