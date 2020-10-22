/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image
        src={logo}
        width="186"
        height="37"
        sx={{ display: 'flex' }}
        alt="startup landing logo"
      />
    </Link>
  );
}
