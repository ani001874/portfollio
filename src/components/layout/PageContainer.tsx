import React, { useEffect } from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  title,
  description,
}) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} — Alex Rivera`;
    } else {
      document.title = 'Alex Rivera — Frontend Developer & Aspiring Software Engineer';
    }

    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <div className={`w-full max-w-content mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};
