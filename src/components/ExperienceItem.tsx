interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies?: string;
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  achievements,
  technologies
}: ExperienceItemProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-700 text-xs">
            <span className="font-medium">{company}</span> — {location}
          </p>
        </div>
        <p className="text-xs text-gray-600 whitespace-nowrap ml-2">{period}</p>
      </div>
      <ul className="list-disc list-inside space-y-0 text-gray-700 text-xs ml-2">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {technologies && (
        <p className="mt-1 text-xs text-gray-600">
          <span className="font-semibold">Tech :</span> {technologies}
        </p>
      )}
    </div>
  );
}

export default ExperienceItem;
