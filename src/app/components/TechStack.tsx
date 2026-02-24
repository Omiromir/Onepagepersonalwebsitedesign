import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    'Revit',
    'Navisworks',
    'BIM 360',
    'Dynamo',
    'Rhino',
    'Grasshopper',
    'Power BI',
    'Python',
    'ISO 19650'
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="group relative"
        >
          <div className="bg-primary rounded-xl px-4 py-2.5 text-primary-foreground text-[13px] font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
            {tech}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
