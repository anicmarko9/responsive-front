import React, { ReactNode, useEffect } from 'react';
import ReactPortal from '@/components/content/locations/ReactPortal';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed left-0 top-0 z-40 h-screen w-screen bg-gray-500 ">
          <div className="fixed inset-x-16 inset-y-32 box-border flex  min-w-fit flex-col overflow-hidden rounded bg-gray-500 p-5">
            <button
              onClick={handleClose}
              className="self-end rounded border px-8 py-2 font-bold hover:bg-violet-600"
            >
              Close
            </button>
            <div className="box-border h-5/6">{children}</div>
          </div>
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
