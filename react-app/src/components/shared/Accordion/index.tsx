'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Accordion.module.scss';

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={onToggle}>
        <span className={styles.title}>{title}</span>
        <span className={`icon ${isOpen ? 'icon-arrow_up' : 'icon-arrow_down'}`}></span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.accordionContent}
          >
            <div className={styles.contentInner}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Accordion({ children }: AccordionProps) {
  return <div className={styles.accordion}>{children}</div>;
}

Accordion.Item = AccordionItem;

export default Accordion;
