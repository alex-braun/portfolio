import { useEffect, useState } from 'react';
import { Burger, Collapse, Container, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from '@components/Navbar/Navbar.module.css';

const links = [
  { link: '/', label: 'About' },
  { link: '/resume', label: 'Resume' },
  { link: '/selected-work', label: 'Selected Work' },
  { link: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  const renderLinks = (onNavigate?: () => void) =>
    links.map((link) => {
      const isActive = location.pathname === link.link;
      return (
        <Link
          key={link.label}
          to={link.link}
          className={classes.link}
          data-active={isActive || undefined}
          viewTransition
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      );
    });

  return (
    <header className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
      <Container size="xl" px={{ base: 'sm', sm: 'xl' }} className={classes.inner}>
        <Link to="/" className={classes.brand} viewTransition>
          <span className={classes.brandName}>Alex Braun</span>
          <span className={classes.brandTagline}>software engineer</span>
        </Link>

        <Group gap={32}>
          <Group gap={28} visibleFrom="xs">
            {renderLinks()}
          </Group>

          <Group gap={4}>
            <ActionIcon
              onClick={() => toggleColorScheme()}
              variant="subtle"
              size="lg"
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>

            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" aria-label="Toggle navigation" />
          </Group>
        </Group>
      </Container>

      <Collapse in={opened} className={classes.mobileMenu}>
        <Container size="xl" px={{ base: 'sm', sm: 'xl' }} className={classes.mobileMenuInner}>
          {renderLinks(close)}
        </Container>
      </Collapse>
    </header>
  );
}
