import { Burger, Group, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router';
import { IconSun, IconMoon, IconHome, IconFileText, IconBriefcase, IconMail } from '@tabler/icons-react';
import { useMantineColorScheme } from '@mantine/core';
import classes from './Navbar.module.css';

const links = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/resume', label: 'Resume', icon: IconFileText },
  { link: '/selected-work', label: 'Selected Work', icon: IconBriefcase },
  { link: '/contact', label: 'Contact', icon: IconMail },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => {
    const Icon = link.icon;
    const isActive = location.pathname === link.link;
    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        data-active={isActive || undefined}
      >
        <Icon size={16} style={{ marginRight: 8 }} />
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <ActionIcon
          onClick={() => toggleColorScheme()}
          variant="default"
          size="lg"
          aria-label="Toggle color scheme"
          style={{ position: 'absolute', right: '16px' }}
        >
          {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
        
        <Burger 
          opened={opened} 
          onClick={toggle} 
          hiddenFrom="xs" 
          size="sm" 
          style={{ position: 'absolute', right: '16px' }}
        />
      </div>
    </header>
  );
}
