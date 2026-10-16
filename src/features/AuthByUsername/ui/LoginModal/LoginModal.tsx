import { memo } from 'react';

import { Modal } from '@/shared/ui/Modal/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = memo(({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginFormAsync />
    </Modal>
  );
});
