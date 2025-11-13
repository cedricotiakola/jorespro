import { ExternalLink } from 'lucide-react';

interface ProjectItemProps {
  name: string;
  description: string;
  technologies: string;
  link?: string;
}

function ProjectItem({ name, description, technologies, link }: ProjectItemProps) {
  return (
    <div className="border-l-3 border-blue-600 pl-2 py-0">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-xs">{name}</h3>
          <p className="text-xs text-gray-700">{description}</p>
          <p className="text-xs text-gray-600 mt-0.5">
            <span className="font-semibold">Tech :</span> {technologies}
          </p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:text-blue-800 flex items-center gap-0.5 text-xs print:hidden flex-shrink-0"
          >
            <ExternalLink size={12} />
          </a>
        )}
      </div>
      {link && (
        <p className="text-xs text-gray-500 hidden print:block break-all">{link}</p>
      )}
    </div>
  );
}

export default ProjectItem;
