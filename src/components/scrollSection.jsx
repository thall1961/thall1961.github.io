import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function ScrollSection({ id, children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 transform
        ${isInView 
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
        }
        ${className}`}
    >
      {children}
    </section>
  );
}

ScrollSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}; 