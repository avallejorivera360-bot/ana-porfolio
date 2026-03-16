import React from 'react';

interface HighlightConfig {
  text: string;
  highlightTerms: string[];
}

/**
 * Colores del proyecto para resaltar, rotando entre ellos
 */
const highlightColors = [
  'text-[#c0576f] dark:text-[#febd84] font-semibold',
  'text-[#febd84] dark:text-[#c0576f] font-semibold',
  'text-[#e48679] dark:text-[#e48679] font-semibold',
];

/**
 * Resalta términos específicos en un texto alternando colores del proyecto
 * @param text - El texto a procesar
 * @param highlightTerms - Array de términos a resaltar
 * @returns JSX con los términos resaltados usando colores del proyecto
 */
export function highlightText({ text, highlightTerms }: HighlightConfig): React.ReactNode {
  if (!highlightTerms.length) return text;

  // Crear un patrón regex que matchee cualquiera de los términos
  // Ordenar por longitud descendente para evitar matches parciales
  const sortedTerms = [...highlightTerms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  const parts = text.split(pattern);
  let colorIndex = 0;

  return parts.map((part, index) => {
    // Si el parte matchea con uno de los términos a resaltar, devolver un span con color alterno
    if (highlightTerms.some(term => term.toLowerCase() === part.toLowerCase())) {
      const color = highlightColors[colorIndex % highlightColors.length];
      colorIndex++;
      return (
        <span key={index} className={color}>
          {part}
        </span>
      );
    }
    return part;
  });
}
