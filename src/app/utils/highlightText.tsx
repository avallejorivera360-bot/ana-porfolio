import React from 'react';

interface HighlightConfig {
  text: string;
  highlightTerms: string[];
}

/**
 * Resalta términos específicos en un texto usando un span con clases Tailwind
 * @param text - El texto a procesar
 * @param highlightTerms - Array de términos a resaltar
 * @returns JSX con los términos resaltados
 */
export function highlightText({ text, highlightTerms }: HighlightConfig): React.ReactNode {
  if (!highlightTerms.length) return text;

  // Crear un patrón regex que matchee cualquiera de los términos
  // Ordenar por longitud descendente para evitar matches parciales
  const sortedTerms = [...highlightTerms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    // Si el parte matchea con uno de los términos a resaltar, devolver un span resaltado
    if (highlightTerms.some(term => term.toLowerCase() === part.toLowerCase())) {
      return (
        <span key={index} className="bg-yellow-200 dark:bg-yellow-400 dark:text-gray-900 font-semibold px-1 rounded">
          {part}
        </span>
      );
    }
    return part;
  });
}
