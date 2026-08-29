import { Fragment } from 'react';
import Link from 'next/link';
import { Breadcrumb, CrumbSep } from '../_styles';

type Crumb = {
  href?: string;
  label: string;
};

type CommLabBreadcrumbProps = {
  items: Crumb[];
};

export const CommLabBreadcrumb = ({ items }: CommLabBreadcrumbProps) => {
  return (
    <Breadcrumb>
      {items.map(({ href, label }, i) => (
        <Fragment key={label}>
          {i > 0 && <CrumbSep>＞</CrumbSep>}
          {href ? (
            <Link href={href}>{label}</Link>
          ) : (
            <span aria-current="page">{label}</span>
          )}
        </Fragment>
      ))}
    </Breadcrumb>
  );
};