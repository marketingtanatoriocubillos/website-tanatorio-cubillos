import { SOCIAL_LINKS } from "../../data/navigation";
import type { SocialLink } from "../../lib/types";
import { FacebookIcon } from "../ui/icons/FacebookIcon";
import { InstagramIcon } from "../ui/icons/InstagramIcon";
import { MailIcon } from "../ui/icons/MailIcon";
import { PinIcon } from "../ui/icons/PinIcon";
import { WhatsAppIcon } from "../ui/icons/WhatsAppIcon";

function SocialIcon({ platform }: Pick<SocialLink, "platform">) {
  const className = "size-4";

  switch (platform) {
    case "facebook":
      return <FacebookIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "whatsapp":
      return <WhatsAppIcon className={className} />;
    default:
      return null;
  }
}

export default function Topbar() {
  return (
    <div className="bg-brand-primary text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
        <div className="flex flex-row items-center gap-2 font-body text-xs sm:gap-3">
          <a
            href="mailto:info@funerariacubillos.cl"
            className="inline-flex items-center gap-2 transition hover:text-brand-accent"
          >
            <MailIcon className="size-4 shrink-0" />
            info@funerariacubillos.cl
          </a>
          <span className="text-white/35">|</span>
          <span className="hidden items-center gap-2 text-white/85 md:inline-flex">
            <PinIcon className="size-4 shrink-0" />
            Iquique · Alto Hospicio · Pozo Almonte
          </span>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.platform}
              className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-accent hover:bg-brand-accent hover:text-brand-primary"
            >
              <SocialIcon platform={link.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
