import React from 'react';

import ProjectCard from '@/components/common/cards/FeaturedProjectCard';
import SectionTitle from '@/components/common/elements/MainTitle';
import SeeMoreButton from '@/components/common/typography/buttons/SeeMore';
import Parragraph from '@/components/common/typography/Parragraph';
import type { ProjectCardType } from '@/types/component.types';

type FeaturedProjectsType = {
  projects: ProjectCardType[];
};

const FeaturedProjects = ({ projects }: FeaturedProjectsType) => {
  return (
    <section className="">
      <SectionTitle className="">Featured Projects</SectionTitle>
      <Parragraph className="mt-1">{`Project's that I am proud of`}</Parragraph>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((item: ProjectCardType) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
      <SeeMoreButton route="/projects">See more projects</SeeMoreButton>
    </section>
  );
};

export default FeaturedProjects;
