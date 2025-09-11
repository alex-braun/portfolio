import { Stack } from '@mantine/core';

export function ResumePage() {
  return (
    <Stack align="center" gap="md">
      <p>Download my resume or view my professional experience and skills.</p>
      <Stack gap="sm" w="100%" maw={600}>
        <h2>Experience</h2>
        <div>
          <h3>Software Developer</h3>
          <p><strong>Company Name</strong> | 2022 - Present</p>
          <p>Developed and maintained web applications using modern technologies.</p>
        </div>
        <div>
          <h3>Junior Developer</h3>
          <p><strong>Previous Company</strong> | 2020 - 2022</p>
          <p>Assisted in developing and testing software solutions.</p>
        </div>
        
        <h2>Skills</h2>
        <div>
          <p><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java</p>
          <p><strong>Frameworks:</strong> React, Node.js, Express</p>
          <p><strong>Tools:</strong> Git, Docker, AWS, Vite</p>
        </div>
        
        <h2>Education</h2>
        <div>
          <h3>Bachelor of Computer Science</h3>
          <p><strong>University Name</strong> | 2016 - 2020</p>
        </div>
      </Stack>
    </Stack>
  );
}
