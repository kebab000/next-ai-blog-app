import React from "react";
import Image from "next/image";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="twitter"
          src={Twitter}
          height={20}
          width={20}
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Facebook"
          src={Facebook}
          height={20}
          width={20}
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Instagram"
          src={Instagram}
          height={20}
          width={20}
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Google"
          src={Google}
          height={20}
          width={20}
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="Discord"
          src={Discord}
          height={20}
          width={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
