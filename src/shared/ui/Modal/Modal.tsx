import { Box } from '@chakra-ui/react';
import { type ReactNode, useCallback, useEffect } from 'react';

import { Portal } from '../Portal/Portal';
import styles from './Modal.module.css';

type ModalProps = {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
};

export const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props;

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <Box className={`${styles.modal} ${isOpen ? styles.opened : ''}`}>
        <Box className={styles.overlay} onClick={closeHandler}>
          <Box className={styles.content} onClick={onContentClick}>
            {children}
          </Box>
        </Box>
      </Box>
    </Portal>
  );
};
