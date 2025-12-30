'use client';

import Image from 'next/image';
import styles from './SocialLinks.module.scss';

interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

function SocialLink({ href, icon, alt }: SocialLinkProps) {
  return (
    <a href={href} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={alt} width={32} height={32} />
    </a>
  );
}

export default function SocialLinks() {
  const links = [
    { href: '#', icon: '/assets/images/icons/social-viber.svg', alt: 'Viber' },
    { href: '#', icon: '/assets/images/icons/social-telegram.svg', alt: 'Telegram' },
    { href: '#', icon: '/assets/images/icons/social-whatsapp.svg', alt: 'WhatsApp' },
    { href: '#', icon: '/assets/images/icons/social-instagram.svg', alt: 'Instagram' },
  ];

  return (
    <div className={styles.socialLinks}>
      {links.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
}
