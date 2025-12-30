'use client';

import clsx from 'clsx';
import styles from './SectionWrapper.module.scss';

interface SectionWrapperProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  hasContainer?: boolean;
  hasContainerForHeader?: boolean;
  hasHeader?: boolean;
}

export default function SectionWrapper({
  title,
  actions,
  children,
  hasContainer = true,
  hasContainerForHeader = false,
  hasHeader = true,
}: SectionWrapperProps) {
  return (
    <section className={clsx(styles.section, { container: hasContainer })}>
      {hasHeader && (title || actions) && (
        <div className={clsx(styles.sectionHeader, { container: hasContainerForHeader })}>
          <div className={styles.sectionTitle}>{title}</div>
          <div className={styles.sectionActions}>{actions}</div>
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
