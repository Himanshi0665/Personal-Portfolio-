// import React from 'react';

// import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import Button from '../../styles/GlobalComponents/Button';
// import { LeftSection } from './HeroStyles';

// const Hero = (props) => (
//   <>
//     <Section row nopadding>
//       <LeftSection>
//         <SectionTitle main center>
//           Welcome To <br />
//           My Personal Portfolio
//         </SectionTitle>
//         <SectionText>
//         Hey, I'm Himanshi — a 3rd-year undergraduate student at Delhi Technological University, passionate about building user-centric web applications and solving real-world problems through code. I’m constantly learning and exploring new technologies to grow as a developer.
//         </SectionText>
//         <Button onClick={props.handleClick}>Learn More</Button>
//       </LeftSection>
//     </Section>
//   </>
// );

// export default Hero;



// *****new code*****
import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, RightSection, ProfileImage } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
       Hi, I'm Himanshi — a third-year undergraduate student in Mathematics and Computing at Delhi Technological University. I have a strong interest in full-stack web development and problem-solving, and I’m currently seeking opportunities to apply my skills to real-world projects that make meaningful impact.
      </SectionText>
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>

    <RightSection>
      <ProfileImage src="/himanshi.jpg" alt="Himanshi Sharma" />
    </RightSection>
  </Section>
);

export default Hero;

