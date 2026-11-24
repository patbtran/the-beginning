//contorls how expanded project cards looks and behaves
//this component is reusable that can display for any project card

import { motion } from "motion/react";

function ExpandedProject({ project, activeImage, setActiveImage, onClose }) {
  const images = project.images ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black/75 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative bg-[#302a2a] text-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10"
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="absolute top-4 right-5 text-2xl text-gray-300 hover:text-white cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold mb-6 pr-8">
          {project.title}
        </h2>

        {images.length > 0 && (
          <div className="mb-6">
            <div className="relative bg-[#484040] rounded-xl overflow-hidden">
              <img
                src={images[activeImage]}
                alt={`${project.title} image ${activeImage + 1}`}
                className="w-full h-64 md:h-96 object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((activeImage - 1 + images.length) % images.length)
                    }
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full cursor-pointer"
                  >
                    ❮
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((activeImage + 1) % images.length)
                    }
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full cursor-pointer"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    className={`shrink-0 rounded-lg overflow-hidden border-2 cursor-pointer ${
                      activeImage === index
                        ? "border-[#c4b5f5]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-20 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>

        {project.links?.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c4b5f5] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ExpandedProject;
